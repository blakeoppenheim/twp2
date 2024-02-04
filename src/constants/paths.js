import { objectDestruction } from "./../utils/objectDestruction";
export const PREFIX = "TWP";

const simplePaths = {
  home: "/home",
  aboutUs: "/who-we-are",
  ourStory: "/our-story",
  ourSource: "/our-source",
  products: "/products",
  ourWork: "/our-work",
  contactUs: "/contact-us",
};
const PATHS = objectDestruction(simplePaths).map((path) =>
  path.value === "" ? { ...path } : { ...path, value: `${PREFIX}${path.value}` }
);
const resultObject = {};
PATHS.forEach((item) => {
  resultObject[item.key] = item.value;
});
export { resultObject as PATHS };
