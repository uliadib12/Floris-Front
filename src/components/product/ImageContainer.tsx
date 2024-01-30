import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

interface ImageContainerProps {
    images: string[];
}

export default function ImageContainer({ 
    images = []
}: ImageContainerProps) {
    return (
        <>
            {
                <div
                className="h-full flex items-center justify-center">
                    <AwesomeSlider
                        className="sliderClass"
                    >
                        {
                            images.map((image, index) => (
                                <div key={index} data-src={image} />
                            ))
                        }
                    </AwesomeSlider>
                </div>
            }
        </>
    );
}