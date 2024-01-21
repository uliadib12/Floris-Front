import { useEffect, useState } from "react";
import CartModel from "../../models/cart/cartModel";

export default function useCart() : 
    [CartModel, (products: CartModel) => void]{
    const [products, setProducts] = useState<CartModel>(CartModel.EmptyCart());

    useEffect(() => {
        setProducts(new CartModel([
            {
                id: 1,
                image: 'https://picsum.photos/seed/1/500/500',
                name: 'Perindo',
                price: 1000000,
                quantity: 10,
                size: '2cm x 2cm',
                variantIndex: 0,
                variantName: 'Variant 1',
                additionalInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            },
            {
                id: 2,
                image: 'https://picsum.photos/seed/2/500/500',
                name: 'Perindo',
                price: 2000000,
                quantity: 1,
                size: '2cm x 2cm',
                variantIndex: 0,
                variantName: 'Variant 1',
                additionalInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            }
        ]));
        
        return () => {
            setProducts(CartModel.EmptyCart());
        }
    }, []);


    return [products, setProducts]
}