import type ProductCartModel from "../product/productCartModel";

export default class CartModel {
    products: ProductCartModel[];
    totalPrice: number;
    totalItems: number;

    constructor
    (
        products: ProductCartModel[], 
    ) 
    {
        this.products = products;
        this.totalPrice = this.getTotalPrice();
        this.totalItems = this.getTotalItems();
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
}