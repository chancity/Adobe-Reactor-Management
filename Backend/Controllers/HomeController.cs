//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.SpaServices.Prerendering;
//using Newtonsoft.Json;
//
//namespace Backend.Controllers
//{
//    public class HomeController : Controller
//    {
//        [Route("/"), Route("/companies/{id}/properties")]
//        public async Task<IActionResult> Index([FromServices] ISpaPrerenderer prerenderer, string id)
//        {
//            var initialState = JsonConvert.SerializeObject(new { UI = new { }, Reactor = new { } });
//
//            var prerenderResult = await prerenderer.RenderToString("../Frontend/ClientApp/server/bootstrap", null, initialState, 30000);
//
//            return Content(prerenderResult.Html, "text/html");
//        }
//    }
//}
