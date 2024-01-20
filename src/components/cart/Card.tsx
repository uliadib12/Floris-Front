import { useState } from "react";

export default function Card() {
    const [count, setCount] : [number, any] = useState(1);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const decrement = () => {
        const newCount = count - 1;
        if(newCount < 1) {
            return;
        }
        setCount(newCount);
    }

    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div 
                    style={{backgroundImage: "url('/images/bouquet.webp')"}}
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                </div>
                <div className="w-full border-r border-b border-l border-pink-400 lg:border-l-0 lg:border-t lg:border-pink-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        Bouquet
                    </div>
                    <div className="text-gray-700 text-base">
                        <ul>
                            <li>
                                Tipe: Hand Bouquet
                            </li>
                            <li>
                                Harga: Rp 250.000
                            </li>
                            <li>
                                Ukuran: 20cm x 20cm
                            </li>
                            <li>
                                Bahan: Mawar
                            </li>
                            <li>
                                Keterangan tambahan: -
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="flex items-center text-white gap-4">
                        <div className="flex font-semibold w-10 h-10 rounded-full bg-pink-500 justify-center items-center">
                            {count}
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={increment}
                                className="bg-pink-400 hover:bg-pink-600 text-2xl px-5 rounded-md">
                                +
                            </button>
                            <button 
                                onClick={decrement}
                                className="bg-pink-400 hover:bg-pink-600 text-2xl px-5 rounded-md">
                                -
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-orange-500">
                        Rp. 250.000
                    </div>
                </div>
            </div>
        </>
    )
}