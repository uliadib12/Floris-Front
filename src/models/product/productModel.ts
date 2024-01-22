export default class ProductModel {
    id: number;
    name: string;
    description: string;
    images: string[];
    variants: ProductVariantModel[];
    userInput: UserInputProduct = new UserInputProduct(0, 0, '');

    constructor
    ({
        id, 
        name,
        description,
        images,
        variants
    } : { 
            id: number, 
            name: string, 
            description: string, 
            images: string[], 
            variants: ProductVariantModel[] 
    })
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
        this.variants = variants;
    }

    static EmptyProduct(): ProductModel {
        return new ProductModel({ id: undefined, name: '', description: '', images: [], variants: [] });
    }

    EditUserInput(userInput: UserInputProduct) : ProductModel {
        this.userInput = userInput;
        return this;
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

export class UserInputProduct{
    variantIndex: number;
    quantity: number;
    additionalInformation: string;

    constructor
    (
        variantIndex: number,
        quantity: number,
        additionalInformation: string
    )
    {
        this.variantIndex = variantIndex;
        this.quantity = quantity;
        this.additionalInformation = additionalInformation;
    }
}