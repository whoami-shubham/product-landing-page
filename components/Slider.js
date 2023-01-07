import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useWindowSize } from "../hooks/useWindowSize";

function getSlidesLength(initialLength,windowSize){
  const width = windowSize?.width;
    if(width>=1024 || width===undefined){
        return initialLength;
    }
    if(width>600){
        return 2;
    }
    return 1;
}


const Slider = ({
  slides,
  Component,
  initialLength = 3,
  title = "",
  autoStart = false,
  classNames = "mx-2",
}) => {
  const windowSize = useWindowSize();
  const slidesLength = getSlidesLength(initialLength, windowSize);

  const [indexs, setIndexs] = useState({
    start: 0,
    end: Math.max(0, Math.min(slides.length - 1, slidesLength - 1)),
  });

  useEffect(()=>{
    const { start,end } = indexs;
    if(slidesLength!== end-start+1){
      setIndexs({start:indexs.start,end: Math.max(
        start, Math.min(slides.length-1,start+slidesLength-1)
        )})
    }
},[windowSize])


  const sliderRef = React.useRef();

  const nextSlide = () => {
    const { end } = indexs;
    const nextEnd =
      end < slides.length - 1
        ? end + 1
        : Math.max(0, Math.min(slides.length - 1, slidesLength - 1));
    const nextStart = Math.max(0, nextEnd - (slidesLength - 1));
    setIndexs({ start: nextStart, end: nextEnd });
  };
  const prevSlide = () => {
    const { start } = indexs;
    const nextStart =
      start > 0 ? start - 1 : Math.max(0, slides.length - slidesLength);
    const nextEnd = Math.max(
      nextStart,
      Math.min(slides.length - 1, nextStart + slidesLength - 1)
    );
    setIndexs({ start: nextStart, end: nextEnd });
  };
  useEffect(() => {
    sliderRef.current = setInterval(() => {
      autoStart && nextSlide();
    }, 4000);
    return () => {
      clearInterval(sliderRef.current);
    };
  }, [indexs]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4 py-0">{title}</h1>
      <div className="relative flex justify-center p-4">
        {slides?.length > 1 && (
          <FaArrowCircleLeft
            onClick={prevSlide}
            className="absolute  m-auto top-0 bottom-0 left-[20px] text-white/70 cursor-pointer select-none z-[2] w-6 lg:w-16 md:w-10"
            size={50}
            color={'aquamarine'}
          />
        )}
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index >= indexs.start && index <= indexs.end
                  ? classNames
                  : "opacity-0 hidden"
              }
            >
              <Component {...slide} />
            </div>
          );
        })}
        {slides?.length > 1 && (
          <FaArrowCircleRight
            onClick={nextSlide}
            className="absolute m-auto top-0 bottom-0  right-[20px] text-white/70 cursor-pointer select-none z-[2] w-6 lg:w-16 md:w-10"
            size={50}
            color={'aquamarine'}
          />
        )}
      </div>
    </div>
  );
};

export default Slider;
