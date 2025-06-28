import {
  X,
  Menu,
  Phone,
  MapPin,
  Twitter,
  Calendar,
  Facebook,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RoomTypeContext } from "../utils/context";
import LogoHotel from "../../assets/Logo/N_TLogo.png";
import barPlage from "../../assets/NavBar-img/barPlage.jpeg";
import massageImg from "../../assets/NavBar-img/massage.jpeg";
import restoImg from "../../assets/NavBar-img/restoPlage.jpeg";
import loungeImg from "../../assets/NavBar-img/loungeBar.jpeg";
import { motion as Motion, AnimatePresence } from "framer-motion";

const roomType = [
  {
    name: "Chambre supérieure",
    stateType: "SUPERIEUR",
  },
  {
    name: "Chambre Luxiry",
    stateType: "LUXE",
  },
  {
    name: "Chambre familiale",
    stateType: "FAMILIALE",
  },
];
// menu content
function DisplayMenuContent({
  isHover,
  isHover2,
  setIsHover,
  setIsHover2,
  locationLink,
  setRoomType,
  setMenuIsOpen,
}) {
  const navigate = useNavigate();
  const LinkArrow = [
    {
      name: "RESERVATION",
      url: "/reservation",
      icon: <Calendar color="black" size={16} className="mt-1" />,
    },
    {
      name: "+261344328140",
      url: "https://wa.me/+261344328140",
      icon: <Phone size={16} color="black" className="mt-1" />,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center h-full p-5 mt-3">
        <div className="w-full flex flex-col gap-2 max-lg:hidden">
          {/* Location at menu Content */}
          {locationLink.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-lg flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
        <div className="max-lg:hidden">
          <ul className="w-full flex gap-5 justify-between pr-20">
            {LinkArrow.map((link, index) => (
              <li key={index} className={cn("flex items-center ")}>
                <Link
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex gap-3"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <div>{link.icon}</div>
                  <span to={link.url} className="text-black">
                    {link.name}
                  </span>
                  <div className="w-[1px] h-5 bg-black"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-12 max-lg:flex-col">
        <div className="w-110 px-5 flex flex-col gap-7">
          <Link to={`/`}>
            <img src={LogoHotel} alt="Logo-hotel" className="w-30 mx-auto" />
          </Link>
          <p className="max-lg:hidden">
            Le N&T Hotel est un hôtel d’affaires haut de gamme. Un large choix
            de restauration internationale, fusion et régionale vous attends
            dans nos différents restaurants.
          </p>
          <button
            onClick={() => navigate("/HotelDetails")}
            className="border border-black/50 p-3 mx-auto w-[50%] max-lg:text-sm max-lg:w-[75%] rounded-full hover:bg-black/80 hover:text-white cursor-pointer transition-all duration-150"
          >
            DECOUVRIR L'HOTEL
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5 max-lg:flex max-lg:flex-col max-lg:mx-5">
          {[
            { title: "Chambre", image: loungeImg, path: "/ChambreType" },
            { title: "Bar", image: barPlage, path: "/Bar" },
            { title: "Restaurant", image: restoImg, path: "/Restaurant" },
            { title: "Spa", image: massageImg, path: "/Spa" },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="flex flex-col gap-2 overflow-hidden  max-lg:border-b"
            >
              <h1 className="text-lg uppercase">{item.title}</h1>
              <img
                src={item.image}
                alt=""
                className="w-62 h-35 hover:scale-105 transition-all duration-400 cursor-pointer max-lg:hidden"
              />
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-5 w-100 max-lg:hidden">
          <h1 className="text-lg">CHAMBRE</h1>
          <Link to={`/room-type`} onClick={() => setMenuIsOpen(false)}>
            {roomType.map((room, index) => (
              <li
                key={index}
                className="text-lg flex items-center gap-2 border-t border-b py-3 cursor-pointer w-full"
              >
                <span
                  onClick={() => setRoomType(room.stateType)}
                  className="text-black/50 hover:text-black"
                >
                  {room.name}
                </span>
              </li>
            ))}
          </Link>
          <Link
            to={`/ChambreType`}
            className="text-black/50 hover:text-black text-lg flex items-center gap-2  border-b pb-3 cursor-pointer w-full"
          >
            Toutes
          </Link>
          <div className="flex gap-5">
            <Facebook
              fill="black"
              size={10}
              className="border w-10 h-10 p-2 rounded-full hover:bg-black/80 hover:text-white transition-all duration-150 cursor-pointer"
            />
            <Twitter
              size={10}
              className="border w-10 h-10 p-2 rounded-full hover:bg-black/80 hover:text-white transition-all duration-150 cursor-pointer"
            />
          </div>
        </div>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="xl:h-5"
        >
          <Link
            to={`/reservation`}
            className=" text-lg max-lg:border-b max-lg:text-right max-lg:mx-5 cursor-pointer"
          >
            RESERVATION
          </Link>
          <Motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHover ? 1 : 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={cn("bg-black h-[1px]")}
          ></Motion.div>
        </div>
        <div
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
          className="xl:h-5"
        >
          <h1 className="text-lg max-lg:border-b max-lg:text-right max-lg:mx-5 cursor-pointer">
            CONTACT
          </h1>
          <Motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHover2 ? 1 : 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={cn("bg-black h-[1px]")}
          ></Motion.div>
        </div>
      </div>
    </div>
  );
}

function DisplayMenuLogo() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 max-lg:mt-0">
      <Menu color="white" size={50} />
      <h1 className="text-white max-lg:hidden">Menu</h1>
    </div>
  );
}

function DisplayLink({ menuIsOpen, setMenuIsOpen }) {
  const LinkArrow = [
    {
      name: "RESERVATION",
      url: "/reservation",
      icon: (
        <Calendar
          size={16}
          className={cn("mt-1 max-lg:border max-lg:w-7 max-lg:h-7 max-lg:p-1")}
        />
      ),
    },
    {
      name: "+261344328140",
      url: "https://wa.me/+261344328140",
      icon: (
        <Phone
          size={16}
          className={cn("mt-1  max-lg:border max-lg:w-7 max-lg:h-7 max-lg:p-1")}
        />
      ),
    },
  ];
  return (
    <ul className="w-full flex gap-5 justify-between">
      {LinkArrow.map((link, index) => (
        <li
          onClick={() => setMenuIsOpen(false)}
          key={index}
          className={cn("flex items-center ")}
        >
          <Link
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex gap-5"
          >
            <div>{link.icon}</div>
            <div
              className={cn(
                "group max-lg:hidden relative",
                menuIsOpen && "text-black"
              )}
            >
              {link.name}
              <span className="max-xl:hidden absolute bottom-0 left-0  w-0 h-px group-hover:w-full bg-white transition-all duration-300 ease-in-out"></span>
            </div>
            <div className="w-[1px] h-5 max-lg:h-8 bg-white"></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// PRINCIPAL FUNCTION
function NavBarHorizotal() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const { setRoomType } = useContext(RoomTypeContext);
  const locationLink = [
    {
      name: "N&T Hotel, Ambohimahasoa | Antananarivo - Madagascar",
      url: "https://maps.app.goo.gl/qUGTjBnt3vrCY6RM9",
      icon: <MapPin size={20} />,
    },
  ];
  return (
    <div className="w-full p-5 relative max-lg:bg-white/30 max-lg:backdrop-blur max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-50">
      <AnimatePresence>
        {menuIsOpen && (
          <Motion.div
            onClick={() => setMenuIsOpen(false)}
            initial={{ opacity: 1, y: -550 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: -550 }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 z-40 w-full h-135 max-lg:h-screen bg-white/90 backdrop-blur-md"
          >
            <DisplayMenuContent
              locationLink={locationLink}
              menuIsOpen={menuIsOpen}
              setIsHover={setIsHover}
              isHover={isHover}
              isHover2={isHover2}
              setIsHover2={setIsHover2}
              setRoomType={setRoomType}
              setMenuIsOpen={setMenuIsOpen}
            />
          </Motion.div>
        )}
      </AnimatePresence>
      {/* NAVBAR HORIZONTALE ACEUIL */}
      <nav className="flex justify-between items-center">
        <div className=" max-lg:hidden">
          {/* display LOCATION */}
          {locationLink.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
        <div className="text-end px-5 flex gap-5 items-center max-lg:flex-row-reverse max-lg:justify-between max-lg:px-0 max-lg:mx-0 max-lg:w-full max-lg:h-4 ">
          <div>
            <DisplayLink
              menuIsOpen={menuIsOpen}
              setMenuIsOpen={setMenuIsOpen}
            />
          </div>
          {menuIsOpen ? (
            <Motion.div
              whileTap={{ scaleX: 1.2 }}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="cursor-pointer z-50"
            >
              <X color="gray" size={40} />
            </Motion.div>
          ) : (
            <Motion.div
              whileTap={{ scaleX: 1.2 }}
              onClick={() => setMenuIsOpen(true)}
              className="cursor-pointer z-50"
            >
              <DisplayMenuLogo />
            </Motion.div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBarHorizotal;
