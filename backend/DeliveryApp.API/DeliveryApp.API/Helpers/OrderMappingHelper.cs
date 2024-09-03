using DeliveryApp.API.Contracts;
using DeliveryApp.Core.Models;

namespace DeliveryApp.API.Helpers
{
    public static class OrderMappingHelper
    {
        public static OrdersRequest ToRequest(Order order)
        {
            return new OrdersRequest
            (
                order.Id,
                order.SenderAddress,
                order.ReceiverAddress,
                order.Weight,
                order.DateOfPickup
            );
        }

        public static OrdersResponse ToResponse(Order order)
        {
            return new OrdersResponse
            (
                order.Id,
                order.SenderAddress,
                order.ReceiverAddress,
                order.Weight,
                order.DateOfPickup
            );
        }

        public static Order ToOrder(OrdersRequest request)
        {
            return new Order()
            {
                Id = request.Id,
                SenderAddress = request.SenderAddress,
                ReceiverAddress = request.ReceiverAddress,
                Weight = request.Weight,
                DateOfPickup = request.DateOfPickup,
            };
        }
    }
}