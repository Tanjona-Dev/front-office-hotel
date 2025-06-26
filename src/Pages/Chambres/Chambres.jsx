import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Footer from "../../components/Footer";
import { ArrowBigDownDash } from "lucide-react";
import LogoHotel from "../../assets/Logo/N_TLogo.png";
import LuxuryRoom from "../../assets/Rooms/LuxuryRoom2.jpeg";
import FamilyRoom from "../../assets/Rooms/FamillyRoom2.jpeg";
import BalconImg from "../../assets/Rooms/LuxuryBalcon2.jpeg";
import videoRomm from "../../assets/Rooms/roomVideoCloche.mp4";
import { RoomTypeContext } from "../../components/utils/context";
import { motion as Motion, AnimatePresence } from "framer-motion";
import SupperiorRoomImg from "../../assets/Rooms/FamillyRoom1.jpeg";

function DisplayReservationSection() {
  return (
    <div className="flex mx-75 relative h-auto mb-5">
      <div className="flex flex-col items-center justify-center gap-6 w-150 bg-gradient-to-r from-white to-amber-50">
        <h1 className="text-3xl  text-black/70">Réservez votre chambre</h1>
        <p>
          Nos chambres ont été imaginées pour satisfaire tous vos désirs.
          Alliant comfort et tranquillité, vous y trouverez un lieu de repos et
          de détente idéal loin du monde mouvementé extérieur.
        </p>
        <Link to={`/reservation`} className="bg-green-500 px-5 py-1 rounded-xl shadow-xl text-white cursor-pointer hover:scale-x-105 transition-all">
          RESERVER
        </Link>
      </div>
      <div className="w-1/2 bg-amber-50 py-2 flex justify-center">
        <img src={BalconImg} alt="" />
      </div>
    </div>
  );
}

function DisplayTypeOfRoom({ setIndexHover, indexHover, setRoomType }) {
  const typeOfRoom = [
    {
      id: 1,
      type: "CHAMBRE SUPERIEUR",
      photo: SupperiorRoomImg,
      stateType: "SUPERIEUR",
    },
    {
      id: 2,
      type: "CHAMBRE LUXURY",
      photo: LuxuryRoom,
      stateType: "LUXE",
    },
    {
      id: 3,
      type: "CHAMBRE FAMILIALE",
      photo: FamilyRoom,
      stateType: "FAMILIALE",
    },
  ];
  return (
    <div id="type" className="mt-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl text-black/70 flex justify-center">
          NOS TYPES DE CHAMBRES
        </h1>
        <p className="flex justify-center text-lg">
          Découvrez nos différents types de chambres, chacune conçue pour offrir
          un confort optimal et une expérience unique.
        </p>
      </div>
      {/* TYPE DE CHAMBRES */}

      <div className="flex justify-center items-center max-lg:flex-col absolute left-0 right-0 mx-25 max-lg:mx-0 gap-4 mt-10">
        {typeOfRoom.map((room, index) => {
          return (
            <Link
              to={`/room-type`}
              key={`${room.id}`}
              onMouseEnter={() => setIndexHover(index)}
              className="w-1/3 max-lg:w-full bg-amber-50 p-4 flex flex-col gap-3 justify-center items-center relative shadow-xl cursor-pointer hover:shadow-2xl hover:brightness-105"
              onClick={() => setRoomType(room.stateType)}
            >
              <h1 className="text-xl">{room.type}</h1>
              {indexHover === index && (
                <AnimatePresence>
                  <Motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-14 left-0 flex justify-center right-0 z-10 "
                  >
                    <h1 className="bg-green-500 w-full text-white text-center py-2 cursor-pointer shadow-md">
                      DÉCOUVRIR
                    </h1>
                  </Motion.div>
                </AnimatePresence>
              )}
              <img
                src={room.photo}
                alt="room-superior"
                className="w-130 h-100"
              />
            </Link>
          );
        })}
      </div>

      <div className="mt-140">
        <DisplayReservationSection />
      </div>
    </div>
  );
}

export default function ChambreType() {
  const [indexHover, setIndexHover] = useState(null);
  const { setRoomType } = useContext(RoomTypeContext);

  const footerLink = [
    {
      name: "L'HOTEL",
    },
    {
      name: "CHAMBRE",
    },
    {
      name: "RESTAURANT",
    },
    {
      name: "LA CANOPEE",
    },
    {
      name: "OXYGEN",
    },
    {
      name: "LE MAEVANA",
    },
    {
      name: "RESERVATION",
    },
    {
      name: "CONTACT",
    },
  ];
  return (
    <div>
      <div className="relative h-screen w-full overflow-x-hidden shadow-xl shadow-amber-50">
        {/* Vidéo d'arrière-plan */}
        <div className="absolute inset-0">
          <video
            src={videoRomm}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>

        {/* Logo en haut */}
        <div className="absolute top-[2vh] w-full max-lg:top-[10vh]">
          <img
            src={LogoHotel}
            alt="Logo de l'hôtel"
            className="w-45 h-45 max-lg:w-25 max-lg:h-25 mx-auto mb-4"
          />
        </div>

        <h1 className="absolute shadow-5xl top-[22vh] left-0 right-0 text-4xl text-black/70 text-center bg-amber-50 py-5">
          NOS CHAMBRES
        </h1>

        <div className="absolute top-[35vh] left-0 right-0 flex justify-center max-lg:flex-wrap  shadow-5xl">
          <div className="w-full max-w-6xl flex max-lg:flex-col max-lg:items-center max-lg:gap-8">
            <div className="w-1/2 max-lg:w-full p-6 bg-amber-50 flex flex-col justify-center gap-8">
              <h1 className="text-2xl font-bold text-center">DESCRIPTION</h1>
              <p className="text-lg">
                Découvrez nos chambres spacieuses et confortables avec une vue
                imprenable sur la ville. Chaque chambre est équipée de tout le
                nécessaire pour un séjour agréable, y compris la climatisation,
                le Wi-Fi gratuit et une télévision à écran plat.
              </p>
              <a href="#type">
                <button className="text-black border bg-amber-100 rounded-full py-2 hover:scale-y-105 cursor-pointer hover:bg-amber-200 hover:shadow  transition-all">
                  DECOUVRIR NOS TYPES DE CHAMBRES
                </button>
              </a>
            </div>

            <div className=" max-lg:w-full w-180 flex justify-center items-center bg-amber-50 p-6">
              <img
                src="chambre1.jpeg"
                alt="Chambre d'hôtel"
                className="w-210 max-w-xl h-120 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* BOUNCE */}
        <div className="animate-bounce absolute text-amber-50 left-0 right-0 flex justify-center bottom-0 max-sm:hidden ">
          <ArrowBigDownDash />
        </div>
      </div>
      {/* TYPE DE CHAMBRE */}
      <DisplayTypeOfRoom
        setIndexHover={setIndexHover}
        indexHover={indexHover}
        setRoomType={setRoomType}
      />
      <div className="mt-20">
        <Footer liens={footerLink} />
      </div>
    </div>
  );
}
