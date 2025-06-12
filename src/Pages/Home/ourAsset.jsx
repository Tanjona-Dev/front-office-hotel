import { motion as Motion } from "framer-motion";

export default function OurAsset() {
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-30 max-sm:gap-y-10 max-lg:gap-x-10 max-sm:px-4 max-lg:px-10 px-40 pb-100">
        <Motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <h1 className="font-semibold text-4xl mb-10">
            Un cadre idéal pour affaires et détente
          </h1>
          <p className="text-xl">
            Le <span className="font-semibold">N&T Hôtel</span> est un
            établissement haut de gamme situé en plein cœur de la ville. Grâce à
            sa proximité avec les quartiers d’affaires, les sites touristiques
            et les lieux de vie locale, il constitue un lieu parfait pour allier
            travail et découverte. Nos chambres élégantes et confortables vous
            accueillent pour un séjour agréable, tandis que vous pourrez
            profiter de nombreux services tels que notre spa relaxant ou notre
            salle de fitness entièrement équipée.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <h1 className="font-semibold text-4xl mb-10 uppercase">
            Une expérience culinaire raffinée
          </h1>
          <p className="text-xl">
            Le <span className="font-semibold">N&T Hôtel</span> vous invite à
            découvrir une cuisine savoureuse et variée mêlant gastronomie
            internationale, cuisine fusion et spécialités locales.{" "}
            <p className="mt-10 font-semibold text-amber-700">
              Notre restaurant met un point d'honneur à vous offrir le meilleur
              de la restauration à Antananarivo. Prenez un moment de détente au
              bar terrasse et laissez-vous séduire par une des plus belles vues
              panoramiques sur la capitale.
            </p>
          </p>
        </Motion.div>
      </div>
    </>
  );
}
