import { Suspense, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingScreen from "../components/ui/Loader";
import home from "./home";
import contact from "./Contact";

export const renderRoutes = (routes) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route, index) => {
          console.log("route.path", route.path);
          const Component = route.component;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const routes = [...home, ...contact];

export default routes;
