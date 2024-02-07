import React, {useState, useRef} from 'react';
import './imageslider.css';
import { DataSlider, BtnSlider } from '../../components';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1);
    const timeoutRef = useRef(null);
    const delay = 4000;

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setSlideIndex((prevIndex) =>
              prevIndex === DataSlider.length ? 1 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [slideIndex]);

    const nextSlide = () => {
        if(slideIndex !== DataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === DataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(DataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    var images = [];

    function importAll(r) {
      return r.keys().map(r);
    }
    images = importAll(require.context('./gallery_image',false, /\.(png|jpg|JPG)$/))
    return (
        <div className="container-slider">
            {DataSlider.map((obj, index) => {
                return (
                    // 
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        
                        <img 
                        src={images[index + 1]} 
                         alt="image_slider"/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}