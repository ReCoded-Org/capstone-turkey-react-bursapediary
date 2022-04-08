import { useState, useEffect, useRef, useCallback } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PropTypes from 'prop-types';

export default function Slider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  // fucntion calculate the right index and sets it
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
    <div ref={slideRef} className="w-full h-70v  relative  bg-secondary">
      <div className="flex flex-col tracking-wider py-20 px-40 items-center text-primary w-full h-full text-center ">
        <p className="text-2xl font-bold ">What Our Clients Say</p>
        <p className="flex text-2xl font-semibold my-20 justify-self-center w-1/3 leading-8">
          {items[currentIndex].review}
        </p>
        <p className="text-xl font-bold">{items[currentIndex].clientName}</p>
      </div>
      <button
        className="absolute top-1/2 left-1/4 text-primary cursor-pointer transition "
        onClick={() => handleOnClick('left')}
        type="submit"
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="absolute top-1/2 right-1/4 text-primary cursor-pointer transition"
        onClick={() => handleOnClick('right')}
        type="submit"
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
}

Slider.propTypes = {
  items: PropTypes.string.isRequired,
};
