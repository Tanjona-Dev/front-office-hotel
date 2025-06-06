import { ArrowDown } from "lucide-react";
import Bar from "../../assets/image/bar.png";
import SPA from "../../assets/image/spa.png";
import { motion as Motion } from "framer-motion";
import Chambre from "../../assets/image/hotel.png";
import home1 from "../../assets/image/BgLogin1.jpeg";
import Restaurent from "../../assets/image/restaurant.png";
import NTLogo from "../../assets/image/N_TLogo-removebg-preview.png";

function Home() {
  const decouvrHotel = [
    { name: "Chambre", path: "/", logo: <img src={Chambre} /> },
    { name: "Restaurant", path: "/", logo: <img src={Restaurent} /> },
    { name: "Bar", path: "/", logo: <img src={Bar} /> },
    { name: "Spa", path: "/", logo: <img src={SPA} /> },
  ];
  return (
    <>
      <div className="space-y-40">
        <div className="relative  overflow-hidden">
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

        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-teal-100 p-10 rounded-2xl">
          <div className="flex">
            {decouvrHotel.map((dHotel, index) => (
              <Motion.li
                key={dHotel.id || index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1,
                  delay: index * 0.5,
                  ease: "easeOut",
                }}
                className={`list-none px-20 ${
                  index !== 0 ? "border-l-5 border-teal-800" : ""
                }`}
              >
                <Motion.button
                  className="w-40 h-auto cursor-pointer flex flex-col gap-y-5 items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl">{dHotel.logo}</span>
                  <span className="font-bold text-2xl text-teal-900 uppercase tracking-wide">
                    {dHotel.name}
                  </span>
                </Motion.button>
              </Motion.li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
