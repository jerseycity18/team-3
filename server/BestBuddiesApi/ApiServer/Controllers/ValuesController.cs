using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BestBuddiesShare.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ApiServer.Controllers
{
    [Route("api/[controller]")]
    public class HobbyLookupController
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string>();
        }
    }


    [Route("api/[controller]")]
    public class InterestLookupController
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string>();
        }
    }

    [Route("api/[controller]")]
    public class BuddyController : Controller
    {
        [HttpGet]
        public IEnumerable<Participant> Get()
        {
            return new List<Participant>();
        }

        [HttpPost]
        public IActionResult Post()
        {
            return Ok();
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return Ok();
        }
    }


    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
