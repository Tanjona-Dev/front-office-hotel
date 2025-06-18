export default function LayoutWithNavbar({ children }) {
  return <>{children}</>;
}

// import { useRef } from "react";
// import NavBarHorizotal from "./NavBarHorizotal";

// export default function LayoutWithNavbar({ children }) {
//   // Créez les refs nécessaires
//   const refs = {
//     homeRef: useRef(null),
//     landingRef: useRef(null),
//   };

//   return (
//     <>
//       <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm supports-backdrop-blur:bg-white/60 w-full">
//         <NavBarHorizotal refs={refs} />
//       </div>

//       {/* Enveloppez children avec les refs appropriées */}
//       <div ref={refs.homeRef} className="overflow-x-hidden">
//         {children}
//       </div>

//       <div ref={refs.landingRef}>{/* <Landing /> */}</div>
//     </>
//   );
// }
