import { createContext, useEffect, useState } from "react";
import AddressModel from "../../models/checkout/addressModel";
import CheckoutModel from "../../models/checkout/checkoutModel";

export const CheckoutContext = createContext<[CheckoutModel, (checkout: CheckoutModel) => void]>(null);