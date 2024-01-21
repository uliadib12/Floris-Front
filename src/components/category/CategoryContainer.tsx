import useCategory from "../../hooks/category/useCategory";
import Card from "./Card";
import CardContainer from "./CardContainer";
import CardSkeleton from "./skeleton/CardSkeleton";

export default function CategoryContainer() {
    const products = useCategory();
    
    return (
        <div className="min-h-screen p-4">
            <CardContainer>
                {products.products.length === 0 ? 
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                    :
                    products.products.map((product) => (
                        <Card
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.name}
                            minPrice={product.minPrice}
                            maxPrice={product.maxPrice}
                        />
                    ))
                }
            </CardContainer>
        </div>
    );
}