import OurAsset from "./ourAsset";
import Avantage from "./avantages";
import OurServices from "./ourService";
import Testimonial from "./testimonial";
import { ArrowDown } from "lucide-react";
import TypeDeChambre from "./typeDeChambre";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import home1 from "../../assets/image/Login.jpg";
import SPA from "../../assets/image/beachSpa.jpg";
import Bar from "../../assets/image/beachBar.jpg";
import NTLogo from "../../assets/image/N_TLogo.png";
import BarLogo from "../../assets/image/BAR_Logo.png";
import SpaLogo from "../../assets/image/SPA_Logo.png";
import Chambre from "../../assets/image/beachRoom.jpg";
import ChambreLogo from "../../assets/image/Chambre_Logo.png";
import Restaurant from "../../assets/image/beachRestaurant.jpg";
import RestaurantLogo from "../../assets/image/Restaurant_Logo.png";
import NavBarHorizotal from "../../components/Header/NavBarHorizotal";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative">
        <div className="relative">
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
            <div className="absolute top-0 w-full">
              <NavBarHorizotal />
            </div>
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
              className=" md:w-50 max-lg:w-40 max-md:w-40  max-sm:w-50 xl:w-70 lh-auto drop-shadow-lg mt-15 max-md:mt-30 max-lg:mt-40 pb-1"
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
            className="absolute top-2/5 max-sm:w-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-lg:translate-y-4/5 font-bold text-5xl "
          >
            <h1 className="text-3xl md:text-3xl lg:text-5xl max-lg:w-[125%] lg:w-[110%] font-bold text-white ">
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
            className="absolute bottom-55 max-sm:bottom-10 max-sm:-bottom-15 max-lg:-bottom-10 max-xl:bottom-55 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center animate-bounce"
          >
            <p className="text-white text-sm font-bold uppercase">Découvrir</p>
            <div className="inline-flex border-5 border-white p-2 max-lg:p-1 rounded-full mt-5 max-lg:mt-2 animate-bounce">
              <ArrowDown size={20} className="text-white" />
            </div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-x-10 max-xl:gap-x-5 relative -mt-60 max-md:-mt-0 max-lg:-mt-0 max-sm:-mt-0 z-10 mb-60 max-xl:mb-0 mx-20 max-xl:mx-10 max-sm:mx-5 max-sm:mb-10"
        >
          {[
            {
              title: "Chambre",
              image: Chambre,
              logo: ChambreLogo,
              path: "/ChambreType",
              text: " Découvrez le confort raffiné de notre chambre, alliant élégance, sérénité et services haut de gamme.",
            },
            {
              title: "Bar",
              image: Bar,
              logo: BarLogo,
              path: "/Bar",
              text: "Dégustez nos cocktails artisanaux dans un cadre chaleureux, au rythme de la musique malagasy et lounge.",
            },
            {
              title: "Restaurant",
              image: Restaurant,
              logo: RestaurantLogo,
              path: "/Restaurant",
              text: "  Des mets traditionnels revisités avec finesse, dans un cadre chaleureux et raffiné.",
            },
            {
              title: "Spa",
              image: SPA,
              logo: SpaLogo,
              path: "/Spa",
              text: " Laissez-vous envelopper par les soins traditionnels aux huiles naturelles locales",
            },
          ].map((item, index) => (
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
              key={index}
              onClick={() => navigate(item.path)}
              className="relative cursor-pointer bg-white/50 max-sm:bg-transparent p-5 max-xl:mb-60 max-md:mb-40 max-lg:mb-40 max-sm:mb-15"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-65 mx-auto hover:brightness-70 hover:contrast-125 transition-all duration-300 max-sm:hidden"
              />
              <div className="absolute top-1/2 max-md:top-2/5 left-1/2 transform -translate-x-1/2 max-sm:-translate-x-3/5 sm:-translate-x-1/2 -translate-y-1 flex flex-col max-sm:flex-row max-sm:gap-x-5 items-center bg-white/90 z-20 p-5 max-sm:p-0 w-[calc(100%-5rem)]">
                <img src={item.logo} alt="" className="w-30 max-sm:w-20" />
                <h1 className="uppercase mt-5 font-bold text-2xl text-[#D2A76F]">
                  {item.title}
                </h1>
                <p className="text-center opacity-80 mt-5 max-sm:hidden">
                  {item.text}
                </p>
              </div>
            </Motion.div>
          ))}
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
