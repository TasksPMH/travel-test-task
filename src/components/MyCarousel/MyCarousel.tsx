import React, { useState } from 'react';
import './MyCarousel.scss';

import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import img1 from '../../../public/images/Rectangle 2.png';
import img2 from '../../../public/images/Rectangle 3.png';
import img3 from '../../../public/images/Rectangle 4.png';
import img4 from '../../../public/images/Rectangle 5.png';
interface CarouselProps {
  images?: string[];
}
const initialImages = [img1, img2, img3, img4, img1, img2, img3, img4];

const Carousel: React.FC<CarouselProps> = ({ images = initialImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log("🚀 ~ file: MyCarousel.tsx:16 ~ currentSlide", currentSlide);
  console.log(images.length);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const handleSlideLeft = () => {
    const newSlide = currentSlide - 1;
    setCurrentSlide(newSlide);
    setIsLeftDisabled(newSlide === 0);
    setIsRightDisabled(false);
  };

  const handleSlideRight = () => {
    const newSlide = currentSlide + 1;
    setCurrentSlide(newSlide);
    setIsLeftDisabled(false);
    setIsRightDisabled(newSlide === images.length/2-2);
  };

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <div
          className="carousel__slides"
          style={{ transform: `translateX(-${currentSlide * 25}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel__slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__controls">
        <div>
          <button
            className={`carousel__button ${
              isLeftDisabled ? 'carousel__button--disabled' : ''
            }`}
            onClick={handleSlideLeft}
            disabled={isLeftDisabled}
          >
            <CiCircleChevLeft />
            
          </button>
          <button
            className={`carousel__button ${
              isRightDisabled ? 'carousel__button--disabled' : ''
            }`}
            onClick={handleSlideRight}
            disabled={isRightDisabled}
          >
            <CiCircleChevRight  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
