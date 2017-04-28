using Employees.Business.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees.Business.Interfaces
{
    public interface IEmployee : IRecord
    {
        int DepartmentId { get; set; }
        string FirstName { get; set; }
        string MiddleName { get; set; }
        string LastName { get; set; }
        IList<EmployeeDetails> Details { get; set; }

        Department DepartmentDetails { get; set; }
    }
}
