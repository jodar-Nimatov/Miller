import React, { useState, useRef, useEffect } from "react";
const colors = [
  "../../../assets/Images/coffeBgSlid.png",
  "../../../assets/Images/coffeBgSlid.png",
  "../../../assets/Images/coffeBgSlid.png",
];

const delay = 2500;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slider">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundImage, index) => {
            return <div className="slide" key={index}></div>;
          })}
        </div>
        <div className="slideshowDots">
          {colors.map((_, idx) => {
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
