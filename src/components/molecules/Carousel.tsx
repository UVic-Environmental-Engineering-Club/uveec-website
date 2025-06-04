import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import classNames from "classnames";
import Image from "next/image";

export const Carousel = ({ slides }: any) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    // I have no idea what I am doing but it is working for now.
    // AngleLeft is for arrows. Seems like we can use className to style div. - David
    <div className="relative flex justify-center items-center rounded-lg w-full max-w-md mx-auto">
      <FaAngleLeft
        className={classNames("left-arrow", "opacity-40")}
        onClick={prevSlide}
      />
      <FaAngleRight
        className={classNames("right-arrow", "opacity-40")}
        onClick={nextSlide}
      />
      {slides.map((slide, i) => {
        return (
          <div
            key={i}
            className={`
            top-0 left-0 w-full h-full flex justify-center items-center
            transition-opacity duration-500
            ${i === current ? "opacity-100" : "opacity-0"} `}
          >
            {i === current && (
              <div className="relative h-96 w-96 rounded-lg overflow-hidden">
                <Image
                  src={slide.src}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                  priority
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
