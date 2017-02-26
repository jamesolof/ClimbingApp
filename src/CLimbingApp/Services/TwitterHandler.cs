using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClimbingApp.Services
{
    public class TwitterHandler
    {
        public TwitterHandler(IOptions<TwitterOptions> optionsAccessor)
        {
            Options = optionsAccessor.Value;
        }

        public TwitterOptions Options { get; }
    }
}
