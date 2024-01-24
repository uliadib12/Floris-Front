import type OrderModel from "../../../models/profile/orderModel";

export default function Order({orderModel} : {orderModel: OrderModel}) {
    return (
        <div className="w-full max-w-full flex px-4 mt-2">
            <div className="w-full border border-pink-400 lg:border-pink-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        Order #{orderModel.id}
                    </div>
                    <div className="text-gray-700 text-base">
                        <ul>
                            <li>
                                <b>Status:</b> {orderModel.status}
                            </li>
                            <li>
                                <b>Product:</b>
                            </li>
                            {
                                orderModel?.products.map((product, index) => (
                                    <li key={index}>
                                        - {product.name} ({product.size}) x {product.quantity} Addtional Information: {product.additionalInformation}
                                    </li>
                                ))
                            }
                            <li>
                                <b>Address:</b> {orderModel.address}
                            </li>
                            <li>
                                <b>Day Time:</b> {orderModel.day} {orderModel.time}
                            </li>
                            <li>
                                <b>Payment:</b> {orderModel.payment}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-2 text-orange-500 font-semibold">
                    Total: {orderModel.total.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                </div>
                <div className="mt-2 text-gray-500 font-semibold">
                    Create At: {orderModel.createdAt}
                </div>
            </div>
        </div>
    )
}