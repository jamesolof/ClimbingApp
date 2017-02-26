using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ClimbingApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace ClimbingApp.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        public DbSet<Location> Locations { get; set; }
        public DbSet<Route> Routes { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
  : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //define my object relationships here
        }
    }
}
