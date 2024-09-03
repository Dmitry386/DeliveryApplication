import { Address } from "../models/Address";

export interface OrderRequest {
    id: number;
    senderAddress: Address;
    receiverAddress: Address;
    weight: number;
    dateOfPickup: Date;
}

export const getAllOrders = async () => {
    const response = await fetch("https://localhost:7051/Orders");
    return response.json();
}

export const createOrder = async (orderRequest: OrderRequest) => {
    await fetch("https://localhost:7051/Orders", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(orderRequest),
    });
};

export const getOrder = async (id:number) => {
    const response = await fetch(`https://localhost:7051/Orders/${id}`);
    return response.json();
}