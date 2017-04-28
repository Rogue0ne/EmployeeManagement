using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees.Business.Interfaces
{
    public interface IContentType : IRecord
    {
        string Name { get; set; }
    }
}
