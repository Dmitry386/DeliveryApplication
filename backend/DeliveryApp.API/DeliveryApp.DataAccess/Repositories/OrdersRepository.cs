using DeliveryApp.Core.Abstractions;
using DeliveryApp.Core.Models;
using DeliveryApp.DataAccess.Contexts;
using Microsoft.EntityFrameworkCore;

namespace DeliveryApp.DataAccess.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        private readonly OrderDbContext _context;

        public OrdersRepository(OrderDbContext context)
        {
            _context = context;
        }

        public async Task<List<Order>> Get()
        {
            return await _context.Orders
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<int> Create(Order entity)
        {
            await _context.Orders.AddAsync(entity);
            await _context.SaveChangesAsync();

            return entity.Id;
        }

        public async Task<int> Update(Order entity)
        {
            _context.Orders.Update(entity);
            await _context.SaveChangesAsync();
             
            return entity.Id;
        }

        public async Task<int> Delete(int id)
        {
            await _context.Orders
                .Where(x => x.Id == id)
                .ExecuteDeleteAsync();

            return id;
        }

        public async Task<Order> Get(int id)
        {
            return await _context.Orders
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}