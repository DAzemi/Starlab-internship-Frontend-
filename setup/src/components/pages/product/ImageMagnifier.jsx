import React, { useState } from "react";

function ImageMagnifier({
  src,
  selectedImageIndex,
  magnifierHeight = 200,
  magnifieWidth = 200,
  zoomLevel = 1.5,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    // <div
    // // style={{
    // //   position: "relative",
    // //   height: height,
    // //   width: width,
    // // }}
    // >
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
      <img
        className="w-[85%] h-[90%] object-contain rounded-[30px] max-w-[582px] cursor-crosshair max-h-[750px] mt-[5%]"
        src={src}
        loading="lazy"
        // style={{ height: height, width: width }}
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${selectedImageIndex * 100}%)`,
        }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.scrollX;
          const y = e.pageY - top - window.scrollY;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      {isMobile ? null : (
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",
            pointerEvents: "none",
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            top: `${y - magnifierHeight / 3}px`,
            left: `${x - magnifieWidth / 3}px`,
            opacity: "1",
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
        ></div>
      )}
    </>
  );
}

export default ImageMagnifier;
