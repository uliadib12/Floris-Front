import { useEffect, useState } from "react";
import type ProductModel from "../../models/product/productModel";
import ProductCartModel from "../../models/cart/productCartModel";
import CartServices from "../../services/cart/cartServices";
import type { UserInputProduct } from "../../models/product/productModel";

export default function ProductDetails({product, setProduct} 
    : {product: ProductModel, setProduct: (product: ProductModel) => void}) {
    const [quantity, setQuantity] = useState(1);
    const [variantIndex, setVariantIndex] = useState(0);
    const [additionalInformation, setAdditionalInformation] = useState("");

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
            </h1>

            <div className="mt-4 text-4xl font-semibold text-orange-500">
                {product.variants[variantIndex].price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
            </div>

            <div className="mt-4 flex gap-2">
                <div>Size:</div>
                <div>{product.variants[variantIndex].size}</div>
            </div>
            
            <div>
                <div className="mt-4" >Variant:</div>
                <div className="flex space-x-2">
                    {product.variants.map((variant, index) => {
                        return (
                            <button key={index} className={(variantIndex === index ? "bg-pink-600 font-bold " : "") + "bg-pink-400 px-2 rounded-md text-white"}
                            onClick={() => setVariantIndex(index)}>{variant.variantName}</button>
                        )
                    })}
                </div>
            </div>

            <div>
                <div className="mt-4" >Quantity:</div>
                <div className="flex gap-2 items-center">
                    <input type="number" className="border border-gray-400 rounded-md px-2 py-1 w-20" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                    <div>/ {product.variants[variantIndex].stock}</div>
                </div>
            </div>

            <div>
                <div className="mt-4">Additional Information:</div>
                <textarea 
                value={additionalInformation}
                onChange={(e) => setAdditionalInformation(e.target.value)}
                style={{resize: 'none'}} 
                className="border border-gray-400 rounded-md px-2 py-1 w-[80%] h-16" />
            </div>
            
            <div className="mt-4">Description:</div>
            <div className="text-gray-600">
                {product.description}
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-end z-40">
                <button 
                onClick={() => {
                    addToCart(product, {
                        variantIndex,
                        quantity,
                        additionalInformation
                    })
                    showToast()
                }}
                className="flex gap-2 bg-pink-500 border-solid border-white border-2 px-4 py-2 rounded-md text-white">
                    Add to Cart
                    <img src="/icons/cart.svg" width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>
                </button>
            </div>
        </div>
    )
}

function addToCart(product: ProductModel, userInput: UserInputProduct){
    const newProduct = product.EditUserInput(userInput)
    CartServices.addProductToCart(ProductCartModel.FromProduct(newProduct))
}

function showToast(){
    // @ts-ignore
    toastr.options = {
        "debug": false,
        "positionClass": "toast-bottom-left",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000
    }
    // @ts-ignore
    toastr.success('Product added to cart', 'Success')
}