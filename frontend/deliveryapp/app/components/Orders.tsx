import { CardTitle } from "./CardTitle"
import Card from "antd/es/card/Card"
import { Order } from "../models/Order"  

interface Props {
    orders: Order[];
}

export const Orders = ({orders}: Props) => {
    return (       
        <div> 
            {orders.map((order:Order) => (
                <Card style={{margin: "10px" }}
                    key={order.id}    
                    title = {<CardTitle id={order.id}  data={order}></CardTitle>}
                    bordered={false} 
                > 
                </Card> 
            ))};
        </div>
    )
}