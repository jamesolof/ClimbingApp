using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ClimbingApp.Models
{
    public class Location
    {
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Route> Route { get; set; }

    }
}
