export default function Review() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Review</h1>
            <AddressReview 
            name="John Doe" 
            phone="08123456789" 
            address="Jl. Raya Bogor No. 5" 
            day="2021-10-10" 
            time="09:00" />
            <PaymentReview payment="Transfer" />
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