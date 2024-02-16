import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import OurWorkWrapper from "./OurWorkWrapper";
import { OUR_WORK } from "../../constants/ourWork";
import useWindowDimensions from "../../hooks/UseWindowDimention";

function OurWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowDimensions();
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div id="ourWork" className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {OUR_WORK.map((item) => (
            <OurWorkWrapper
              bgIcon={item.bgIcon ? item.bgIcon : ""}
              bgColor={item.bgColor}
              icon={width > 500 ? item.icon : item.iconMobile}
            />
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default OurWork;
