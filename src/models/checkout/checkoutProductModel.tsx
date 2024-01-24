import CartServices from "../../services/cart/cartServices";

export default class CheckoutProductModel {
    name: string;
    variant: string;
    price: number;
    quantity: number;
    image: string;

    constructor(name: string, variant: string, price: number, quantity: number, image: string) {
        this.name = name;
        this.variant = variant;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }

    static Empty(): CheckoutProductModel {
        return new CheckoutProductModel("", "", 0, 0, "");
    }

    static GetProductsFromStorage(): CheckoutProductModel[] {
        const cart = CartServices.getCartFromStorage();
        const products = cart.products;

        if(products.length === 0) {
            return [];
        }

        const checkoutProducts = products.map(product => {
            return new CheckoutProductModel(
                product.name, 
                product.variantName, 
                product.price, 
                product.quantity, 
                product.image);
        });

        return checkoutProducts;
    }
}