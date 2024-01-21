import useProduct from "../../hooks/product/useProduct";
import ImageContainer from "./ImageContainer";
import ImageSkeleton from "./skeleton/ImageSkeleton";
import ProductDetails from "./ProductDetails";
import ProductDetailsSkeleton from "./skeleton/ProductDetailsSkeleton";

export default function ProductContainer() {
    const product = useProduct();

    return (
        <div className="flex flex-col md:flex-row justify-between">
        <div className="grow basis-[50%] lg:h-[90vh] overflow-hidden">
            <div className="h-full w-full">
                {
                    product.images.length === 0 ?
                    <ImageSkeleton/>
                    :
                    <ImageContainer images={product.images}/>
                }
            </div>
        </div>
        <div className="grow basis-[50%] p-6">
            {
                product.id === undefined ?
                <ProductDetailsSkeleton/>
                :
                <ProductDetails id={product.id} name={product.name} description={product.description} variants={product.variants}/>
            }
        </div>
    </div>
    )
}