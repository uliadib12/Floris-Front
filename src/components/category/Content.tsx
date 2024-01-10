export default function Content() {
    return (
        <>
            <div className="bg-slate-50 h-[90vh] overflow-hidden">
                <img src="/hero.webp" alt="hero" className="h-full w-full object-cover"/>
                <div 
                    style={{fontFamily: 'Cormorant Garamond sans-serif'}}
                    className="text-white italic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-400 bg-opacity-50 backdrop-filter backdrop-blur-lg p-7 rounded-lg">
                        <h1 className="text-5xl font-bold text-center">Welcome to Kombet Floris</h1>
                        <h2 className="text-3xl font-medium text-center">We sell the best products</h2>
                </div>
            </div>
        </>
    )
}