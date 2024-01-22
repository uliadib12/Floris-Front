import { useEffect, useState } from "react";
import ProductModel from "../../models/product/productModel";

export default function useProduct() : [ProductModel, (product: ProductModel) => void] {
    const [product, setProduct] = useState<ProductModel>(ProductModel.EmptyProduct());

    useEffect(() => {
        setProduct(new ProductModel(
            {   id: 1, 
                name: "Product 1", 
                description: "Description 1", 
                images: [
                    'https://picsum.photos/seed/1/500/500', 
                    'https://picsum.photos/seed/2/500/500', 
                    'https://picsum.photos/seed/3/500/500'
                ],
                variants: [
                    {variantName: "Variant 1", size: "S", stock: 10, price: 100000},
                    {variantName: "Variant 2", size: "M", stock: 10, price: 200000},
                    {variantName: "Variant 3", size: "L", stock: 10, price: 300000},
                ],
            }
        ));
        return () => {
            setProduct(ProductModel.EmptyProduct());
        }
    }, []);

    return [product, setProduct];
}