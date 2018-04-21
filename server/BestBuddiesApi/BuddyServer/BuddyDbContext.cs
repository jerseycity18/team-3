using BestBuddiesShare.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuddyServer
{
    public class BuddyDbContext: DbContext
    {
        public BuddyDbContext(DbContextOptions<BuddyDbContext> options)
            : base(options)
        { }

        public DbSet<Buddy> Buddies { get; set; }
        public DbSet<Volunteer> Volunteers { get; set; }
    }
}
