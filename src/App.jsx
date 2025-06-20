import { useRef } from "react";
import Routers from "./components/Route/Routers";

function App() {
  const refs = {
    homeRef: useRef(null),
    landingRef: useRef(null),
  };
  return (
    // <>
    //   <Routers />
    // </>
    <>
      <div className="relative">
        <div ref={refs.homeRef} className="overflow-x-hidden">
          <Routers />
        </div>
        <div ref={refs.landingRef}>{/* <Landing /> */}</div>
      </div>
    </>
  );
}

export default App;

// import { useRef } from "react";
// import NavBarHorizotal from "./components/Header/NavBarHorizotal";
// import Routers from "./components/Route/Routers";

// function App() {
//   const refs = {
//     homeRef: useRef(null),
//     landingRef: useRef(null),
//   };
//   return (

//     <>
//       <div>
//         <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm supports-backdrop-blur:bg-white/60 w-full">
//           <NavBarHorizotal refs={refs} />
//         </div>
//         <div ref={refs.homeRef} className="overflow-x-hidden">
//           <Routers />
//         </div>
//         <div ref={refs.landingRef}>
//           {/* <Landing /> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
