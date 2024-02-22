import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import OurWorkWrapper from "./OurWorkWrapper";
import useWindowDimensions from "../../hooks/UseWindowDimention";
import { slider } from "../../utils/autoSlide";
import "keen-slider/keen-slider.min.css";
import FourSeasons from "./Sliders/FourSeasons";
import SoulCycle from "./Sliders/SoulCycle";
import MercedesSection from "./Sliders/Mercedes";
import HardRock from "./Sliders/HardRock";

function OurWork() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { width } = useWindowDimensions();
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      defaultAnimation: {
        duration: 1500,
      },
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
          <FourSeasons className="keen-slider__slide" />
          <SoulCycle className="keen-slider__slide" />
          <MercedesSection className="keen-slider__slide" />
          <HardRock className="keen-slider__slide" />
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
