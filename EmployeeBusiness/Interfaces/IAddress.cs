using Employees.Business.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees.Business.Interfaces
{
    public interface IAddress
    {
        ContactType AddressType { get; set; }
        string Address1 { get; set; }
        string Address2 { get; set; }
        string City { get; set; }
        string State { get; set; }
        string Country { get; set; }
        string Zipcode { get; set; }
    }
}
