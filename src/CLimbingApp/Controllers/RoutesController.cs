using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ClimbingApp.Services;
using ClimbingApp.Models;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ScrumPractice.Controllers
{
    [Route("api/[controller]")]
    public class RoutesController : Controller
    {
        private RouteService service;
        public RoutesController(RouteService service)
        {
            this.service = service;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Route> Get()
        {
            return service.GetAllRoutes();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Route record = service.GetRouteById(id);
            if (record != null)
            {
                return Ok(record);
            }
            return NotFound();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Route value)
        {
            var record = service.SaveRoute(value);
            if (record != null)
            {
                return Created("api/routes/" + record.Id, record);
            }
            return BadRequest("Could not find the provided record.");
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Route value)
        {
            service.UpdateRoute(id, value);
            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            service.DeleteRoute(id);
            return Ok();
        }
    }
}
