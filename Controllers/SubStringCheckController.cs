using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SubStringSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubStringCheckController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<SubStringCheck> Get()
        {
            yield return new SubStringCheck
            {
                Results = ""
            };
        }
    }
}
