import { Order } from "../models/Order";

interface Props {
    id: number;
    data: Order;
}

export const CardTitle =({id, data}: Props) => {
    return (
        <div>
            <p>Заказ № {id}</p>
            <p>{data.senderAddress?.city} → {data.receiverAddress?.city} | {data.dateOfPickup.toString()}</p>
        </div>
    );
}