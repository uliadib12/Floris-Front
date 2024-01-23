export default function Address() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Address</h1>
            <div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="address">Address</label>
                        <textarea name="address" id="address" className="border border-gray-400 rounded-md p-2"></textarea>
                    </div>
                    {/* add day time field */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="day">Day</label>
                        <input type="date" name="day" id="day" className="border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="time">Time</label>
                        <input type="time" name="time" id="time" className="border border-gray-400 rounded-md p-2" />
                    </div>
                </div>
            </div>
            {/* next button */}
            <div className="flex justify-end mt-4">
                <button className="bg-pink-500 text-white rounded-md px-4 py-2">Next</button>
            </div>
        </div>
    )
}