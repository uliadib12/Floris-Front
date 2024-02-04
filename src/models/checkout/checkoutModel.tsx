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
        payment: PaymentModel[] | undefined,
    ) {
        this.address = address;
        this.products = products;
        this.payment = payment;
    }

    clone = () => {
        const clone = new CheckoutModel(
            this.address,
            this.products,
            this.payment
        );

        clone.paymentSelected = this.paymentSelected;
        clone.orderMenu = this.orderMenu;
        clone.allowOrderMenu = this.allowOrderMenu;

        return clone;
    }

    private parseDataForServer = () => {
        return {
            address: {
                name: this.address?.name,
                email: this.address?.email,
                phone: this.address?.phone,
                address: this.address?.address,
                day: this.address?.day,
                time: this.address?.time
            },
            products: this.products?.map((product) => {
                return {
                    id: product.id,
                    quantity: product.quantity,
                    variantName: product.variant,
                    additionalInfo: product.additionalInfo
                }
            }),
            payment: this.payment?.at(this.paymentSelected)?.id
        }
    }

    public sendOrder = async () => {
        const data = this.parseDataForServer();
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND}/api/v1/make-order`, {
            method: "POST",
            body: new URLSearchParams({
                data: JSON.stringify(data)
            }),
        });

        return response;
    }
}