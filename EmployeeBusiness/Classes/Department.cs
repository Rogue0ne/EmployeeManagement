using Employees.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees.Business.Classes
{
    public class Department : IDepartment
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
