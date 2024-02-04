import { lazy } from "react";
import MainLayout from "../../layout/MainLayout";
import { pageLoader } from "../../utils/lazyImport";
import { PATHS } from "../../constants/paths";

export default [
  {
    exact: true,
    path: PATHS.ourStory,
    component: lazy(
      pageLoader(() =>
        Promise.all([import("../../pages/OurStory")]).then(
          ([moduleExports]) => moduleExports
        )
      )
    ),

    layout: MainLayout,
  },
];
