using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using AdobeReactorApi;
using Backend.Middleware;
using Backend.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        private static SecurityKey GetSecurityKey(string filePath)
        {
            var certificate = new X509Certificate2(X509Certificate.CreateFromSignedFile(filePath));
            var rsaPrivateKey = certificate.GetRSAPrivateKey();
            return new RsaSecurityKey(rsaPrivateKey);
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                });


            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
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
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseSession();

            app.UseCors(Defaults.ALL_CORS_POLICY);
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}"
                );

                routes.MapRoute(
                    name: "proxy",
                    template: "adobe_launch/proxy/{*slug}",
                    defaults: new { controller = "AdobeLaunch", action = "CatchAll" }
                );
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

        private async Task Callback(object state)
        {
            var context = (HttpContext) state;
        }
    }
}