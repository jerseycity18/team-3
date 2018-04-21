using BestBuddiesShare.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BestBuddiesShare.Business
{
    public class BuddyMatch
    {
        IEnumerable<Volunteer> MatchBuddies(Buddy buddy, List<Volunteer> volunteers)
        {
            //First Location
            var query = volunteers.Where(x=>x.ContactInfo.Address.City==buddy.ContactInfo.Address.City)
                .Select(g => new { VolunteerInfo = g, Points = 0 });

            //Interests
            foreach(var volunteerPoints in query.ToList())
            {
                var matchinInterestCount = buddy.Interests.Intersect(volunteerPoints.VolunteerInfo.Interests).Count();
                //volunteerPoints.Points = matchinInterestCount;
            }
            return null;

        }
    }
}
