import { useContext } from "react";
import { CheckoutContext } from "../../hooks/checkout/createCheckoutContext";

export default function ProductDetail() {
    const [checkoutState, setCheckoutState] = useContext(CheckoutContext);

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">
                In Your Cart ({checkoutState?.products.length})
            </h1>
            <div className="flex flex-col gap-4">
                {checkoutState?.products.map((product, index) => (
                    <CartProduct 
                    key={index}
                    name={product.name}
                    variant={product.variant}
                    price={product.price}
                    image={product.image}
                    quantity={product.quantity} />
                ))}
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold">Total</h1>
                    <p className="font-bold text-orange-500">
                        {NumberToRupiah(checkoutState?.products.reduce((sum, product) => sum + (product.price * product.quantity), 0))}
                    </p>
                </div>
            </div>
        </div>
    )
}

function CartProduct({
    name,
    variant,
    price,
    quantity,
    image
}) {
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md">
                    <img src={image} alt="product" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-gray-400">{variant}</p>
                    <p className="text-gray-400">{NumberToRupiah(price)}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-gray-400">Qty: {quantity}</p>
                <p className="text-gray-400">Total: {NumberToRupiah(price * quantity)}</p>
            </div>
        </div>
    )
}

function NumberToRupiah(number: number | undefined) {
    if(!number) return "Rp0";
    return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}