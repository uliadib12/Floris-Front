export default class ProductModel {
    id: number;
    name: string;
    description: string;
    image: string[];
    variants: ProductVariantModel[];

    constructor
    (
        id: number, 
        name: string, 
        description: string, 
        image: string[], 
        variants: ProductVariantModel[]
    ) 
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.variants = variants;
    }
}

export class ProductVariantModel {
    variantName: string;
    price: number;
    stock: number;
    size: string;

    constructor
    (
        variantName: string, 
        price: number, 
        stock: number, 
        size: string
    ) 
    {
        this.variantName = variantName;
        this.price = price;
        this.stock = stock;
        this.size = size;
    }
}