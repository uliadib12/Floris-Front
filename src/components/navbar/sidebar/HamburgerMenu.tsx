import { motion } from 'framer-motion';
import MenuButton from '../topbar/MenuButton';
import MenuButtonBadge from '../topbar/MenuButtonBadge';

export default function HamburerMenu(
    props: {
        isOpen: boolean;
        toggleMenu: () => void;
    }
) {
    const menuVariants = {
        open: {
            opacity: 1,
            display: 'block',
        },
        closed: {
            opacity: 0,
            display: 'none',
        },
        menuOpen: {
            x: 0,
            transition: {
                delay: 0.1,
                duration: 0.3,
            }
        },
        menuClosed: {
            x: '100%',
        }
      }

    return (
        <>
            <motion.div animate={props.isOpen ? 'open' : 'closed'} variants={menuVariants} onClick={props.toggleMenu} className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 h-screen hidden">
                <motion.div animate={props.isOpen ? 'menuOpen' : 'menuClosed'} variants={menuVariants} className="absolute top-0 right-0 p-8 bg-pink-400 w-[80vw] h-screen" onClick={
                    (e) => {
                        e.stopPropagation();
                    }}>
                    {/* create close button */}
                    <div className="flex justify-end">
                        <button onClick={props.toggleMenu}>
                            <img src="/icons/x-circle.svg" width={30} height={30} alt="close" style={{filter: 'invert(1)'}}/>
                        </button>
                    </div>
                    <MenuButton path="/" title="Home" icon="/icons/house.svg" />
                    <MenuButtonBadge path='/cart' title="Cart" icon="/icons/cart.svg" />
                    <MenuButton path="/category?name=papan-bunga" title="Papan Bunga" />
                    <MenuButton path="/category?name=bouquet" title="Bouquet" />
                    <MenuButton path="/category?name=money-cake" title="Money Cake" />
                    <MenuButton path="/category?name=snack-tower" title="Snack Tower" />
                    <MenuButton path="/#contact" title="Contact" icon='/icons/telephone.svg' onClick={props.toggleMenu}/>
                </motion.div>
            </motion.div>    
        </>
    )
}