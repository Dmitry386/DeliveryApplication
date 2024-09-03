using DeliveryApp.Core.Abstractions;
using DeliveryApp.Core.Models;

namespace DeliveryApp.Application.Services
{
    public class OrdersService : IOrdersService
    {
        private IOrdersRepository _ordersRepository;

        public OrdersService(IOrdersRepository ordersRepository)
        {
            _ordersRepository = ordersRepository;
        }

        public async Task<int> Create(Order order)
        {
            return await _ordersRepository.Create(order);
        }

        public async Task<int> Delete(int id)
        {
            return await _ordersRepository.Delete(id);
        }

        public async Task<List<Order>> Get()
        {
            return await _ordersRepository.Get();
        }

        public async Task<Order> Get(int id)
        {
            return await _ordersRepository.Get(id);
        }

        public async Task<int> Update(Order order)
        {
            return await _ordersRepository.Update(order);
        }
    }
}