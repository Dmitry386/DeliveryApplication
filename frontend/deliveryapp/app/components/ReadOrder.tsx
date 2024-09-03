import { Button, DatePicker, Form, FormProps } from "antd"; 
import Input from "antd/es/input/Input";
import { OrderRequest } from "../requests/OrderRequest";
import { OrderResponse } from "../requests/OrderResponse";

interface Props {
    order:OrderResponse
} 
export const ReadOrder = ({
    order, }: Props) => {
 
        console.log(order);
    return (
        <Form
            disabled={true}
            name="orderDetails"
            style={{ paddingBlock: 32 }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={order}
        >
 
            <center><h1>{"Подробности заказа"}</h1></center>
            <br/> 

            <div>
            <Form.Item<OrderRequest>
                    label="Номер" 
                    name="id"
                >
                <Input />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Город отправителя" 
                    name={["senderAddress", "city"]}
                >
                <Input  />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Адрес отправителя" 
                    name={["senderAddress", "street"]}
                >
                <Input />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Город получателя" 
                    name={["receiverAddress", "city"]}
                >
                <Input/>
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Адрес получателя" 
                    name={["receiverAddress", "street"]}
                >
                <Input  />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Вес"
                    name="weight" 
                >
                <Input />
                </Form.Item>
                  
                <Form.Item<OrderRequest>
                    label="Дата забора груза"
                    name="dateOfPickup" 
                >
                <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}> 
                </Form.Item> 
            </div>

        </Form>
    );
}
