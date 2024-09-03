"use client";

import { useEffect, useState } from "react";
import { Orders } from "../components/Orders";
import { getAllOrders } from "../services/orders";
import Title from "antd/es/typography/Title";
import { Order } from "../models/Order";

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrders = async () => {
            const orders = await getAllOrders();
            setLoading(false);
            setOrders(orders);
        };

        getOrders();
    }, []);
    
    return (
        <div> 
            <br/>
            <center><h1>Список заказов</h1></center>
            <br/>
             {loading ? <Title>Loading...</Title> : <Orders orders={orders}></Orders>}
        </div>
    );
}