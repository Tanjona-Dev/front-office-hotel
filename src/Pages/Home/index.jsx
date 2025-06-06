import { motion as Motion } from "framer-motion";
import home1 from "../../assets/image/BgLogin1.jpeg";
import NTLogo from "../../assets/image/N_TLogo-removebg-preview.png";

function Home() {
  return (
    <>
      <div>
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
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.6,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-950 font-bold text-5xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold pt-20">
              Bienvenue au N&T Hotel
            </h1>
          </Motion.div>
        </div>
      </div>
    </>
  );
}
export default Home;
