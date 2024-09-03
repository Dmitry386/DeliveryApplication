using System.ComponentModel.DataAnnotations.Schema;

namespace DeliveryApp.Core.Models
{
    [ComplexType]
    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
    }
}