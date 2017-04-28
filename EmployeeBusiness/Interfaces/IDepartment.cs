using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees.Business.Interfaces
{
    public interface IDepartment : IRecord
    {
       string Name { get; set; }
    }
}
