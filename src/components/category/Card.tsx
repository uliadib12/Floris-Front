export default function Card(
    props: {
        image: string,
    }
){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden">
                {props.image === '' ?
                    <div className="animate-pulse bg-slate-300 w-full h-64"></div>
                    :
                    <img className="w-full h-96 object-cover hover:scale-125 transition duration-500" src={props.image} alt="Sunset in the mountains" />
                }
            </div>
            <div className="px-6 py-4">
                {/* <div className="font-bold text-xl mb-2">{props.title}</div> */}
                <div className="animate-pulse bg-slate-300 w-1/3 h-4 rounded-md mb-2"></div>
                <p className="text-gray-700 text-base">
                    <div className="animate-pulse bg-slate-300 h-4 rounded-md mb-2"></div>
                    <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-md mb-2"></div>
                </p>
            </div>
            <div className="flex justify-center">
                <div className="px-6 pt-4 pb-2 mb-4">
                    <div className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded
                    pointer-events-none">
                        See More
                    </div>
                </div>
            </div>
        </div>
    );
};