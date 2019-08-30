using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdobeReactorApi;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Backend.Controllers
{
    public class PreRenderController : Controller
    {
        private readonly ReactorApi _reactorApi;
        public PreRenderController(ReactorApi reactorApi)
        {
            _reactorApi = reactorApi;
        }

        public async Task<IActionResult> Index()
        {
            var path = HttpContext.Request.Path.Value;
            var pathSplit = path.Split("/");

            var companies = ConvertToObject(await _reactorApi.Client.Companies().ConfigureAwait(false));
            var company = companies.data[0];
            var companyId = company.id;
            var companyName = company.attributes.name;

            var properties = ConvertToObject(await _reactorApi.Client.Properties(companyId.ToString()).ConfigureAwait(false));
            var property = properties.data[0];
            var propertyId = property.id;
            var propertyName = property.attributes.name;
            var propertyPlatform = property.platform;

            var list = properties.data;
            var data = property;

            if (pathSplit.Length <= 2)
            {
                path = $"/companies/{companyId}/properties";

                return Redirect(path);
            }
            try
            {
                var resource = ConvertToObject(await _reactorApi.HttpClient.GetStringAsync(HttpContext.Request.Path).ConfigureAwait(false));;
                data = resource;
                list = resource.data;

            }
            catch (Exception e)
            {
                Console.WriteLine(e);

            }

            var resourceId = property.id;
            var resourceType = property.type;
            dynamic meta = data.meta;

            Dictionary<string, dynamic> map = new Dictionary<string, dynamic>();
    
            if (list?.Count != null)
            {
                foreach (dynamic o in list)
                {
                    map.Add(o.id.ToString(),o);
                }
            }
            else
            {
                map = null;
                list = null;
            }
            

            var reactorState = new Reactor()
            {
                companyId = companyId,
                companyName = companyName,
                propertyId = propertyId,
                propertyName = propertyName,
                propertyPlatform = propertyPlatform,
                resourceId = resourceId,
                resourceType = resourceType,
                path = path,
                data = data,
                list = list,
                map = map,
                meta = meta
            };
            

            Console.WriteLine("hmm");
            return View(reactorState);
        }

        public dynamic ConvertToObject(string json)
        {
            return JsonConvert.DeserializeObject<dynamic>(json);
        }
    }

    public class Reactor
    {
        public bool initialized { get; set; } = true;
        public bool loaded { get; set; } = true;
        public string companyId { get; set; }
        public string companyName { get; set; }
        public string propertyId { get; set; }
        public string propertyName { get; set; }
        public string propertyPlatform { get; set; }
        public string resourceId { get; set; }
        public string resourceType { get; set; }
        public string path { get; set; }
        public dynamic data { get; set; }
        public dynamic list { get; set; }
        public dynamic map { get; set; }
        public dynamic meta { get; set; }


    }
}
