import { useEffect, useState } from "react";
import Order from "./userInformation/Order";
import OrderModel from "../../models/profile/orderModel";

export default function UserInformation() {
    const [menuIndex, setMenuIndex] = useState(0);
    const [orderModel, setOrderModel] : [OrderModel[], (orderModel: OrderModel[]) => void]
     = useState(undefined);

    useEffect(() => {
        setOrderModel([
            new OrderModel(
                1,
                "Pending", 
                [], 
                "Jl. Jalan No. 1", 
                "2021-08-01", 
                "12:00", 
                "Transfer", 
                100000, 
                "2021-08-01 12:00"),
            new OrderModel(
                2,
                "Pending", 
                [], 
                "Jl. Jalan No. 1", 
                "2021-08-01", 
                "12:00", 
                "Transfer", 
                100000, 
                "2021-08-01 12:00")
            ]);
    }, []);

    return (
        <div className="h-full w-full relative -top-5">
            <div className="w-full flex justify-center items-center">
                <button 
                onClick={() => setMenuIndex(0)}
                className={(menuIndex === 0 ? "bg-pink-500 text-white font-medium" : "bg-gray-300") +" min-w-20 border border-white text-center p-2 cursor-pointer"}>
                    Order
                </button>
                <button 
                onClick={() => setMenuIndex(1)}
                className={(menuIndex === 1? "bg-pink-500 text-white font-medium" : "bg-gray-300") +" min-w-20 border border-white text-center p-2 cursor-pointer"}>
                    Edit User
                </button>
            </div>
            {(menuIndex === 0 && orderModel !== undefined) ?
            <div className="w-full flex flex-col gap-4 p-4 items-center">
                {
                    orderModel.map((order, index) => (
                        <Order key={index} orderModel={order}/>
                    ))
                }
            </div>
            : 
            <div className="w-full flex flex-col gap-4 p-4">
                <div>
                    Loading...
                </div>
            </div>
            }
        </div>
    );
}