import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./carousel.css";

const imgUrls = [
  "/images/Untitled-–-Figma (2).png",
  "/images/Untitled-–-Figma (3).png",
  "/images/download (2).jpeg",
  "/images/download (3).jpeg",
  "/images/download (4).jpeg",
  "/images/download (5).jpeg",
];

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const Carousel = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex
      ? lastIndex
      : matches
      ? currentImageIndex - 1
      : currentImageIndex - 2;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex
      ? 0
      : matches
      ? currentImageIndex + 1
      : currentImageIndex + 2;

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
        {" "}
        {currentImageIndex > 0 && (
          <Arrow direction="left" clickFunction={previousSlide} glyph="&lt;" />
        )}
        <div className="imageContainer">
          {!matches ? (
            <>
              <img
                src={imgUrls[currentImageIndex]}
                alt=""
                className="carouselImage"
              />
              <img
                src={imgUrls[currentImageIndex + 1]}
                alt=""
                className="carouselImage"
              />
            </>
          ) : (
            <>
              <img
                src={imgUrls[currentImageIndex]}
                alt=""
                className="carouselImage"
              />
            </>
          )}
        </div>
        {currentImageIndex < imgUrls.length - 2 && (
          <Arrow direction="right" clickFunction={nextSlide} glyph="&gt;" />
        )}
      </div>
    </div>
  );
};

export default Carousel;
