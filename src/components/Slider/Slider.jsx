import { useState, useEffect, useRef, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PropTypes from 'prop-types';

export default function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  // Function that calculates and sets the right index
  const handleOnClick = useCallback(
    (direction) => {
      if (direction === 'left') {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
      } else {
        setCurrentIndex(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
      }
      slideRef.current.classList.add('fade-anim');
    },
    [currentIndex, items.length],
  );

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleOnClick('right');
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [handleOnClick]);

  return (
    <div
      ref={slideRef}
      className="w-full h-40v lg:h-70v md:h-60v sm:h-50v relative  bg-secondary"
      data-testid="slider"
    >
      <div className="flex flex-col tracking-wider lg:py-20 md:py-10 sm:py-8 lg:px-40 md:px-20 sm:px-10 items-center text-primary w-full h-full text-center justify-center ">
        <p className=" text-xl lg:text-2xl md:text-xl sm:text-xl font-bold ">
          What Our Clients Say
        </p>
        <p className="flex text-sm lg:text-2xl md:text-xl sm:text-base font-semibold my-8 lg:my-20 md:my-10 sm:my-8 justify-self-center w-1/3 sm:leading-8 leading-4 ">
          {items[currentIndex].review}
        </p>
        <p className="text-base lg:text-xl md:text-base sm:text-base font-bold">
          {items[currentIndex].clientName}
        </p>
      </div>
      <button
        className="absolute top-1/2 left-1/4  text-primary cursor-pointer transition "
        onClick={() => handleOnClick('left')}
        type="submit"
        aria-label="back-button"
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="absolute top-1/2 right-1/4 text-primary cursor-pointer transition"
        onClick={() => handleOnClick('right')}
        type="submit"
        aria-label="forward-button"
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
}

Slider.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};
