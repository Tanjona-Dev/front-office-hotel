// import Home from "../../Pages/Home";
// import Landing from "../../Pages/Landing";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function Routers() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Landing" element={<Landing />} />
//       </Routes>
//     </Router>
//   );
// }

import Home from "../../Pages/Home";
import Return from "../Return/Return";
import LayoutWithNavbar from "../Header/LayoutNavbar";
import ChambreType from "../../Pages/Chambres/Chambres";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Restaurant from "../../Pages/Restaurant/Restaurant";

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
        <Route
          path="/ChambreType"
          element={
            <Return>
              <ChambreType />
            </Return>
          }
        />
        <Route
          path="/Restaurant"
          element={
            <Return>
              <Restaurant />
            </Return>
          }
        />
      </Routes>
    </Router>
  );
}
