import { useEffect, useState } from "react";
import CategoryModel from "../../models/category/categoryModel";

export default function useCategory() : CategoryModel {
    const [products, setProducts] = useState<CategoryModel>(CategoryModel.EmptyCategory());

    useEffect(() => {
        return () => {
            setProducts(CategoryModel.EmptyCategory());
        }
    }, []);

    setTimeout(() => {
        setProducts(
           new CategoryModel([
                {
                    id: 1,
                    image: 'https://picsum.photos/seed/1/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 10000000,
                },
                {
                    id: 2,
                    image: 'https://picsum.photos/seed/2/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 10000000,
                },
                {
                    id: 3,
                    image: 'https://picsum.photos/seed/3/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 10000000,
                },
                {
                    id: 4,
                    image: 'https://picsum.photos/seed/4/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 10000000,
                },
                {
                    id: 5,
                    image: 'https://picsum.photos/seed/5/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 10000000,
                },
                {
                    id: 6,
                    image: 'https://picsum.photos/seed/6/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 1000000,
                },
                {
                    id: 7,
                    image: 'https://picsum.photos/seed/7/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 1000000,
                },
                {
                    id: 8,
                    image: 'https://picsum.photos/seed/8/500/500',
                    name: 'Perindo',
                    minPrice: 1000000,
                    maxPrice: 1000000,
                },
           ])
        )
    }, 1000);

    return products;
}