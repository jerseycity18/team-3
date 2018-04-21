using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BestBuddiesShare.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BestBuddiesApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Buddy")]
    public class BuddyController : Controller
    {
        // GET: api/Buddy
        [HttpGet]
        public IEnumerable<Buddy> Get()
        {
            return new Buddy[] {new Buddy(), new Buddy()};
        }

        // GET: api/Buddy/5
        [HttpGet("{id}", Name = "Get")]
        public Buddy Get(int id)
        {
            return new Buddy();
        }
        
        // POST: api/Buddy
        [HttpPost]
        public void Post([FromBody]Buddy value)
        {
        }
        
        // PUT: api/Buddy/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Buddy value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
