import Bar from "../../Pages/Bar";
import Spa from "../../Pages/Spa";
import Home from "../../Pages/Home";
import LayoutWithNavbar from "../Header/LayoutNavbar";
import ChambreType from "../../Pages/Chambres/Chambres";
import Restaurant from "../../Pages/Restaurant/Restaurant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithNavbar>
              <Home />
            </LayoutWithNavbar>
          }
        />
        <Route path="/ChambreType" element={<ChambreType />} />
        <Route path="/Bar" element={<Bar />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Spa" element={<Spa />} />
      </Routes>
    </Router>
  );
}
