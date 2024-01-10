export default function Card(
    props: {
        path: string,
        title: string,
        description: string,
        image: string,
    }
){
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="overflow-hidden">
                {props.image === '' ?
                    <div className="bg-gray-300 w-full h-64"></div>
                    :
                    <img className="w-full h-96 object-cover hover:scale-125 transition duration-500" src={props.image} alt="Sunset in the mountains" />
                }
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
            <div className="flex justify-center">
                <div className="px-6 pt-4 pb-2 mb-4">
                    <a href={`/category?name=${props.path}`} className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                        See More
                    </a>
                </div>
            </div>
        </div>
    );
};