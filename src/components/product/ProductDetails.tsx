import { useEffect, useState } from "react";
import type { ProductVariantModel } from "../../models/product/productModel";

interface ProductDetailsProps {
    id: number | undefined;
    name: string;
    description: string;
    variants: ProductVariantModel[];
}

export default function ProductDetails(
    { 
        id = undefined,
        name = '', 
        description = '', 
        variants = []
    }: ProductDetailsProps
) {
    const [quantity, setQuantity] = useState(1);
    const [variantOption, setVariantOption] = useState(0);

    return (
        <div>
            {name === '' ?
            <div className="animate-pulse bg-slate-300 w-56 h-6 rounded-lg mb-2"></div>
            :
            <h1 className="text-3xl font-bold text-gray-900">
                {name}
            </h1>}

            {
            description === '' ?
            <div className="mt-4 animate-pulse bg-slate-300 w-48 h-6 rounded-lg mb-2"></div>
            :
            <div className="mt-4 text-4xl font-semibold text-orange-500">
                {variants[variantOption].price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
            </div>}

            {description === '' ?
            <div className="mt-4 animate-pulse bg-slate-300 w-40 h-4 rounded-lg mb-2"></div>
            :
            <div className="mt-4 flex gap-2">
                <div>Size:</div>
                <div>{variants[variantOption].size}</div>
            </div>}
            
            {variants.length === 0 ?
            <div className="mt-4 animate-pulse bg-slate-300 w-40 h-4 rounded-lg mb-2"></div>
            :
            <div>
                <div className="mt-4" >Variant:</div>
                <div className="flex space-x-2">
                    {variants.map((variant, index) => {
                        return (
                            <button key={index} className={(variantOption === index ? "bg-pink-600 font-bold " : "") + "bg-pink-400 px-2 rounded-md text-white"}
                            onClick={() => setVariantOption(index)}>{variant.variantName}</button>
                        )
                    })}
                </div>
            </div>}

            {variants.length === 0 ?
            <div className="mt-4 animate-pulse bg-slate-300 w-40 h-4 rounded-lg mb-2"></div>
            :
            <div>
                <div className="mt-4" >Quantity:</div>
                <div className="flex gap-2 items-center">
                    <input type="number" className="border border-gray-400 rounded-md px-2 py-1 w-20" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                    <div>/ {variants[variantOption].stock}</div>
                </div>
            </div>}

            {id === undefined ?
            <div className="mt-4 animate-pulse bg-slate-300 w-72 h-20 rounded-lg mb-2"></div>
            :
            <div>
                <div className="mt-4">Additional Information:</div>
                <textarea 
                style={{resize: 'none'}} 
                className="border border-gray-400 rounded-md px-2 py-1 w-[80%] h-16" />
            </div>}
            
            {description === '' ?
            <div className="mt-6 animate-pulse bg-slate-300 w-28 h-4 rounded-lg mb-2"></div>
            :
            <div className="mt-4">Description:</div>}

            {description === '' ?
            <div className="mt-4 animate-pulse bg-slate-300 w-full h-40 rounded-lg mb-2"></div>
            :
            <div className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptate
            </div>}

            {id &&
            <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-end z-50">
                <button 
                onClick={() => {
                    showToast()
                }}
                className="flex gap-2 bg-pink-400 border-solid border-white border-2 px-4 py-2 rounded-md text-white">
                    Add to Cart
                    <img src="/icons/cart.svg" width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>
                </button>
            </div>}
        </div>
    )
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