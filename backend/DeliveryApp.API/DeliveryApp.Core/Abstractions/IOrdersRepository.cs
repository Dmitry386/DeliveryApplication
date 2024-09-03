using DeliveryApp.Core.Models;

namespace DeliveryApp.Core.Abstractions
{
    public interface IOrdersRepository
    {
        public Task<List<Order>> Get();
        public Task<int> Create(Order order);
        public Task<int> Update(Order order);
        public Task<int> Delete(int id);
        public Task<Order> Get(int id);
    }
}
