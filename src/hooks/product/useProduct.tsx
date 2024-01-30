import { useEffect, useState } from "react";
import ProductModel from "../../models/product/productModel";

export default function useProduct() : [ProductModel, (product: ProductModel) => void] {
    const [product, setProduct] = useState<ProductModel>(ProductModel.EmptyProduct());

    const fetchProduct = async () => {
        const response = await fetch(`${import.meta.env.PUBLIC_BACKEND}/api/v1/product/${getProductId()}`);
        const data = await response.json();
        return parseData(data);
    }

    useEffect(() => {
        fetchProduct().then((data) => {
            setProduct(data);
        });
        return () => {
            setProduct(ProductModel.EmptyProduct());
        }
    }, []);

    return [product, setProduct];
}

function getProductId() : string {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId === null) {
        return "";
    }
    return productId;
}

function parseData(data: any) {
    return new ProductModel(
        {   
            id: data.id, 
            name: data.name, 
            description: data.description, 
            images: data.images,
            variants: data.variants.map((variant: any) => {
                return {
                    variantName: variant.name,
                    size: variant.size,
                    stock: variant.stock,
                    price: variant.price,
                }
            }),
        }
    );
}
