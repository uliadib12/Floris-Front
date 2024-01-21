import { useEffect, useState } from "react";
import ProductModel from "../../models/product/productModel";

export default function useProduct() {
    const [product, setProduct] = useState<ProductModel>(ProductModel.EmptyProduct());

    useEffect(() => {
        return () => {
            setProduct(ProductModel.EmptyProduct());
        }
    }, []);

    setTimeout(() => {
        setProduct({
            id: 1,
            name: 'Perindo',
            description: 'This is a test product',
            images: ['https://picsum.photos/seed/1/500/500', 'https://picsum.photos/seed/2/500/500', 'https://picsum.photos/seed/3/500/500'],
            variants: [
                {
                    variantName: 'Variant 1',
                    price: 1000000,
                    stock: 10,
                    size: '2m x 2m x 2m',
                },
                {
                    variantName: 'Variant 2',
                    price: 200,
                    stock: 20,
                    size: '2m x 2m x 2m',
                },
                {
                    variantName: 'Variant 3',
                    price: 300,
                    stock: 30,
                    size: '2m x 2m x 2m',
                },
            ]
        })
    }, 1000);

    return product;
}