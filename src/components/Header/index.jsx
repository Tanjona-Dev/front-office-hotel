import { motion as Motion } from "framer-motion";
import LogoHotel from "../../assets/image/N_TLogo-removebg-preview.png";

function Header() {
  const liensAffichesNavBar = [
    {
      id: 1,
      nom: "Home",
      ref: ""
    },
    {
      id: 2,
      nom: "Landing",
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

  return (
    <div className="flex justify-around items-center">
      <div>
        <img src={LogoHotel} alt="" className="w-15 h-15" />
      </div>
      <ul className="flex lg:gap-10 gap-1 justify-end ">
        {liensAffichesNavBar.map((liens, index) => {
          return (
            <Motion.li
              whileTap={{ scaleX: 1.1 }}
              className="hover:text-blue-800 hover:shadow-blue-950 text-black/80 font-semibold lg:text-lg cursor-pointer"
              key={`${liens.id}-${index}`}
            >
              {liens.nom}
            </Motion.li>
          );
        })}
      </ul>
    </div>
  );
}
export default Header;
