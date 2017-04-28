using Employees.Business.Interfaces;
using System.Collections.Generic;

namespace Employees.Business.Classes
{
    public class Employee : IEmployee
    {
        public int Id { get; set; }

        public int DepartmentId { get; set; }

        public IList<EmployeeDetails> Details { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string MiddleName { get; set; }

        public Department DepartmentDetails { get; set; }
    }
}
