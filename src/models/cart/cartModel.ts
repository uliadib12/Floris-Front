import type ProductCartModel from "./productCartModel";

export default class CartModel {
    products: ProductCartModel[] = [];

    constructor (products: ProductCartModel[]) 
    {
        this.products = products;
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.products.forEach(product => {
            totalPrice += product.price * product.quantity;
        });
        return totalPrice;
    }

    getTotalItems() {
        let totalItems = 0;
        this.products.forEach(product => {
            totalItems += product.quantity;
        });
        return totalItems;
    }

    static EmptyCart() {
        return new CartModel([]);
    }
}