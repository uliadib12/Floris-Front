import { useEffect, useState } from "react";
import OrderDetail from "./OrderDetail";
import ProductDetail from "./ProductDetail";
import CheckoutModel from "../../models/checkout/checkoutModel";
import AddressModel from "../../models/checkout/addressModel";
import CheckoutProductModel from "../../models/checkout/checkoutProductModel";
import { CheckoutContext } from "../../hooks/checkout/createCheckoutContext";
import PaymentModel from "../../models/checkout/paymentModel";

export default function CheckoutContainer() {
    const [checkoutState, setCheckoutState] : [CheckoutModel, (checkoutState: CheckoutModel) => void] 
    = useState(undefined);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const address = AddressModel.Empty();
        const products = CheckoutProductModel.GetProductsFromStorage();
        const payment = [
            // new PaymentModel("transfer", "Transfer", "Pay with Transfer Bank or E-Wallet", "💳"),
            new PaymentModel("cod", "Cash on Delivery", "Pay with cash upon delivery", "💵")
        ];
        setCheckoutState(new CheckoutModel(address, products, payment));
    }, []);

    const [modalShow, setModalShow] = useState(false);

    return (
        <CheckoutContext.Provider value={[checkoutState, setCheckoutState]}>
        <div className="p-4 lg:p-10 lg:grid lg:grid-cols-3 gap-3">
            <div className="lg:min-h-[85vh] lg:col-span-2 border-2 border-solid border-pink-400 border-opacity-50 rounded-sm">
                <OrderDetail/>
            </div>
            <div className="mt-2 lg:mt-0 h-fit border-2 border-solid border-pink-400 border-opacity-50 rounded-sm">
                <ProductDetail/>
            </div>
            <div className="fixed bottom-0 right-6 m-4">
                <button 
                onClick={async () => {
                    try{
                        setIsLoading(true);
                        await checkoutState.sendOrder();
                        setModalShow(true);
                        setIsLoading(false);
                    }
                    catch(e){
                        alert("Failed to send order");
                    }
                }}
                className={(checkoutState?.allowOrderMenu >= 2 && !isLoading
                    ? "bg-pink-500" : "bg-gray-300 pointer-events-none") + " hover:bg-pink-600 border-2 border-solid border-white text-white font-bold py-2 px-4 rounded-lg"}>
                    Order Now
                </button>
            </div>
            <div className={(modalShow ? "fixed" : "hidden") + " top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"}>
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-2xl font-bold">Order Success</h1>
                    <p className="text-gray-400">Your order has been placed. We will contact you soon.</p>
                    <div className="flex justify-end mt-4">
                        <button onClick={() => window.location.replace("/")}
                        className="bg-pink-500 text-white rounded-md px-4 py-2">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </CheckoutContext.Provider>
    );
}