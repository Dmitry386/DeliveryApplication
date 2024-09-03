using DeliveryApp.Core.Models;
using DeliveryApp.DataAccess.Configurations;
using Microsoft.EntityFrameworkCore;

namespace DeliveryApp.DataAccess.Contexts
{
    public class OrderDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public OrderDbContext(DbContextOptions<OrderDbContext> options)
            : base(options)
        {

        } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
        }
    }
}