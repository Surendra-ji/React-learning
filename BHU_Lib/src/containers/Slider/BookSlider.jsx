import React, {useState,useEffect,useRef} from 'react'
import { BtnSlider } from '../../components';
import './bookslider.css'
import {BookDescription} from './BookDescription'
var images = [];

function importAll(r) {
  return r.keys().map(r);
}

export default function BookSlider() {

  images = importAll(require.context('./book_image',false, /\.(png|jpg)$/));

  const show = 5;
  const delay = 2000;

  const [currentIndex, setCurrentIndex] = useState(show);
  const [length, setLength] = useState(images.length);

  const [isRepeating, setIsRepeating] = useState(images.length > show);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [desc, setDesc] = useState(false); 

  const timeoutRef = useRef(null);

  function setFalseDesc() {
    setDesc(false)
  }
  function setTrueDesc() {
    setDesc(true)
  }

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setCurrentIndex(prevState => prevState + 1),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [currentIndex]);


  // Set the length to match current children from props
 useEffect(() => {
    setLength(images.length)
    setIsRepeating(images.length > show)
    }, [images, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

  const next = () => {
      if (isRepeating || currentIndex < (length - show)) {
          setCurrentIndex(prevState => prevState + 1)
      }
  }
  
  const prev = () => {
      if (isRepeating || currentIndex > 0) {
          setCurrentIndex(prevState => prevState - 1)
      }
}

  const renderExtraPrev = () => {
    let output = []
    for (let index = 0; index < show; index++) {
        output.push(<img key={index} src={images[length-1-index]} alt="image_slider"/>)
    }
    output.reverse()
    return output
}

  const renderExtraNext = () => {
    let output = []
    for (let index = 0; index < show; index++) {
        output.push(<img key={index} src={images[index]} alt="image_slider"/>)
    }
    return output
}

const handleTransitionEnd = () => {
    if (isRepeating) {
        if (currentIndex === 0) {
            setTransitionEnabled(false)
            setCurrentIndex(length)
        } else if (currentIndex === length + show) {
            setTransitionEnabled(false)
            setCurrentIndex(show)
        }
    }
}

    return (
        <div className="bookslide-container">
            <p>New Arrivals</p>
            <div className="bookslide-wrapper">
                <div className="bookslide-content-wrapper">
                <BtnSlider moveSlide={prev} direction={"prev"} />
                    <div className="book_slide"
                    style={{ transform: `translateX(-${currentIndex * (100/5)}%)`,
                             transition: !transitionEnabled ? 'none' : undefined,
                            }}
                            onTransitionEnd={() => handleTransitionEnd()}
                    >
                    {
                        (length > show && isRepeating) && renderExtraPrev()
                        }

                    {BookDescription.map((obj, index) => {
                        return (<>
                         <img
                         key={obj.id} src={images[index]} alt="image_slider"/>
                          {/* {desc && <p>hi</p>} */}
                        </>
                    )})}

                    {
                        (length > show && isRepeating) && renderExtraNext()
                        }
                    </div>
                <BtnSlider moveSlide={next} direction={"next"}/>
                </div>
            </div>
        </div>
    )
}
