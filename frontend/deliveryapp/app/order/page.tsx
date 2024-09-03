"use client";

import { useSearchParams } from 'next/navigation'
import { getAllOrders, getOrder } from '../services/orders';
import { isNumberObject } from 'util/types';
import { Form } from 'antd';
import Input from 'antd/es/input/Input';
import { OrderResponse } from '../requests/OrderResponse';
import { useEffect, useState } from 'react';
import { ReadOrder } from '../components/ReadOrder';
import Title from 'antd/es/typography/Title';
import { Address } from '../models/Address';

export default function OrdersPage() { 

    const [order, setOrderResponse] = useState<OrderResponse>(new OrderResponse(0, new Address("NA", "NA"), new Address("NA", "NA"), 0, new Date()));
    const [loading, setLoading] = useState(true);
    
    const searchParams = useSearchParams();
    const idStr = searchParams.get('id')
    const id = Number(idStr);
    console.log(idStr)

    useEffect(()=>{
        const searchOrder = async () => {
            const response = await getOrder(id); 
            setLoading(false);
            setOrderResponse(response);
        };

        searchOrder();
    });
 
    return (
        <div> 
         {loading ? <Title>Loading...</Title> : <ReadOrder order={order}></ReadOrder>}
        </div>
         
    );
}