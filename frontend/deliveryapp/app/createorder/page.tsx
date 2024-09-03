"use client";
 
import { CreateOrder } from "../components/CreateOrder";
import { createOrder } from "../services/orders"; 
import { OrderRequest } from "../requests/OrderRequest"; 

export default function CreateOrderPage() {
    const handleCreateOrder = async (request: OrderRequest) => {
        await createOrder(request);
    } 
 
    return (
        <div> 
            <CreateOrder handleCreate={handleCreateOrder}/>
        </div>
    );
}