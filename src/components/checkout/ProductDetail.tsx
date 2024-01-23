export default function ProductDetail() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">
                In Your Cart (3)
            </h1>
            <CartProducts />
        </div>
    )
}

function CartProducts() {
    return (
        <div className="flex flex-col gap-4">
            <CartProduct 
            name="Lemon Squash" 
            variant="L"
            price="Rp 15.000" 
            quantity="1" />
            <CartProduct 
            name="Lemon Squash" 
            variant="L"
            price="Rp 15.000" 
            quantity="1" />
            <CartProduct 
            name="Lemon Squash" 
            variant="L"
            price="Rp 15.000" 
            quantity="1" />
        </div>
    )
}

function CartProduct({
    name,
    variant,
    price,
    quantity
}) {
    return (
        <div className="flex flex-row justify-between items-center w-full">
            <div className="flex gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                <div className="flex flex-col">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-gray-400">{variant}</p>
                    <p className="text-gray-400">{price}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-gray-400">Qty: {quantity}</p>
                <p className="text-gray-400">Total: Rp 15.000</p>
            </div>
        </div>
    )
}