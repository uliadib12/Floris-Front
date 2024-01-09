export default function TopBar() {
    return (
        <div className="w-full fixed drop-shadow-md">
            <div className="flex justify-between items-center w-full h-16 px-4 bg-pink-400">
                <div className="flex items-center">
                    <div className="text-white text-2xl font-bold">
                        <img src="/logo.png" width={100} height={100} alt="logo" />
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-white text-lg font-bold">Home</div>
                    <div className="text-white text-lg font-bold ml-4">About</div>
                    <div className="text-white text-lg font-bold ml-4">Contact</div>
                </div>
            </div>
        </div>
    );
}