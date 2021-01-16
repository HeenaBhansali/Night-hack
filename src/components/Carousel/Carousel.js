import React, { useState } from "react";
import "./carousel.css";

const imgUrls = [
  {
    0: "/images/Untitled-–-Figma (2).png",
    1: "/images/Untitled-–-Figma (3).png",
  },
  {
    0: "/images/download (2).jpeg",
    1: "/images/download (3).jpeg",
  },
  {
    0: "/images/download (4).jpeg",
    1: "/images/download (5).jpeg",
  },
];

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  return (
    <div className="container">
      <h1>Explore our demos</h1>
      <br />
      <p>
        Explore our landing Page demos on different kind of topics. More Demos
        are coming soon.
      </p>
      <div className="carousel">
        {currentImageIndex > 0 ? (
          <Arrow
            direction="left"
            clickFunction={previousSlide}
            glyph="&lt;"
          />
        ) : (
          <div></div>
        )}
        <div className="imageContainer">
          <img
            src={imgUrls[currentImageIndex][0]}
            alt=""
            className="carouselImage"
          />
          <img
            src={imgUrls[currentImageIndex][1]}
            alt=""
            className="carouselImage"
          />
        </div>
        {currentImageIndex < imgUrls.length - 1 ? (
          <Arrow direction="right" clickFunction={nextSlide} glyph="&gt;" />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
