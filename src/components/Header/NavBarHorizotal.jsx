import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import LogoHotel from "../../assets/image/N_TLogo-removebg-preview.png";

function NavBarHorizotal({ refs }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

  const handleClickLiensMenu = (liens) => {
    return liens.action(), setMenuIsOpen(false);
  };

  return (
    <div className="flex justify-around items-center max-lg:justify-between max-lg:mx-8">
      <div>
        <img src={LogoHotel} alt="" className="w-15 h-15" />
      </div>

      <div>
        <div
          className="lg:hidden cursor-pointer hover:scale-x-105 transition relative"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? <X /> : <Menu size={30} />}
        </div>
        {menuIsOpen && (
          <Motion.div className="absolute top-15 bg-blue-500 opacity-88 right-0 w-full h-screen z-100 py-3 text-center">
            <ul className="flex flex-col gap-4">
              {liensAffichesNavBar.map((liens) => (
                <Motion.li
                  key={liens.id}
                  className="text-white text-lg"
                  onClick={() => handleClickLiensMenu(liens)}
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
              className="hover:text-blue-800 hover:shadow-blue-950 text-black/80 font-semibold lg:text-lg cursor-pointer"
              key={`${liens.id}-${index}`}
              onClick={liens.action}
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
