import glassBottleIcon from "./../assets/icons/glassBootleIcon.svg";
import plasticBottleIcon from "./../assets/icons/plasticBotlleIcon.svg";
import aluminumBottleIcon from "./../assets/icons/aluminumBottle.svg";
export const glassBottle = {
  id: 1,
  specialWord: "",
  type: "glass",
  icon: glassBottleIcon,
  iconDescription:
    "Choose our glass bottle for a taste of purity. It's naturally sustainable, chemical-free, and keeps your water refreshingly crisp.",
  title: "PURE",
  mobileUIDef: false,
  description:
    "Opt for the timeless clarity of glass, providing a toxin-free experience while supporting sustainability with every sip.",
};

export const plasticBottle = {
  id: 2,
  type: "plastic",
  specialWord: "",
  icon: plasticBottleIcon,
  mobileUIDef: true,
  iconDescription:
    "Our lightweight plastic bottle is made from recycled materials, combining convenience with environmental responsibility.",
  title: "LIGHTWEIGHT",
  description:
    "Crafted from lightweight plastics, this bottle offers a guilt-free way to stay hydrated, blending eco-friendliness with everyday utility.",
  list: {
    title: "Offered in",
    variants: ["8oz", "12oz", "16.9oz", "24oz", "1 liter"],
  },
};

export const aluminumBottle = {
  id: 2,
  type: "aluminum",
  mobileUIDef: false,
  specialWord: "",
  icon: aluminumBottleIcon,
  iconDescription:
    "High-quality aluminum combines strength, corrosion resistance, and light weight, making it ideal for maintaining temperature",
  title: "ECO-SMART",
  description:
    "Lightweight and durable, our aluminum bottle is ideal for maintaining your drinks temperature, perfect for eco-friendly on-the-go hydration.",
};
