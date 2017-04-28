using Employees.Business.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees.Business.Interfaces
{
    public interface IEmployeeDetails : IRecord
    {
        int EmployeeId { get; set; }
        Address AddressDetails { get; set; }
        
    }
}
