using DeliveryApp.Application.Services;
using DeliveryApp.Core.Abstractions;
using DeliveryApp.DataAccess.Contexts;
using DeliveryApp.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DeliveryApp.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<OrderDbContext>(
                options =>
            {
                options.UseNpgsql(builder.Configuration.GetConnectionString(nameof(OrderDbContext)));
            });

            builder.Services.AddScoped<IOrdersService, OrdersService>();
            builder.Services.AddScoped<IOrdersRepository, OrdersRepository>();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.UseCors(options =>
            {
                options.WithHeaders().AllowAnyHeader();
                options.WithOrigins("http://localhost:3000");
                options.WithMethods().AllowAnyMethod();
            });

            app.Run();
        }
    }
}
