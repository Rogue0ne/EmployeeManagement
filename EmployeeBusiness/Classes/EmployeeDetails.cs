using Employees.Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employees.Business.Classes
{
    public class EmployeeDetails : IEmployeeDetails
    {
        public int Id { get; set; }
        public Address AddressDetails { get; set; }
        public int EmployeeId { get; set; }

    }
}
