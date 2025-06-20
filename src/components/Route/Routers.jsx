import Bar from "../../Pages/Bar";
import Spa from "../../Pages/Spa";
import Home from "../../Pages/Home";
import HotelDetails from "../../Pages/HotelDetails";
import ChambreType from "../../Pages/Chambres/Chambres";
import Restaurant from "../../Pages/Restaurant/Restaurant";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Router className="relative">
      <div className="z-50 absolute top-0  w-full">
        <NavBarHorizotal />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bar" element={<Bar />} />
        <Route path="/Spa" element={<Spa />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/ChambreType" element={<ChambreType />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}
