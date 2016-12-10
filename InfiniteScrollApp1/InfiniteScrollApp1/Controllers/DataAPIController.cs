using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace InfiniteScrollApp1.Controllers
{
    public class DataAPIController : ApiController
    {
        private static int loaded = 0;

        public JsonResult<int> Get()
        {
            loaded += 20;
            return Json(loaded);
        }
    }
}
