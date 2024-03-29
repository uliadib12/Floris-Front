import { useEffect, useState } from "react";
import HamburgerButton from "./sidebar/HamburgerButton";
import HamburerMenu from "./sidebar/HamburgerMenu";
import MenuButton from "./topbar/MenuButton";
import MenuListButton from "./topbar/MenuListButton";
import MenuButtonBadge from "./topbar/MenuButtonBadge";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="w-full fixed drop-shadow-lg z-50">
            <div className="flex justify-between items-center w-full h-16 px-4 bg-pink-500">
                <div className="flex items-center">
                    <a href="/" className="text-white text-2xl font-bold">
                        <img src="/logo.png" width={100} height={100} alt="logo" />
                    </a>
                </div>
                <div className="md:flex items-center gap-4 hidden">
                    <MenuButton path="/" title="Home" icon="/icons/house.svg" />
                    <MenuListButton title="Category" icon="/icons/tags.svg">
                        <MenuButton path="/category?name=papan-bunga" title="Papan Bunga" />
                        <MenuButton path="/category?name=bouquet" title="Bouquet" />
                        <MenuButton path="/category?name=money-cake" title="Money Cake" />
                        <MenuButton path="/category?name=snack-tower" title="Snack Tower" />
                    </MenuListButton>
                    <MenuButtonBadge badge={false} path='/cart' title="Cart" icon="/icons/cart.svg" />
                    <MenuButton path="/#contact" title="Contact" icon="/icons/telephone.svg" />
                    <MenuButton path="/auth/login" title="" icon="/icons/person-circle.svg" />

                </div>
                <div className="flex md:hidden items-center">
                    <HamburgerButton onClick={toggleMenu} />
                    <HamburerMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
                </div>
            </div>
        </div>
    );
}