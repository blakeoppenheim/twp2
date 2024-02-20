import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import OurWorkWrapper from "./OurWorkWrapper";
import useWindowDimensions from "../../hooks/UseWindowDimention";
import { OUR_WORK } from "../../constants/ourWork";
import { slider } from "../../utils/autoSlide";
import "keen-slider/keen-slider.min.css";

function OurWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowDimensions();
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    slider(4000)
  );

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
