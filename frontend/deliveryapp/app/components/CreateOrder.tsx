import { Button, DatePicker, Form, FormProps } from "antd"; 
import Input from "antd/es/input/Input";
import { OrderRequest } from "../requests/OrderRequest";  
import dayjs from "dayjs"; 

interface Props {
    handleCreate: (request: OrderRequest) => void;
} 
export const CreateOrder = ({
    handleCreate, }: Props) => {

        const onFinish: FormProps<OrderRequest>['onFinish'] = (values:OrderRequest) => {
            console.log('Success:', values);
            alert('Данные отправлены');
            handleCreate(values)
          };
    
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            title={ "Создать заказ"}
            style={{ paddingBlock: 32 }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
        >
 
            <center><h1>{"Создание заказа"}</h1></center>
            <br/> 

            <div>
                <Form.Item<OrderRequest>
                    label="Город отправителя"
                    name={["senderAddress", "city"]}
                    rules={[{ required: true, message: 'Необходимо заполнить поле!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Адрес отправителя"
                    name={["senderAddress", "street"]}
                    rules={[{ required: true, message: 'Необходимо заполнить поле!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Город получателя"
                    name={["receiverAddress", "city"]}
                    rules={[{ required: true, message: 'Необходимо заполнить поле!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Адрес получателя"
                    name= {["receiverAddress", "street"]}
                    rules={[{ required: true, message: 'Необходимо заполнить поле!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item<OrderRequest>
                    label="Вес"
                    name="weight"
                    rules={[{ required: true, message: 'Необходимо заполнить поле!' }]}
                >
                <Input />
                </Form.Item>
                  
                <Form.Item<OrderRequest>
                    label="Дата забора груза"
                    name="dateOfPickup"
                    rules={[{ required: true }]}
                    getValueProps={(value) => ({ value: value && dayjs(Number(value)) })} 
                >
                <DatePicker />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6 }}>                    
                <Button type="primary" htmlType="submit">
                    Подтвердить
                </Button>
                </Form.Item> 
            </div>

        </Form>
    );
}
