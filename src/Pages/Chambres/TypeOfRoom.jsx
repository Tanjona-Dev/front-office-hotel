import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Check } from "lucide-react";
import LogoHotel from "../../assets/image/N_TLogo.png";
import LuxuryRoom from "../../assets/Rooms/LuxuryRoom2.jpeg";
import FamilyRoom from "../../assets/Rooms/FamillyRoom2.jpeg";
import balconImg from "../../assets/Rooms/BalconFamilly1.jpeg";
import bathFamImg from "../../assets/Rooms/BathFamillyRoom.jpg";
import { RoomTypeContext } from "../../components/utils/context";
import SupperiorRoomImg from "../../assets/Rooms/FamillyRoom1.jpeg";

function TypeOfRoom() {
  const { roomType } = useContext(RoomTypeContext);
  const typeOfRoom = [
    {
      id: 1,
      type: "CHAMBRE SUPERIEUR",
      photo: SupperiorRoomImg,
      photo1: SupperiorRoomImg,
      stateType: "SUPERIEUR",
      description:
        "Découvrez notre Chambre Supérieure, un espace élégant et fonctionnel conçu pour allier confort moderne et tranquillité. Idéale pour les voyageurs en quête d’un séjour haut de gamme sans compromis.",
      confort: [
        "Lit double queen size (160x200 cm) + 2 lits simples (90x190 cm)",
        "Espace généreux (25-30 m²) pour circuler confortablement",
        "Climatisation individuelle et chauffage ajustable",
        "Isolation phonique pour un sommeil paisible",
      ],
      equipement: [
        "Coin salon avec canapé convertible et table basse",
        "Écran plat HD (chaînes enfants + Netflix)",
        "Mini-fridge (boissons fraîches, collations)",
        "Coffre-fort et bureau pour ordinateur",
      ],
      service: [
        "Douche à l'italienne + baignoire (option)",
        "Produits d'accueil bio (shampoing, gel douche enfants)",
        "Sèche-cheveux et peignoirs moelleux",
        "Service ménage quotidien inclus",
      ],
      securite: ["Prises sécurisées", "Porte connectée (accès par badge)"],
    },
    {
      id: 2,
      type: "CHAMBRE LUXURY",
      photo: LuxuryRoom,
      photo1: LuxuryRoom,
      stateType: "LUXE",
      description:
        "Plongez dans un havre de sophistication où chaque détail a été pensé pour votre bien-être. Notre Chambre Luxe allie design contemporain, technologies haut de gamme et services exclusifs pour une expérience hôtelière d'exception.",
      confort: [
        "Lit double queen size (160x200 cm) + 2 lits simples (90x190 cm)",
        "Espace généreux (25-30 m²) pour circuler confortablement",
        "Climatisation individuelle et chauffage ajustable",
        "Isolation phonique pour un sommeil paisible",
      ],
      equipement: [
        "Coin salon avec canapé convertible et table basse",
        "Écran plat HD (chaînes enfants + Netflix)",
        "Mini-fridge (boissons fraîches, collations)",
        "Coffre-fort et bureau pour ordinateur",
      ],
      service: [
        "Douche à l'italienne + baignoire (option)",
        "Produits d'accueil bio (shampoing, gel douche enfants)",
        "Sèche-cheveux et peignoirs moelleux",
        "Service ménage quotidien inclus",
      ],
      securite: ["Prises sécurisées", "Porte connectée (accès par badge)"],
    },

    {
      id: 3,
      type: "CHAMBRE FAMILIALE",
      photo: [FamilyRoom, balconImg, bathFamImg],
      photo1: FamilyRoom,
      balcon: balconImg,
      bathFamily: bathFamImg,
      stateType: "FAMILIALE",
      description:
        "Notre chambre familiale allie espace et convivialité pour des vacances en famille réussies. Avec son lit queen et ses deux lits simples, elle accueille jusqu'à 2 adultes et 3 enfants. Profitez d'un coin salon spacieux, d'une salle de bain équipée et de services dédiés aux petits (lit bébé, jouets). Parfait pour se ressourcer après une journée de visite !",
      confort: [
        "Lit double queen size (160x200 cm) + 2 lits simples (90x190 cm)",
        "Espace généreux (25-30 m²) pour circuler confortablement",
        "Climatisation individuelle et chauffage ajustable",
        "Isolation phonique pour un sommeil paisible",
      ],
      equipement: [
        "Coin salon avec canapé convertible et table basse",
        "Écran plat HD (chaînes enfants + Netflix)",
        "Mini-fridge (boissons fraîches, collations)",
        "Coffre-fort et bureau pour ordinateur",
      ],
      service: [
        "Douche à l'italienne + baignoire (option)",
        "Produits d'accueil bio (shampoing, gel douche enfants)",
        "Sèche-cheveux et peignoirs moelleux",
        "Service ménage quotidien inclus",
      ],
      securite: ["Prises sécurisées", "Porte connectée (accès par badge)"],
    },
  ];
  return (
    <div>
      <div className="flex justify-center bg-amber-900 shadow-2xl">
        <Link to={`/`} className="z-55">
          <img src={LogoHotel} alt="Logo-hotel" className="w-30 h-30" />
        </Link>
      </div>
      <h1 className="flex justify-center text-4xl mt-8">
        DETAIL DE LA CHAMBRE
      </h1>
      <div className="w-full flex justify-center gap-5 mt-8">
        <div className="flex justify-center w-150 h-150 overflow-hidden shadow-lg">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            {typeOfRoom.map((photo, index) => {
              return (
                photo.stateType === roomType && (
                  <CarouselContent key={`${index}`}>
                    {Array.isArray(photo.photo) ? (
                      photo.photo.map((phot) => (
                        <CarouselItem>
                          <img src={phot} className={`w-150 h-150 shadow-lg`} />
                        </CarouselItem>
                      ))
                    ) : (
                      <CarouselItem>
                        <img
                          src={photo.photo}
                          className={`w-150 h-150 shadow-lg`}
                        />
                      </CarouselItem>
                    )}
                  </CarouselContent>
                )
              );
            })}
          </Carousel>
        </div>
        <div className="flex flex-col gap-5">
          {typeOfRoom.map((room, index) => {
            return (
              roomType === room.stateType && (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <img
                    src={room.balcon}
                    alt=""
                    className="w-64 h-64  shadow-lg"
                  />
                  <img
                    src={room.bathFamily}
                    alt=""
                    className="w-64 h-64 shadow-lg"
                  />
                  <img
                    src={room.photo1}
                    alt=""
                    className="w-64 h-64 shadow-lg"
                  />
                </div>
              )
            );
          })}
          <div className="flex gap-2 justify-center items-center p-3 text-white bg-green-500 rounded-xl group cursor-pointer shadow-lg ">
            <button className="cursor-pointer">RESERVER CETTE CHAMBRE</button>
            <div className="group-hover:ml-5 transition-all duration-300">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
        <a href="#details">
          <button className="bg-green-500 text-white rounded-full h-10 p-1 my-1 px-3 cursor-pointer shadow hover:shadow-lg">
            Voir details
          </button>
        </a>
      </div>
      <div className=" text-black/80 my-5">
        <div className=" py-5">
          {typeOfRoom.map((room) => {
            return (
              room.stateType === roomType && (
                <div key={room.id} className="flex flex-col">
                  <div className="bg-amber-900 text-white text-center">
                    <p className="text-lg my-5">{room.description}</p>
                  </div>
                  <div
                    id="details"
                    className="bg-amber-50 flex justify-around py-10"
                  >
                    <div>
                      <h1 className="text-xl">Équipements Premium</h1>
                      <ul className=" my-5 space-y-3">
                        {room.equipement.map((equipement, index) => (
                          <li key={index} className="flex gap-1">
                            <Check size={12} color="green" /> {equipement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-xl">Capacité & Confort</h1>
                      <ul className=" my-5 space-y-3">
                        {room.confort.map((confort, index) => (
                          <li key={index} className="flex gap-1">
                            {" "}
                            <Check size={12} color="green" /> {confort}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-xl">Salle de bain & Services</h1>
                      <ul className=" my-5 space-y-3">
                        {room.service.map((confort, index) => (
                          <li key={index} className="flex gap-1">
                            {" "}
                            <Check size={12} color="green" /> {confort}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TypeOfRoom;
