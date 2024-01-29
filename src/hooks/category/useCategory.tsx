import { useEffect, useState } from "react";
import CategoryModel from "../../models/category/categoryModel";

export default function useCategory() : CategoryModel {
    const [products, setProducts] = useState<CategoryModel>(CategoryModel.EmptyCategory());

    const fetchProducts = async () => {
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND}/api/v1/category/${getSearchParam()}`);
        const data = await response.json();
        
        if (data.length === 0) {
            return CategoryModel.EmptyCategory();
        }

        return parseData(data);
    }

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
        });

        return () => {
            setProducts(CategoryModel.EmptyCategory());
        }
    }, []);

    return products;
}

function getSearchParam() {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
}

function parseData(data: any) {
    const products = data.map((product: any) => {
        return {
            id: product.id,
            image: product.images[0],
            name: product.name,
            minPrice: getMinMaxPrice(product.variants).minPrice,
            maxPrice: getMinMaxPrice(product.variants).maxPrice,
        }
    });
    return new CategoryModel(products);
}

function getMinMaxPrice(variants: any) {
    let minPrice = 0;
    let maxPrice = 0;
    variants.forEach((variant: any) => {
        if (variant.price < minPrice) {
            minPrice = variant.price;
        }
        if (variant.price > maxPrice) {
            maxPrice = variant.price;
        }
        if (minPrice === 0) {
            minPrice = maxPrice;
        }
    });
    return { minPrice, maxPrice };
}