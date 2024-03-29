import { useEffect, useState } from "react";
import CartModel from "../../models/cart/cartModel";
import CartServices from "../../services/cart/cartServices";

export default function useCart() : 
    [CartModel, (products: CartModel) => void]
{
    const [products, setProducts] = useState<CartModel>(CartModel.EmptyCart());

    useEffect(() => {
        const cart = CartServices.getCartFromStorage();
        if(cart) {
            setProducts(cart);
        }
        
        return () => {
            setProducts(CartModel.EmptyCart());
        }
    }, []);

    return [products, setProducts]
}