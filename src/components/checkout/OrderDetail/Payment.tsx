export default function Payment() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Payment</h1>
                    <Card
                        title="Transfer"
                        description="Pay with Gopay, OVO, DANA, LinkAja, ShopeePay, Bank Transfer"
                        icon="💳"
                    />
                    <Card
                        title="Cash on Delivery"
                        description="Pay when your order is delivered"
                        icon="💵"
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-pink-500 text-white rounded-md px-4 py-2">Next</button>
                </div>
            </div>
        </div>
    )
}

function Card({title, description, icon}) {
    return (
        <div className="flex gap-4 p-4 border-2 border-gray-200 rounded-md">
            <div className="flex flex-row justify-between items-center w-full">
                <div>
                    <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                            {icon}
                        </div>
                        <h1 className="font-bold">{title}</h1>
                    </div>
                    <p>{description}</p>
                </div>
                <div>
                    {/* make circle checklist */}
                    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}