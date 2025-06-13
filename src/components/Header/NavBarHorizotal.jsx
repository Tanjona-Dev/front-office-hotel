import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import LogoHotel from "../../assets/image/N_TLogo-removebg-preview.png";

// Ajout des styles sur chaques liens dans le NavBarHorizotal
function addStyleLinkIndex(index, setLienClick) {
  setLienClick(index);
}

// Function principale
function NavBarHorizotal({ refs }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [lienClick, setLienClick] = useState(0);

  // Scroller sur les References recuperees sur les sections.
  const scrollToRef = (homeReference) => {
    homeReference.current?.scrollIntoView({ behavior: "smooth" });
  };

  // listes des liens sur navBar.
  const liensAffichesNavBar = [
    {
      id: 1,
      nom: "Home",
      action: () => scrollToRef(refs.homeRef),
    },
    {
      id: 2,
      nom: "Landing",
      action: () => scrollToRef(refs.landingRef),
    },
    {
      id: 3,
      nom: "About Us",
    },
    {
      id: 4,
      nom: "Our Team",
    },
  ];

  const handleClickLiensMenu = (liens, index) => {
    return (
      liens.action(),
      setMenuIsOpen(false),
      addStyleLinkIndex(index, setLienClick)
    );
  };

  return (
    <div className="flex justify-around items-center max-lg:justify-between max-lg:mx-8 shadow-xl">
      <div>
        <img src={LogoHotel} alt="" className="w-15 h-15" />
      </div>

      <div>
        <div
          className="lg:hidden cursor-pointer hover:scale-x-105 transition-all relative"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? <X /> : <Menu size={30} />}
        </div>
        {menuIsOpen && (
          <Motion.div className="absolute top-15 bg-blue-500 opacity-88 right-0 w-full h-screen z-200 py-3 text-center">
            <ul className="flex flex-col gap-4">
              {liensAffichesNavBar.map((liens, index) => (
                <Motion.li
                  key={liens.id}
                  className={`text-white text-lg cursor-pointer hover:text-black`}
                  onClick={() => handleClickLiensMenu(liens, index)}
                >
                  {liens.nom}
                </Motion.li>
              ))}
            </ul>
          </Motion.div>
        )}
      </div>
      <ul className="flex lg:gap-10 gap-1 justify-end max-lg:hidden ">
        {liensAffichesNavBar.map((liens, index) => {
          return (
            <Motion.li
              whileTap={{ scaleX: 1.1 }}
              className={`px-2 py-1 rounded hover:text-blue-800 hover:shadow-blue-950 text-black/80 font-semibold lg:text-lg cursor-pointer ${
                lienClick === index ? "bg-blue-700 text-white" : ""
              }`}
              key={`${liens.id}-${index}`}
              onClick={() => handleClickLiensMenu(liens, index)}
            >
              {liens.nom}
            </Motion.li>
          );
        })}
      </ul>
    </div>
  );
}
export default NavBarHorizotal;
