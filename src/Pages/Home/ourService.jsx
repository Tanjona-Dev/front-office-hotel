import { motion as Motion } from "framer-motion";
import Service from "../../assets/image/Service1.jpg";
import ServiceSpa from "../../assets/image/Service_Spa.jpg";
import ServiceChambre from "../../assets/image/Service_Chambre.jpg";
import ServiceTransport from "../../assets/image/Service_Transport.jpg";
import ServiceBlanchisserie from "../../assets/image/Service_Blanchisserie.jpg";

export default function OurServices() {
  return (
    <>
      <div className="relative mb-100">
        <div className="relative">
          <img
            src={Service}
            alt="Background services"
            className="block w-full h-screen object-cover"
          />

          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
            <Motion.h1
              initial={{ scaleX: 0, scaleY: 0, opacity: 0, originX: 0.5 }}
              whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl text-white max-sm:text-3xl"
            >
              Our Services
            </Motion.h1>
          </div>

          <div className="absolute -bottom-20 w-full px-8 max-xl:px-2">
            <div className="grid grid-cols-4 
               max-sm:grid-cols-1 max-sm:mx-[8%]
               max-md:grid-cols-2 max-md:ml-[10%]
               max-lg:grid-cols-2 max-lg:ml-[8%]
               max-xl:grid-cols-4 max-xl:ml-0
               gap-4 max-w-7xl mx-auto 
               max-xl:translate-y-12
               max-sm:translate-y-300">
              <Motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="bg-white w-70 h-auto max-xl:w-63 max-lg:w-80 max-md:w-63 max-sm:w-80 text-center border-2 border-amber-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={ServiceChambre}
                  alt="Service de chambre"
                  className="w-full h-50 object-cover mb-4"
                />
                <h2 className="text-2xl uppercase font-bold text-amber-700 mb-2">
                  Service de chambre
                </h2>
                <p className="px-2">
                  Livraison de repas, boissons, petit-déjeuner ou articles
                  divers directement en chambre.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="bg-white w-70 h-auto max-xl:w-63 max-lg:w-80 max-md:w-63 max-sm:w-80 text-center border-2 border-amber-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={ServiceBlanchisserie}
                  alt="Service de chambre"
                  className="w-full h-50 object-cover mb-4"
                />
                <h2 className="text-2xl uppercase font-bold text-amber-700 mb-2">
                  Blanchisserie et repassage
                </h2>
                <p className="px-2">
                  Prise en charge du linge des clients : lavage, séchage,
                  repassage.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="bg-white w-70 h-auto max-xl:w-63 max-lg:w-80 max-md:w-63 max-sm:w-80 text-center border-2 border-amber-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={ServiceSpa}
                  alt="Service de chambre"
                  className="w-full h-50 object-cover mb-4"
                />
                <h2 className="text-2xl uppercase font-bold text-amber-700 mb-2">
                  Spa et bien-être
                </h2>
                <p className="px-2">
                  Soins corporels, massages, sauna, hammam, jacuzzi.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="bg-white w-70 h-auto max-xl:w-63 max-lg:w-80 max-md:w-63 max-sm:w-80 text-center border-2 border-amber-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={ServiceTransport}
                  alt="Service de chambre"
                  className="w-full h-50 object-cover mb-4"
                />
                <h2 className="text-2xl uppercase font-bold text-amber-700 mb-2">
                  Navette ou transport aéroportuaire
                </h2>
                <p className="px-2">
                  Service de transfert depuis/vers l’aéroport ou d’autres
                  destinations locales.
                </p>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
