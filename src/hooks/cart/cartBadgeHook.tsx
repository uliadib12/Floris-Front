import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { cartItems } from "../../states/cartState";

export default function useCartBadge() {
    const [cartBadge, setCartBadge] = useState(false);
    const $cartItems = useStore(cartItems);

    useEffect(() => {
        if ($cartItems.length > 0) {
            setCartBadge(true);
        } else {
            setCartBadge(false);
        }
    }, [$cartItems]);

    return cartBadge;
}