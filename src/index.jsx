import { useEffect } from "react";
import routes, { renderRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.scss";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
