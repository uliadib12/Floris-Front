import type ProductCategoryModel from "./productCategoryModel";

export default class CategoryModel {
    products: ProductCategoryModel[] = [];

    constructor(products: ProductCategoryModel[]) {
        this.products = products;
    }

    static EmptyCategory(): CategoryModel {
        return new CategoryModel([]);
    }
}