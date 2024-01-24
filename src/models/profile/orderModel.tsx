import type ProductCartModel from "../cart/productCartModel";

export default class OrderModel {
    id: number;
    status: string;
    products: ProductCartModel[];
    address: string;
    day: string;
    time: string;
    payment: string;
    total: number;
    createdAt: string;

    constructor(
        id: number,
        status: string,
        products: ProductCartModel[],
        address: string,
        day: string,
        time: string,
        payment: string,
        total: number,
        createdAt: string
    ) {
        this.id = id;
        this.status = status;
        this.products = products;
        this.address = address;
        this.day = day;
        this.time = time;
        this.payment = payment;
        this.total = total;
        this.createdAt = createdAt;
    }
}