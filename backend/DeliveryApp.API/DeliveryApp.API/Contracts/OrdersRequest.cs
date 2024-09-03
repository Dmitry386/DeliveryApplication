using DeliveryApp.Core.Models;

namespace DeliveryApp.API.Contracts
{
    public record OrdersRequest  
    (
        int Id, 
        Address SenderAddress, 
        Address ReceiverAddress, 
        float Weight, 
        DateTime DateOfPickup
    );
}