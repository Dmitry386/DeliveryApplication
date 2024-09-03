namespace DeliveryApp.Core.Models
{
    public class Order
    {
        public int Id { get; set; }
        public required Address SenderAddress { get; set; }
        public required Address ReceiverAddress { get; set; }
        public float Weight { get; set; }
        public DateTime DateOfPickup { get; set; } 
    }
}