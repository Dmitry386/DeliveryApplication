import { Address } from "../models/Address";

export class OrderResponse {
    id: number;
    senderAddress: Address;
    receiverAddress: Address;
    weight: number;
    dateOfPickup: Date;

    constructor(
        id: number,
        senderAddress: Address,
        receiverAddress: Address,
        weight: number,
        dateOfPickup: Date
    ) {
        this.id = id;
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
        this.weight = weight;
        this.dateOfPickup = dateOfPickup;
    }
}