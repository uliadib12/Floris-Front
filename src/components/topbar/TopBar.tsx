import MenuButton from "./MenuButton";

export default function TopBar() {
    return (
        <div className="w-full fixed drop-shadow-lg z-50">
            <div className="flex justify-between items-center w-full h-16 px-4 bg-pink-400">
                <div className="flex items-center">
                    <div className="text-white text-2xl font-bold">
                        <img src="/logo.png" width={100} height={100} alt="logo" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <MenuButton path="/" title="Home" icon="/icons/house.svg" />
                    <MenuButton path="/#contact" title="Contact" icon="/icons/telephone.svg" />
                </div>
            </div>
        </div>
    );
}