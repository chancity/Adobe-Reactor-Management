using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using AdobeReactorApi;
using Backend.Services;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Routing.Constraints;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace Backend
{
    public class PrerenderContent
    {
        public string Css { get; }
        public string Scripts { get; }

        public PrerenderContent(string css, string scripts)
        {
            Css = css;
            Scripts = scripts;
        }
    }
    public class Startup
    {
        private IHostingEnvironment CurrentEnvironment { get; set; }
        public Startup(IHostingEnvironment env, IConfiguration configuration)
        {
            Configuration = configuration;
            CurrentEnvironment = env;
        }

        private IConfiguration Configuration { get; }

        private static SecurityKey GetSecurityKey(string filePath)
        {
            var certificate = new X509Certificate2(X509Certificate.CreateFromSignedFile(filePath));
            var rsaPrivateKey = certificate.GetRSAPrivateKey();
            return new RsaSecurityKey(rsaPrivateKey);
        }


        private PrerenderContent GetPrerenderContent()
        {
            var spaBuildIndex = @"ClientApp\build\index.html";
            string baseHtml = "";
            using (var str = new StreamReader(spaBuildIndex))
                baseHtml = str.ReadToEnd();

            var doc = new HtmlDocument();
            doc.Load(spaBuildIndex);
            var css = GetChunks(doc, "link");
            var scripts = GetChunks(doc, "script");

            return new PrerenderContent(css, scripts);
        }
        private string GetChunks(HtmlDocument doc, string elementName)
        {
            var chunks = doc.DocumentNode.Descendants().Where(n => n.Name == elementName).Select(n => n.OuterHtml);
            return String.Join(" ", chunks);
        }


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddNodeServices(options =>
            {

                if (CurrentEnvironment.IsDevelopment())
                {
                    options.LaunchWithDebugging = true;
                    options.DebuggingPort = 9229;
                    options.ProjectPath = "../Frontend/ClientApp";
                }
                else
                {
                    options.ProjectPath = "ClientApp/";
                }
           
            });

            services.AddSpaPrerenderer();
            services.AddSingleton(GetPrerenderContent());
            services
                .AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });


            var accountOptions = new AccountOptions(
                Configuration[Defaults.ORGANIZATION_ID],
                Configuration[Defaults.TECHNICAL_ACCOUNT_ID],
                Configuration[Defaults.CLIENT_ID],
                Configuration[Defaults.CLIENT_SECRET]);


            var securityKey = GetSecurityKey(Configuration[Defaults.CERTIFICATE_PATH]);
            var reactorApi = new ReactorApi(accountOptions, securityKey);


            services
                .AddSingleton(reactorApi)
                .AddSingleton<ReactorService>();


            services.AddCors(options =>
            {
                options.AddPolicy(Defaults.ALL_CORS_POLICY,
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (CurrentEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            
            app.UseCors(Defaults.ALL_CORS_POLICY);

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "proxy",
                    template: "adobe_launch/proxy/{*slug}",
                    defaults: new { controller = "AdobeLaunch", action = "CatchAll" }
                );

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "PreRender", action = "Index" });
            });


            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "../Frontend/ClientApp";
                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}