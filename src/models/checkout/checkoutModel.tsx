import type AddressModel from "./addressModel";
import CheckoutProductModel from "./checkoutProductModel";
import type PaymentModel from "./paymentModel";

export default class CheckoutModel {
    products: CheckoutProductModel[] | undefined;
    address: AddressModel | undefined;
    payment: PaymentModel[] | undefined;
    paymentSelected: number = 0;
    orderMenu: number = 0;
    allowOrderMenu: number = 0;
    
    constructor(
        address: AddressModel | undefined,
        products: CheckoutProductModel[] | undefined,
        payment: PaymentModel[] | undefined
    ) {
        this.address = address;
        this.products = products;
        this.payment = payment;
    }
}