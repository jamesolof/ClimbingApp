using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ClimbingApp.Data;
using Microsoft.EntityFrameworkCore;
using ClimbingApp.Models;
using ClimbingApp.Repositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CLimbingApp.Controllers
{
    [Route("api/[controller]")]
    public class LocationsController : Controller
    {
        private IGenericRepository repo;

        private ApplicationDbContext db;

        public LocationsController(IGenericRepository repo, ApplicationDbContext db)
        {
            this.repo = repo;
            this.db = db;

        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Location> Get()
        {
            return db.Locations.Include(x => x.Route).ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var record = repo.Query<Location>().FirstOrDefault(x => x.Id == id);
            if (record != null)
            {
                return Ok(record);
            }
            return NotFound();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Location value)
        {
            var record = repo.Add<Location>(value);
            return Created("api/location/" + record.Id, record);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Location value)
        {
            value.Id = id;
            repo.Update<Location>(value);
            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var record = repo.Query<Location>().FirstOrDefault(x => x.Id == id);
            repo.Delete<Location>(record);
            return Ok();
        }
    }
}
