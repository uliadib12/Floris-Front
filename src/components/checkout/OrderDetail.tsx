import { useState } from "react";
import Address from "./OrderDetail/Address";
import Payment from "./OrderDetail/Payment";
import Review from "./OrderDetail/Review";

export default function OrderDetail() {
    const [orderMenu, setOrderMenu] = useState(0);
    return (
        <div className="p-4">
            <ul id="menu-order" className="flex gap-4 justify-center">
                <button 
                onClick={() => setOrderMenu(0)}
                className={(orderMenu === 0 ? "bg-pink-500 text-white font-bold" : "bg-gray-100") + "  rounded-md p-2"}>
                    Address
                </button>
                <button 
                onClick={() => setOrderMenu(1)}
                className={(orderMenu === 1 ? "bg-pink-500 text-white font-bold" : "bg-gray-100") + " rounded-md p-2"}>
                    Payment
                </button>
                <button 
                onClick={() => setOrderMenu(2)}
                className={(orderMenu === 2 ? "bg-pink-500 text-white font-bold" : "bg-gray-100") + " rounded-md p-2"}>
                    Review
                </button>
            </ul>
            <div>
                {orderMenu === 0 && <Address />}
                {orderMenu === 1 && <Payment />}
                {orderMenu === 2 && <Review />}
            </div>
        </div>
    )
}