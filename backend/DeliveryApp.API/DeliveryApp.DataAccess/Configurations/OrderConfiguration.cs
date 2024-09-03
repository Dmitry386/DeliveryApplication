using DeliveryApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DeliveryApp.DataAccess.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.HasKey(e => e.Id);

            //builder.Property(e => e.SenderAddress.City)
            //    .HasField("SenderCity");
            //builder.Property(e => e.SenderAddress.Street)
            //    .HasField("SenderStreet");

            //builder.Property(e => e.ReceiverAddress.City)
            //   .HasField("ReceiverCity");
            //builder.Property(e => e.ReceiverAddress.Street)
            //    .HasField("ReceiverStreet");
        }
    }
}