using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ClimbingApp.Models
{
    public class Route
    {
        [Required]
        public int Id { get; set; }
        public string Grade { get; set; }
        public string Name { get; set; }
        public bool WasClimbed { get; set; }

        public string description { get; set; }

        public int LocationId { get; set; }

        public virtual Location Location { get; set; }

    }
}
