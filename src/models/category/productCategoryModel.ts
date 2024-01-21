export default class ProductCategoryModel {
    id: number = 0;
    image: string = "";
    name: string = "";
    minPrice: number = 0;
    maxPrice: number = 0;

    constructor(
        id: number,
        image: string,
        name: string,
        minPrice: number,
        maxPrice: number
    ) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }

    static EmptyProductCategory(): ProductCategoryModel {
        return new ProductCategoryModel(0, "", "", 0, 0);
    }
}
