using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Backend.Middleware
{
    public class PrerenderMiddleware
    {
        private readonly RequestDelegate _next;

        public PrerenderMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {

            Stream originalBody = context.Response.Body;

            try
            {
                using (var memStream = new MemoryStream())
                {
                    context.Response.Body = memStream;

                    await _next(context);


                    if (!string.IsNullOrEmpty(context.Response.ContentType) && context.Response.ContentType.Contains("text/html;"))
                    {
                        Console.WriteLine("try prerender");
                        using (var decompressedStream = new MemoryStream())
                        {
                            memStream.Position = 0;
                            using (GZipStream decompressionStream = new GZipStream(memStream, CompressionMode.Decompress, true))
                            {
                                await decompressionStream.CopyToAsync(decompressedStream);
                            }

                            decompressedStream.Position = 0;
                            string responseBody = new StreamReader(decompressedStream).ReadToEnd();
                            if (responseBody.Contains("<script>window.UseAdobeReactorEndpoint=!0</script>"))
                            {
                                Console.WriteLine("Contains..");
                            }
                            responseBody = responseBody.Replace("<script>window.UseAdobeReactorEndpoint=!0</script>", "<script>window.UseAdobeReactorEndpoint=!1</script>");
                            Console.WriteLine(responseBody);
                            using (MemoryStream compressedStream = new MemoryStream())
                            {
                                using (MemoryStream streamToCompress = new MemoryStream(Encoding.UTF8.GetBytes(responseBody)))
                                using (GZipStream compressionStream = new GZipStream(compressedStream, CompressionMode.Compress, true))
                                {
                                    await streamToCompress.CopyToAsync(compressionStream);
                                }


                                compressedStream.Position = 0;
                                await compressedStream.CopyToAsync(originalBody);
                                compressedStream.Dispose();
                            }
                        }
                     
                    }

                    memStream.Position = 0;
                    await memStream.CopyToAsync(originalBody);
                }

            }
            finally
            {
                context.Response.Body = originalBody;
            }

        }
    }
}
