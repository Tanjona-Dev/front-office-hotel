import { ArrowDown } from "lucide-react";
import { motion as Motion } from "framer-motion";
import home1 from "../../assets/image/BgLogin1.jpeg";
import NTLogo from "../../assets/image/N_TLogo-removebg-preview.png";
import Chambre from "../../assets/image/ChambreIcon.png";
import Restaurent from "../../assets/image/RestaurentIcon.png";
import Bar from "../../assets/image/BarIcon.png";
import SPA from "../../assets/image/SpaIcon.png";

function Home() {
  const decouvrHotel = [
    { name: "Chambre", path: "/", logo: <img src={Chambre} /> },
    { name: "Restaurent", path: "/", logo: <img src={Restaurent} /> },
    { name: "Bar", path: "/", logo: <img src={Bar} /> },
    { name: "SPA", path: "/", logo: <img src={SPA} /> },
  ];
  return (
    <>
      <div>
        <div className="relative overflow-hidden">
          <Motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={home1} alt="home.image" className="block w-full h-180" />
          </Motion.div>
          <Motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.3,
            }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src={NTLogo}
              className="w-30 md:w-50 lg:w-80 h-auto drop-shadow-lg"
              alt="Logo N&T"
            />
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 1,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-teal-900 font-bold text-5xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pt-20">
              Bienvenue au N&T Hotel
            </h1>
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-2 text-2xl md:text-xl text-teal-900 font-medium"
            >
              Votre séjour d'exception
            </Motion.p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 2,
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center animate-bounce"
          >
            <p className="text-teal-900 uppercase font-bold">Découvrir</p>
            <div className="inline-flex border-2 text-teal-900 p-3 rounded-full mt-5 animate-bounce">
              <ArrowDown size={30} className="text-teal-900" />
            </div>
          </Motion.div>
        </div>

        <div className="flex ">
          {decouvrHotel.map((dHotel, index) => (
            <li key={index} className="list-none">
              <button className="w-20 h-20">
                <span>{dHotel.logo}</span>
                <span> {dHotel.name}</span>
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
