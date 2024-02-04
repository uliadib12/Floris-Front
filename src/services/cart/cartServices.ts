import CartModel from "../../models/cart/cartModel";
import type ProductCartModel from "../../models/cart/productCartModel";

export default class CartServices {
    static getCartFromStorage() : CartModel | null  {
        const cart = localStorage.getItem("cart");
        if (cart) {
            const parse =  JSON.parse(cart);
            return new CartModel(parse.products);
        }
        return null;
    }

    static saveCartToStorage(cart: CartModel) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static clearCartFromStorage() {
        localStorage.removeItem("cart");
    }

    static addProductToCart(product: ProductCartModel) {
        if (this.isProductInCart(product)) {
            throw new Error("Product already in cart");
            return;
        }
        const cart = this.getCartFromStorage();
        if (cart) {
            cart.products.push(product);
            this.saveCartToStorage(cart);
        } else {
            const newCart = CartModel.EmptyCart();
            newCart.products.push(product);
            this.saveCartToStorage(newCart);
        }
    }

    static updateProductInCart(product: ProductCartModel) {
        const cart = this.getCartFromStorage();
        if (cart) {
            const productInCart = cart.products.find(p => p.id === product.id && p.variantIndex === product.variantIndex);
            if (productInCart) {
                productInCart.additionalInformation = product.additionalInformation;
                productInCart.quantity = product.quantity;
                this.saveCartToStorage(cart);
            }
        }
    }

    static removeProductFromCart(id: string) {
        const cart = this.getCartFromStorage();
        if (cart) {
            const index = cart.products.findIndex(p => p.id === id);
            if (index !== -1) {
                cart.products.splice(index, 1);
                this.saveCartToStorage(cart);
            }
        }
    }

    static isProductInCart(product: ProductCartModel) : boolean {
        const cart = this.getCartFromStorage();
        if (cart) {
            const productInCart = cart.products.find(p => p.id === product.id && p.variantIndex === product.variantIndex);
            if (productInCart) {
                return true;
            }
        }
        return false;
    }
}