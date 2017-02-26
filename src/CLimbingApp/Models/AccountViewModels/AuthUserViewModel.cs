using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ClimbingApp.Models.AccountViewModels
{
    public class AuthUserViewModel
    {
        public bool IsAdmin { get; internal set; }
        public string UserName { get; set; }
    }
}
