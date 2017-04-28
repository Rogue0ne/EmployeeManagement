using Employees.Business.Interfaces;
using Employees.Business.Enums;

namespace Employees.Business.Classes
{
    public class Address : IAddress
    {
        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public ContactType AddressType { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public string Zipcode { get; set; }
    }
}
