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
            // Only get volunteers withing buddy preferred location
            var query = volunteers.Where(x=>x.PrefferedLocationsIds.Intersect(buddy.PrefferedLocationsIds).Count() > 0)
                .Select(g => new VolunteerRanking { VolunteerInfo = g, Points = 0 });

            IEnumerable<VolunteerRanking> volunteerRankings = query.ToList();

            foreach(VolunteerRanking volunteerRanking in volunteerRankings)
            {
                var matchinInterestCount = buddy.Interests.Intersect(volunteerRanking.VolunteerInfo.Interests).Count();
                var mustHaveCount = buddy.MustHaves.Intersect(volunteerRanking.VolunteerInfo.MustHaves).Count();
                volunteerRanking.Points += matchinInterestCount; //Each matching interest gets 1 point
                volunteerRanking.Points += mustHaveCount * 3; //MustHave matches are more important than interests therefore they get 3 points
            }

            return volunteerRankings.OrderByDescending(x=>x.Points).Take(5).Select(x=>x.VolunteerInfo);
        }
    }

    public class VolunteerRanking
    {
        public Volunteer VolunteerInfo { get; set; }
        public int Points { get; set; }
    }
}
