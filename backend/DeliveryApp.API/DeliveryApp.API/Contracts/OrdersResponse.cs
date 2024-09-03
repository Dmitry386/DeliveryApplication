using DeliveryApp.Core.Models;

namespace DeliveryApp.API.Contracts
{
    public record OrdersResponse
    (
        int Id,
        Address SenderAddress,
        Address ReceiverAddress,
        float Weight,
        DateTime DateOfPickup
    );
}