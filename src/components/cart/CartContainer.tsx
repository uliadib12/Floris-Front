import useCart from "../../hooks/cart/useCart";
import Card from "./Card";
import CartContext from "../../hooks/cart/cartContext";

export default function CartContainer() {
    const [productsCart, setProductsCart] = useCart();

    return (
        <CartContext.Provider value={{productsCart, setProductsCart}}>
            <div className="min-h-screen">
                <div className="flex flex-row items-center justify-center gap-2 mb-3">
                    <i className="bi bi-cart text-pink-500 text-3xl"></i>
                    <h1 
                        id="title"
                        style={{fontFamily: 'Cormorant Garamond sans-serif'}}
                        className="text-3xl font-semibold italic text-pink-500">
                        Cart
                    </h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 mb-3 text-xl text-orange-500 font-bold">
                    Total Price: {productsCart.getTotalPrice().toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                </div>
                <div className="flex flex-row items-center justify-center gap-2 mb-3 text-xl text-orange-500 font-bold">
                    Total Items: {productsCart.getTotalItems()}
                </div>
                <div className="flex flex-col gap-4 p-4 items-center">
                    {
                        productsCart.products.map((product, index) => (
                            <Card key={index} index={index}/>
                        ))
                    }
                </div>
                <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-end z-50">
                    <button className="flex gap-2 bg-pink-400 border-solid border-white border-2 px-4 py-2 rounded-md text-white">
                        Go To Checkout
                        <img src="/icons/bag-check.svg" width={20} height={20} alt="home" style={{filter: 'invert(1)'}}/>
                    </button>
                </div>
            </div>
        </CartContext.Provider>
    )
}