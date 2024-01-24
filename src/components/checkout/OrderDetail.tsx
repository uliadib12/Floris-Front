import { useContext } from "react";
import Address from "./OrderDetail/Address";
import Payment from "./OrderDetail/Payment";
import Review from "./OrderDetail/Review";
import { CheckoutContext } from "../../hooks/checkout/createCheckoutContext";

export default function OrderDetail() {
    const [checkoutState, setCheckoutState] = useContext(CheckoutContext);
    
    const chageOrderMenu = (menu: number) => {
        if (checkoutState?.allowOrderMenu < menu) return;
        setCheckoutState({...checkoutState, orderMenu: menu});
    }
    
    return (
        <div className="p-4">
            <ul id="menu-order" className="flex gap-4 justify-center">
                <button 
                onClick={() => chageOrderMenu(0)}
                className={(checkoutState?.orderMenu === 0 ? "bg-pink-500 text-white font-bold" : "bg-gray-100") + "  rounded-md p-2"}>
                    Address
                </button>
                <button 
                onClick={() => chageOrderMenu(1)}
                className={(checkoutState?.orderMenu === 1 ? "bg-pink-500 text-white font-bold" : "bg-gray-100") + " rounded-md p-2"}>
                    Payment
                </button>
                <button 
                onClick={() => chageOrderMenu(2)}
                className={(checkoutState?.orderMenu === 2 ? "bg-pink-500 text-white font-bold" : "bg-gray-100") + " rounded-md p-2"}>
                    Review
                </button>
            </ul>
            <div>
                {checkoutState?.orderMenu === 0 && <Address />}
                {checkoutState?.orderMenu === 1 && <Payment />}
                {checkoutState?.orderMenu === 2 && <Review />}
            </div>
        </div>
    )
}