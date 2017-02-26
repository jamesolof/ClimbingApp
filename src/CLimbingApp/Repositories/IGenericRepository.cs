﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimbingApp.Repositories
{
    public interface IGenericRepository
    {
        IQueryable<T> Query<T>() where T : class;
        T Add<T>(T item) where T : class;
        void Update<T>(T item) where T : class;
        void Delete<T>(T item) where T : class;
        void SaveChanges();
    }
}
