export const slider = (time) => [
  (slider) => {
    let timeout;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        slider?.next();
        nextTimeout();
      }, time || 4000);
    }

    slider.on("created", () => {
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  },
];
