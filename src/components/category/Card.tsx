export default function Card(
    props: {
        id: number,
        image: string,
        title: string,
        minPrice: number,
        maxPrice: number,
    }
){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden h-72">
                {props.image === '' ?
                    <div className="animate-pulse bg-slate-300 w-full h-full"></div>
                    :
                    <img className="w-full h-full object-cover hover:scale-125 transition duration-500" src={props.image} alt="Sunset in the mountains" />
                }
            </div>
            <div className="px-6 py-4">
                {
                    props.title === '' ?
                    <div className="animate-pulse bg-slate-300 w-1/3 h-4 rounded-md mb-2"></div>
                    :
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                }
                <p className="text-gray-700 text-base">
                    {
                        props.minPrice === 0  && props.maxPrice === 0 ?
                        <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-md mb-2"></div>
                        :
                        props.minPrice === props.maxPrice ?
                        <div className="text-orange-400 font-semibold text-base">
                            {props.minPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                        </div>
                        :
                        <div className="text-orange-400 font-semibold text-base">
                            {props.minPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} - {props.maxPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                        </div>
                    }
                </p>
            </div>
            <div className="flex justify-center">
                <div className="px-6 pb-2 mb-4">
                    <a 
                    href={`/product?id=${props.id}`} 
                    className={"bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded " + (props.id === -1 ? "pointer-events-none" : "") }>
                        Product Detail
                    </a>
                </div>
            </div>
        </div>
    );
};