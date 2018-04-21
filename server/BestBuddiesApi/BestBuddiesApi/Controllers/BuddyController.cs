using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BestBuddiesShare.Entities;
using BuddyServer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BestBuddiesApi.Controllers
{
    [Route("api/[controller]")]
    public class InterestLookupController
    {
        [HttpGet]
        public IList<Interest> Get()
        {
            return EntityStore.Instance.GetInterests();
        }
    }


    [Route("api/[controller]")]
    public class MustHaveLookupController
    {
        [HttpGet]
        public IList<MustHave> Get()
        {
            return EntityStore.Instance.GetMustHaves();
        }
    }

    [Route("api/[controller]")]
    public class VolunteerController : Controller
    {
        [HttpGet]
        public IList<Volunteer> Get()
        {
            return EntityStore.Instance.GetVolunteers();
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
    public class ParticipantController : Controller
    {
        [HttpGet]
        public IList<Participant> Get()
        {
            return EntityStore.Instance.GetParticipants();
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
}
