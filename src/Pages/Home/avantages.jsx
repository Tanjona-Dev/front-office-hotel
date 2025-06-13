import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion as Motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Bath, CoffeeIcon, ParkingCircle, Wifi } from "lucide-react";

function Avantage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-teal-900 text-white flex flex-col gap-12 py-5">
      <div className="text-center">
        <h1 className="text-4xl mx-auto max-md:text-center">
          Confort et prestations incluses
        </h1>
        <div className="bg-white/50 w-[50%] h-0.5 my-2 ml-120 max-lg:hidden "></div>
      </div>

      <Motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {/* Service 1 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <Wifi />
          </span>
          <p className="mt-2 text-lg">Wifi gratuit</p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <CoffeeIcon />
          </span>
          <p className="mt-2 text-lg">Petit-déjeuner inclus</p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <ParkingCircle />
          </span>
          <p className="mt-2 text-lg">Parking gratuit</p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center">
          <span className="text-4xl">
            <Bath />
          </span>
          <p className="mt-2 text-lg">Spa & bien-être</p>
        </div>
      </Motion.div>
      <div className="grid grid-cols-4 xl:gap-12 max-md:grid-cols-2 mx-auto max-sm:px-5 max-sm:grid-cols-1 max-sm:gap-5">
        <Motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="space-y-4"
        >
          <h1 className="font-bold text-3xl max-sm:font-semibold max-md:text-2xl max-md:text-center">
            Loisirs & Activités
          </h1>
          <ul className="space-y-3">
            <li>✔Location de paddle, kayak ou snorkeling</li>
            <li>✔Excursions en bateau ou plongée organisées </li>
            <li>✔Massages et spa avec vue mer</li>
            <li>✔Soirées animées (musique, feux de camp, etc.)</li>
            <li>✔Transats et parasols gratuits</li>
          </ul>
        </Motion.div>
        <Motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h1 className="font-bold text-3xl max-sm:font-semibold max-md:text-2xl max-md:text-center">
            Restauration & Services
          </h1>
          <ul className="space-y-3">
            <li>✔Petit-déjeuner inclus / buffet en bord de mer</li>
            <li>✔Restaurant local avec vue océan </li>
            <li>✔Bar/lounge avec cocktails tropicaux</li>
            <li>✔Room service</li>
            <li>✔Cuisine locale et internationale</li>
          </ul>
        </Motion.div>

        <Motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className={cn("space-y-4 max-sm:hidden ", isOpen && "max-sm:block")}
        >
          <h1 className="font-bold text-3xl max-sm:font-semibold max-md:text-2xl max-md:text-center">
            {" "}
            Offres & Avantages
          </h1>
          <ul className="space-y-3">
            <li>✔Offres spéciales pour les réservations directes</li>
            <li>✔Tarifs réduits hors saison</li>
            <li>✔Séjour offert pour les enfants de moins de X ans</li>
            <li>✔Remise pour long séjour</li>
            <li>✔Cadeau de bienvenue (cocktail, panier local…)</li>
          </ul>
        </Motion.div>

        <Motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className={cn("space-y-4 max-sm:hidden ", isOpen && "max-sm:block")}
        >
          <h1 className="font-bold text-3xl max-sm:font-semibold max-md:text-2xl max-md:text-center">
            Localisation & Expérience
          </h1>
          <ul className="space-y-3">
            <li>✔Accès direct à la plage (pas besoin de voiture ou navette)</li>
            <li>✔Vue mer depuis les chambres</li>
            <li>✔Couchers de soleil spectaculaires</li>
            <li>✔Quartier calme et sécurisé en bord de mer</li>
            <li>✔Plage privée ou peu fréquentée(cocktail, panier local…)</li>
          </ul>
        </Motion.div>
        <Motion.div className="sm:hidden m-auto">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Fermer" : "En savoir plus"}
          </Button>
        </Motion.div>
      </div>
    </div>
  );
}
export default Avantage;
