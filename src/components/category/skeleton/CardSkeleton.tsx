export default function CardSkeleton() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden h-72">
                <div className="animate-pulse bg-slate-300 w-full h-full"></div>
            </div>
            <div className="px-6 py-4">
                <div className="animate-pulse bg-slate-300 w-1/3 h-4 rounded-md mb-2"></div>

                <p className="text-gray-700 text-base">
                    <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-md mb-2"></div>
                </p>
            </div>
            <div className="flex justify-center">
                <div className="px-6 pb-2 mb-4">
                    <a 
                    href={`/category`} 
                    className={"bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded pointer-events-none"}>
                        Product Detail
                    </a>
                </div>
            </div>
        </div>
    )
}