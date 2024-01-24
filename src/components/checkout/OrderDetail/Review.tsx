import { useContext } from "react";
import { CheckoutContext } from "../../../hooks/checkout/createCheckoutContext";

export default function Review() {
    const [checkoutState, setCheckoutState] = useContext(CheckoutContext);

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Review</h1>
            <AddressReview 
            name={checkoutState?.address?.name} 
            phone={checkoutState?.address?.phone} 
            address={checkoutState?.address?.address}
            day={checkoutState?.address?.day}
            time={checkoutState?.address?.time} />
            <PaymentReview payment={checkoutState?.payment?.at(checkoutState?.paymentSelected).method} />
        </div>
    )
}

function AddressReview({
    name,
    phone,
    address,
    day,
    time
}) {
    return (
        <div className="flex flex-col gap-4">
            <h2>Address</h2>
            <p className="text-gray-400">{name}</p>
            <p className="text-gray-400">{phone}</p>
            <p className="text-gray-400">{address}</p>
            <p className="text-gray-400">{day}, {time}</p>
        </div>
    )
}

function PaymentReview({ payment }) {
    return (
        <div className="flex flex-col gap-4">
            <h2>Payment</h2>
            <p className="text-gray-400">{payment}</p>
        </div>
    )
}