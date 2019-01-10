using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularTemplate.Controllers
{
    [RoutePrefix("Api")]
    public class MainController : ApiController
    {


        //public DAL.ClsDal m_dal;
        //public DAL.ClsDal getDal
        //{
        //    get
        //    {
        //        if (m_dal == null)
        //        {
        //            m_dal = new DAL.ClsDal();
        //        }
        //        return m_dal;
        //    }
        //}

        //[HttpPost]
        //[Route("SomeDbInsertFunction")]
        //public IHttpActionResult SomeDbInsertFunction(clsSomeData clsData)
        //{
        //    try
        //    {
        //        return Ok(getDal.SomeDbInsertFunction(clsData.Prop1, clsData.Prop2, clsData.Prop3));
        //    }
        //    catch (Exception ex)
        //    {
        //        WriteError(ex.Message, ex.StackTrace);
        //        return BadRequest();
        //    }
        //}


        public string GetConfigKey(string key)
        {
            try
            {
                return System.Configuration.ConfigurationManager.AppSettings[key].ToString();
            }
            catch (Exception ex)
            {
                WriteError(ex.Message, ex.StackTrace);
                return string.Empty;
            }
        }



        [Route("Test"), HttpGet]
        public string Test()
        {
            return "The server is working !";
        }

        [Route("TestWithParameter"), HttpPost]
        public IHttpActionResult TestWithParameter([FromBody]string parameter)
        {
            try
            {
                var x = "Server received value: " + parameter;
                return Ok(x);
            }
            catch (Exception ex)
            {
                WriteError(ex.Message, ex.StackTrace);
                return BadRequest();
            }
        }

        private void WriteError(string message, string stackTrace)
        {
            //implement write error stuff
        }
    }
}
