import OurAsset from "./ourAsset";
import Avantage from "./avantages";
import OurServices from "./ourService";
import Testimonial from "./testimonial";
import { ArrowDown } from "lucide-react";
import TypeDeChambre from "./typeDeChambre";
import Bar from "../../assets/image/bar.png";
import SPA from "../../assets/image/spa.png";
import { motion as Motion } from "framer-motion";
import home1 from "../../assets/image/Login.jpg";
import Chambre from "../../assets/image/hotel.png";
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
      <div>
        <div className="relative overflow-hidden">
          <Motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img
              src={home1}
              alt="home.image"
              className="block w-full h-screen"
            />
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
            className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src={NTLogo}
              className=" md:w-50 max-md:w-50 lh-auto drop-shadow-lg mt-15 pb-1"
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
            className="absolute top-1/3 max-sm:top-1/2 max-sm:w-90 max-lg:top-3/5 lg:top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-5xl "
          >
            <h1 className="text-3xl md:text-5xl lg:text-5xl max-lg:w-[125%] lg:w-[110%] font-bold text-white ">
              Bienvenue au N&T Hotel
            </h1>
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-2 text-2xl md:text-xl max-md:text-xl text-center text-white font-medium italic"
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
            className="absolute bottom-50 max-sm:bottom-10 max-lg:-bottom-15 lg:bottom-20  xl:bottom-40 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center animate-bounce"
          >
            <p className="text-white text-sm font-bold uppercase">Découvrir</p>
            <div className="inline-flex border-5 border-white p-2 rounded-full mt-5 animate-bounce">
              <ArrowDown size={20} className="text-white" />
            </div>
          </Motion.div>
        </div>

        <Motion.div
          className="relative mx-auto w-[65%] max-xl: max-xl:mb-10 max-xl:my-10 max-2xl:-mt-40 -my-25 max-sm:my-10 text-center bg-teal-100/10 backdrop-blur-xs border-5 p-10 max-sm:p-2 rounded-2xl mb-15"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center gap-y-6 max-sm:gap-y-1 md:gap-0">
            {decouvrHotel.map((dHotel, index) => (
              <Motion.li
                key={dHotel.id || index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.5,
                  ease: "easeOut",
                }}
                className={`list-none px-20 2xl:px-auto max-xl:border-none ${
                  index !== 0
                    ? "border-l-5 border-teal-800 max-sm:border-l-0 max-2xl:border-l-0 max-sm:border-t-5 max-sm:border-teal-800 max-sm:pt-4 max-sm:mt-4"
                    : ""
                }`}
              >
                <Motion.button
                  className="w-25 h-auto max-sm:w-15 md:w-15 cursor-pointer flex flex-col gap-y-5 items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-3xl">{dHotel.logo}</span>
                  <span className="font-bold text-2xl max-sm:text-xl text-teal-900 uppercase tracking-wide">
                    {dHotel.name}
                  </span>
                </Motion.button>
              </Motion.li>
            ))}
          </div>
        </Motion.div>

        {/* TYPE DE CHAMBRE NASA */}
        <div className="space-y-12">
          <div>
            <TypeDeChambre />
          </div>
          <div>
            <Avantage />
          </div>
        </div>
        <div>
          <OurServices />
        </div>
        <div>
          <OurAsset />
        </div>
        <div>
          <Testimonial />
        </div>
      </div>
    </>
  );
}
export default Home;
