import type ProductModel from "../product/productModel";

export default class ProductCartModel {
    id: string;
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
        id: string, 
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

    static FromProduct(product: ProductModel) {
        const variantIndex = product.userInput.variantIndex;

        return new ProductCartModel(
            product.id,
            product.name,
            product.images[0],
            variantIndex,
            product.variants[variantIndex].variantName,
            product.variants[variantIndex].price,
            product.userInput.quantity,
            product.variants[variantIndex].size,
            product.userInput.additionalInformation
        );
    }
}