using DeliveryApp.Core.Models;

namespace DeliveryApp.API.Validation
{
    public static class OrderValidation
    {
        public static string INVALID_MSG = "Order is invalid";

        public static bool IsValid(this Order order)
        {
            return
                !string.IsNullOrEmpty(order.ReceiverAddress.City)
                && !string.IsNullOrEmpty(order.ReceiverAddress.Street)
                && !string.IsNullOrEmpty(order.SenderAddress.City)
                && !string.IsNullOrEmpty(order.SenderAddress.Street)
                && order.Weight >= 0;
        }
    }
}