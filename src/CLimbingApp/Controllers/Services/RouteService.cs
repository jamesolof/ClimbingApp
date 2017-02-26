using ClimbingApp.Models;
using ClimbingApp.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimbingApp.Services
{
    public class RouteService
    {
        private IGenericRepository repo;
        public RouteService(IGenericRepository repo)
        {
            this.repo = repo;
        }

        //get
        public IEnumerable<Route> GetAllRoutes()
        {
            return repo.Query<Route>();
        }

        public Route GetRouteById(int id)
        {
            return repo.Query<Route>().FirstOrDefault(x => x.Id == id);
        }

        //create
        public Route SaveRoute(Route item)
        {
            var record = repo.Add<Route>(item);
            return record;
        }

        //update
        public void UpdateRoute(int id, Route item)
        {
            item.Id = id;
            repo.Update<Route>(item);
        }

        //delete
        public void DeleteRoute(int id)
        {
            var record = repo.Query<Route>().FirstOrDefault(x => x.Id == id);
            repo.Delete<Route>(record);
        }
    }
}
