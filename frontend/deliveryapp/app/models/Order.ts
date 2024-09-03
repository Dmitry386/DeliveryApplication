import { Address } from "./Address";

export interface Order {
    id: number;
    senderAddress: Address;
    receiverAddress: Address;
    weight: number;
    dateOfPickup: Date;
}