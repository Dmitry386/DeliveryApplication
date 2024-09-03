import { CardTitle } from "./CardTitle"
import Card from "antd/es/card/Card"
import { Order } from "../models/Order" 
import Link from "next/link";

interface Props {
    orders: Order[];
    href: string;
}

export const Orders = ({orders, href}: Props) => {
    return (
        <div> 
            {orders.map((order:Order) => (
                <Card 
                    key={order.id}    
                    title = {<CardTitle id={order.id}  data={order}></CardTitle>}
                    bordered={false}>
                
                    <div>     
                    <Link
                        href={{
                            pathname: "/order",
                            query: `id=${order.id}`
                        }}><i> Подробности </i></Link> 
                    </div> 
                </Card>
 
            ))};
        </div>
    )
}