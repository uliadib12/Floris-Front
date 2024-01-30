import { useContext, useState } from "react";
import CartContext from "../../hooks/cart/cartContext";
import CartModel from "../../models/cart/cartModel";
import CartServices from "../../services/cart/cartServices";
import type ProductCartModel from "../../models/cart/productCartModel";

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
        CartServices.updateProductInCart(product);
    }

    const decrement = () => {
        const newCount = count - 1;
        if(newCount < 1) {
            return;
        }
        updateCount(newCount);
        CartServices.updateProductInCart(product);
    }

    const remove = () => {
        CartServices.removeProductFromCart(product.id);
        const newProducts = productsCart.products;
        newProducts.splice(index, 1);
        setProductsCart(new CartModel(newProducts));
    }

    const [ showModal, setShowModal ] = useState(false);

    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div
                    style={{backgroundImage: `url('${product.image}')`}}
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
                                    <button className="text-blue-500 hover:text-blue-800" onClick={() => setShowModal(true)}>
                                        <i className="bi bi-pencil-fill"></i>
                                        Additional Information: {product.additionalInformation === '' ? '-' : product.additionalInformation}
                                    </button>
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
                {showModal && <ModalEditAddiInformation index={index} productsCart={productsCart} product={product} setProductsCart={setProductsCart} setShowModal={setShowModal} />}
            </div>
        </>
    )
}

function ModalEditAddiInformation(
    {   
        index,
        productsCart,
        product,
        setProductsCart,
        setShowModal
    } 
    : {
        index: number,
        productsCart: CartModel,
        product: ProductCartModel
        setProductsCart: (newCart: CartModel) => void,
        setShowModal: (showModal: boolean) => void
        }) 
{
    const [ additionalInformation, setAdditionalInformation ] = useState(product.additionalInformation);

    const updateAdditionalInformation = () => {
        const newProducts = productsCart.products;
        newProducts[index].additionalInformation = additionalInformation;
        setProductsCart(new CartModel(newProducts));
        CartServices.updateProductInCart(product);
        setShowModal(false);
    }

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div 
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Additional Information
                                </h3>
                                <div className="mt-2">
                                    <textarea 
                                    style={{resize: 'none'}} 
                                    className="border border-gray-400 rounded-md px-2 py-1 w-full h-16" 
                                    value={additionalInformation}
                                    onChange={(e) => setAdditionalInformation(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 flex justify-end sm:px-6 flex-col sm:flex sm:flex-row-reverse">
                        <button 
                        onClick={updateAdditionalInformation}
                        type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-400 text-base font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Update
                        </button>
                        <button
                        onClick={() => setShowModal(false)}
                        type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}