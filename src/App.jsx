import { useRef } from "react";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import NavBarHorizotal from "./components/Header/NavBarHorizotal";

function App() {
  // Toutes les References des sections ici.
  const refs = {
    homeRef: useRef(null),
    landingRef: useRef(null),
  };
  return (
    <>
      <div>
        <div className="sticky top-0 z-50 bg-white/80">
          <NavBarHorizotal refs={refs} />
        </div>
        <div ref={refs.homeRef}>
          <Home />
        </div>
        <div ref={refs.landingRef}>
          <Landing />
        </div>
      </div>
    </>
  );
}

export default App;
