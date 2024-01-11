export default function Card() {
    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div 
                style={{backgroundImage: "url('/images/bouquet.webp')"}}
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-pink-400 lg:border-l-0 lg:border-t lg:border-pink-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                    Bouquet
                </div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="/images/bouquet.webp" alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}