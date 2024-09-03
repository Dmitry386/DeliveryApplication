using DeliveryApp.API.Contracts;
using DeliveryApp.API.Helpers;
using DeliveryApp.API.Validation;
using DeliveryApp.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : ControllerBase
    {
        private IOrdersService _ordersService;

        public OrdersController(IOrdersService orderService)
        {
            _ordersService = orderService;
        }

        [HttpGet]
        public async Task<ActionResult<List<OrdersResponse>>> Get()
        {
            var orders = await _ordersService.Get();
            var response = orders.Select(x => OrderMappingHelper.ToResponse(x));

            return Ok(response);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<List<OrdersResponse>>> Get(int id)
        {
            var order = await _ordersService.Get(id);
            var response = OrderMappingHelper.ToResponse(order);

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] OrdersRequest request)
        {
            var order = OrderMappingHelper.ToOrder(request);

            if (!order.IsValid())
            {
                return BadRequest(OrderValidation.INVALID_MSG);
            }

            var requestId = await _ordersService.Create(order);
            return Ok(requestId);
        }

        // [HttpPut("{id:int}")]
        [HttpPut]
        public async Task<ActionResult<int>> Update([FromBody] OrdersRequest request)
        {
            var order = OrderMappingHelper.ToOrder(request);

            if (!order.IsValid())
            {
                return BadRequest(OrderValidation.INVALID_MSG);
            }

            var requestId = await _ordersService.Update(order);
            return Ok(requestId);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var requestId = await _ordersService.Delete(id);
            return Ok(requestId);
        }
    }
}
