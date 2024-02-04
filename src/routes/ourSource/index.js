import { lazy } from "react";
import MainLayout from "../../layout/MainLayout";
import { pageLoader } from "../../utils/lazyImport";
import { PATHS } from "../../constants/paths";

export default [
  {
    exact: true,
    path: PATHS.ourSource,
    component: lazy(
      pageLoader(() =>
        Promise.all([import("../../pages/ourSource")]).then(
          ([moduleExports]) => moduleExports
        )
      )
    ),

    layout: MainLayout,
  },
];
