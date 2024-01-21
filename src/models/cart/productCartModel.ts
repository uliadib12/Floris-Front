export default class ProductCartModel {
    id: number;
    name: string;
    image: string;
    variantIndex: number;
    variantName: string;
    price: number;
    quantity: number;
    size: string;
    additionalInformation: string;

    constructor
    (
        id: number, 
        name: string, 
        image: string, 
        variantIndex: number,
        variantName: string,
        price: number,
        quantity: number,
        size: string,
        additionalInformation: string
    )
    {
        this.id = id;
        this.name = name;
        this.image = image;
        this.variantIndex = variantIndex;
        this.variantName = variantName;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.additionalInformation = additionalInformation;
    }
}