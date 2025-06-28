import calmar from "../../assets/Restaurant/calmar.jpg";
import poisson from "../../assets/Restaurant/poisson.jpg";
import langouste from "../../assets/Restaurant/langouste.jpg";
import restoLoungBar from "../../assets/Logo/resto-bar-loung.png";
import BarLounge from "../../assets/Restaurant/beachRestaurant.jpg";

export default function Bar() {
  return (
    <>
      <div className="bg-[#D2A76F] min-h-[250px] w-full relative mb-100">
        <div className="w-full pt-40 max-sm:pt-20">
          <h1 className="uppercase text-4xl max-xl:text-3xl text-black/70 text-center bg-amber-50 py-5">
            Notre espace de restauration
          </h1>
        </div>

        <div className="flex flex-row max-md:flex-col mx-40 max-xl:mx-10 max-sm:mx-5 pt-20 max-sm:pt-10">
          <div className="relative p-8 bg-amber-50 flex-1 min-h-[300px] lg:min-h-full">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-3xl max-sm:text-2xl max-sm:text-center font-bold text-amber-800 mb-4">
                Restaurant
              </h1>
              <p className="text-lg max-sm:text-sm max-sm:text-center leading-relaxed text-gray-700">
                Laissez-vous guider par vos envies du moment. Le N & T Hotel
                vous propose une expérience culinaire variée, mêlant saveurs
                locales et inspirations internationales, dans un cadre raffiné
                avec vue sur la mer. Notre restaurant vous accueille tous les
                jours de 7h00 à 22h00 pour vos petits-déjeuners, déjeuners et
                dîners.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full lg:h-[400px] overflow-hidden shadow-lg">
            <img
              src={BarLounge}
              alt="Bar & Lounge"
              className="w-full h-full max-md:h-100 max-lg:h-100 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Gauche */}
        <div className="grid grid-cols-3 max-lg:flex flex-col gap-5 p-10 max-sm:px-5">
          <div className="max-lg:grid grid-cols-2 max-sm:grid-cols-1">
            <div className="pb-5 max-lg:pb-0">
              <img
                src={restoLoungBar}
                alt="restoLoungBar"
                className="w-full h-140 max-sm:h-100"
              />
            </div>
            <div className="bg-amber-50 min-h-[400px] max-lg:h-140 max-sm:h-100 p-5 flex flex-col justify-center">
              <h1 className="text-3xl max-sm:text-2xl font-bold max-sm:text-center text-amber-800 mb-4">
                Notre carte
              </h1>
              <p className="text-lg max-sm:text-sm max-sm:text-center leading-relaxed text-gray-700 ">
                Vous trouverez à coup sûr votre bonheur parmi nos spécialités de
                fruits de mer soigneusement préparées. Poissons grillés,
                crevettes sautées, langoustes fraîches… notre chef vous invite à
                découvrir une cuisine savoureuse inspirée de l’océan et des
                produits locaux. Venez éveiller vos papilles dans un cadre
                paisible, à deux pas de la plage.
              </p>
            </div>
          </div>
          {/* Centre */}

          <div className="flex flex-col max-lg:grid grid-cols-2 max-sm:grid-cols-1 items-center gap-8 max-lg:gap-5">
            <div className="w-full max-w-4xl overflow-hidden shadow-lg">
              <img
                src={langouste}
                alt="Jus frais"
                className="w-full h-100 max-lg:h-137 max-sm:h-100 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="w-full max-w-4xl overflow-hidden shadow-xl">
              <img
                src={calmar}
                alt="Cocktails colorés"
                className="w-full h-137 max-sm:h-100 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Droite */}
          <div className="max-lg:grid grid-cols-2 max-sm:grid-cols-1">
            <div className="w-full bg-amber-50 text-center mb-5 max-lg:mb-0 h-[560px] max-sm:h-100 flex flex-col justify-center p-5">
              <h1 className="uppercase text-4xl max-xl:text-3xl max-sm:text-2xl text-black/70 text-center py-5">
                Horaire d’ouverture
              </h1>
            </div>

            <div className="w-full max-w-4xl overflow-hidden shadow-lg">
              <img
                src={poisson}
                alt="Jus frais"
                className="w-full h-100 max-sm:h-100 max-lg:h-140 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* 
        <div className="flex flex-row max-md:flex-col mx-40 max-xl:mx-10 max-sm:mx-5 pb-20 max-sm:pb-10">
          <div className="grid grid-cols-2">
            {[
              { src: jus, alt: "Jus frais" },
              { src: coco, alt: "Noix de coco rafraîchissante" },
              { src: coctails, alt: "Cocktails artisanaux" },
              { src: wiski, alt: "Sélection de whiskys" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-50 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative p-8 lg:p-12 bg-amber-50 flex-1 min-h-[300px] lg:min-h-full">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-3xl max-sm:text-2xl font-bold max-sm:text-center text-amber-800 mb-4">
                Soirée festive en bord de mer
              </h1>
              <p className="text-lg max-sm:text-sm max-sm:text-center leading-relaxed text-gray-700">
                Rejoignez-nous chaque vendredi et samedi soir au N&T Hotel, pour
                des soirées animées dans une ambiance chaleureuse et festive.
                Détendez-vous autour d’un verre entre amis, au rythme de la
                musique, tout en profitant d’une vue imprenable sur l’océan et
                le sable doré.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-amber-50 text-center">
          <h1 className="uppercase text-4xl max-xl:text-3xl max-sm:text-2xl text-black/70 text-center py-5">
            Horaire d’ouverture
          </h1>
          <div className="w-full max-w-xl mx-auto px-2">
            <div className="mb-3 text-center">
              <p className="text-sm text-gray-500">Ouvert de 11:00h à 22:00h</p>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-amber-800"
                style={{
                  left: "32%",
                  width: "48%",
                }}
              ></div>
              <div className="absolute inset-0 flex">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="h-full border-r border-white"
                    style={{ width: "5%" }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>0h</span>
              <span>6h</span>
              <span className="font-bold text-amber-600">11h</span>
              <span>14h</span>
              <span>18h</span>
              <span className="font-bold text-amber-600">22h</span>
              <span>24h</span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
