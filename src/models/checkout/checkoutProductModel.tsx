import CartServices from "../../services/cart/cartServices";

export default class CheckoutProductModel {
    id: string = "";
    name: string;
    variant: string;
    price: number;
    quantity: number;
    image: string;
    additionalInfo: string = "";

    constructor(id: string, name: string, variant: string, price: number, quantity: number, image: string, additionalInfo: string) {
        this.id = id;
        this.name = name;
        this.variant = variant;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.additionalInfo = additionalInfo;
    }

    static Empty(): CheckoutProductModel {
        return new CheckoutProductModel("","", "", 0, 0, "", "");
    }

    static GetProductsFromStorage(): CheckoutProductModel[] {
        const cart = CartServices.getCartFromStorage();
        const products = cart.products;

        if(products.length === 0) {
            return [];
        }

        const checkoutProducts = products.map(product => {
            return new CheckoutProductModel(
                product.id,
                product.name, 
                product.variantName, 
                product.price, 
                product.quantity, 
                product.image,
                product.additionalInformation
            );
        });

        return checkoutProducts;
    }
}