import { useContext, useState } from "react";
import CartContext from "../../hooks/cart/cartContext";
import CartModel from "../../models/cart/cartModel";

export default function Card({index} : {index: number}) {
    const { productsCart, setProductsCart } = useContext(CartContext);
    const product = productsCart.products[index];

    const [ count, setCount ] : [number, (newCount: number) => void] = useState(product.quantity);

    const updateCount = (newCount: number) => {
        setCount(newCount);
        const newProducts = productsCart.products;
        newProducts[index].quantity = newCount;
        setProductsCart(new CartModel(newProducts));
    }

    const increment = () => {
        const newCount = count + 1;
        updateCount(newCount);
    }

    const decrement = () => {
        const newCount = count - 1;
        if(newCount < 1) {
            return;
        }
        updateCount(newCount);
    }

    const remove = () => {
        const newProducts = productsCart.products;
        newProducts.splice(index, 1);
        setProductsCart(new CartModel(newProducts));
    }

    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div
                    style={{backgroundImage: "url('/images/bouquet.webp')"}}
                    className="h-64 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                </div>
                <div className="w-full border-r border-b border-l border-pink-400 lg:border-l-0 lg:border-t lg:border-pink-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="flex justify-end relative">
                            <button 
                            onClick={remove}
                            className="text-red-500 hover:text-red-800 text-xl absolute">
                                <div>X</div>
                            </button>
                        </div>
                        <div className="text-gray-900 font-bold text-xl mb-2">
                            {product.name}
                        </div>
                        <div className="text-gray-700 text-base">
                            <ul>
                                <li>
                                    Variant: {product.variantName}
                                </li>
                                <li className="flex gap-2 items-center">
                                    Price:
                                    <div className="text-orange-500 font-semibold">
                                        {product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                                    </div>
                                </li>
                                <li>
                                    Size: {product.size}
                                </li>
                                <li>
                                    Additional Information: {product.additionalInformation === '' ? '-' : product.additionalInformation}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center text-white gap-4">
                        <div className="flex font-semibold w-10 h-10 rounded-full bg-pink-500 justify-center items-center">
                            {count}
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={increment}
                                className="bg-pink-400 hover:bg-pink-600 text-2xl px-5 rounded-md">
                                +
                            </button>
                            <button 
                                onClick={decrement}
                                className="bg-pink-400 hover:bg-pink-600 text-2xl px-5 rounded-md">
                                -
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-orange-500 font-semibold">
                        Total: {(product.price * count).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                    </div>
                </div>
            </div>
        </>
    )
}