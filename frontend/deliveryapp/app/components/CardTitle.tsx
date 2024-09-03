import Link from "next/link";
import { Order } from "../models/Order";

interface Props {
    id: number;
    data: Order;
}

export const CardTitle =({id, data}: Props) => {
    return (
        <Link
            href={{
                pathname: "/order",
                query: `id=${data.id}`
            }}   
        >

            <p>Заказ № {id}</p>
            <p>{data.senderAddress?.city} → {data.receiverAddress?.city} | {data.dateOfPickup.toString()}</p>
        </Link>
    );
}