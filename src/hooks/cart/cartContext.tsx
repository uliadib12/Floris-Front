import { createContext } from "react";
import type CartModel from "../../models/cart/cartModel";

const CartContext = createContext<{
    productsCart: CartModel;
    setProductsCart: (productsCart: CartModel) => void;
}>(null);

export default CartContext;