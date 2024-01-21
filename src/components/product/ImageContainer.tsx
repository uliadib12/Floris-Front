import { useEffect } from "react";

interface ImageContainerProps {
    images: string[];
}

export default function ImageContainer({ 
    images = []
}: ImageContainerProps) {
    useEffect(() => {        
        // @ts-ignore
        $('#image').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
        });
    }, []);

    return (
        <>
            {
            <div className="px-8 bg-gray-100">
                <div id="image" className="h-full">
                    {images.map((image, index) => (
                        <Image key={index} src={image} alt={`image-${index}`}/>
                    ))}
                </div>
            </div>
            }
        </>
    );
}

function Image({ src = '', alt = '' }) {
    return (
        <img src={src} alt={alt} className="h-full"/>
    );
}