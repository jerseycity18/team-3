using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuddyServer
{
    public class BuddyBusiness
    {
        BuddyDbContext dbContext;

        public BuddyBusiness()
        {
            var optionsBuilder = new DbContextOptionsBuilder<BuddyDbContext>();
            optionsBuilder.UseSqlServer("");
            dbContext = new BuddyDbContext(optionsBuilder.Options);
        }

        public IEnumerable<BestBuddiesShare.Entities.Buddy> GetBuddies()
        {
            return dbContext.Buddies;
        }
    }
}
