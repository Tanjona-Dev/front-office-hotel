import jus from "../../assets/image/jus.jpg";
import coco from "../../assets/image/coco.jpg";
import wiski from "../../assets/image/wiski.jpg";
import coctails from "../../assets/image/coctails.jpg";
import BarLounge from "../../assets/image/beachBar.jpg";

export default function Bar() {
  return (
    <>
      <div className="bg-[#D2A76F] min-h-[250px] w-full relative mb-100">
        <div className="w-full pt-40 max-sm:pt-20">
          <h1 className="uppercase text-4xl max-xl:text-3xl text-black/70 text-center bg-amber-50 py-5">
            Notre coin lounge
          </h1>
        </div>

        <div className="flex flex-row max-md:flex-col mx-40 max-xl:mx-10 max-sm:mx-5 pt-20 max-sm:pt-10">
          <div className="relative p-8 bg-amber-50 flex-1 min-h-[300px] lg:min-h-full">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-3xl max-sm:text-2xl max-sm:text-center font-bold text-amber-800 mb-4">
                N&T Beach Lounge
              </h1>
              <p className="text-lg max-sm:text-sm max-sm:text-center leading-relaxed text-gray-700">
                Découvrez le lounge-bar du N&T Hotel, situé en bord de plage, un
                cadre idyllique entre ciel et mer. Détendez-vous dans une
                ambiance décontractée, bercée par la brise marine et une
                sélection musicale raffinée. L'endroit parfait pour vos
                pauses-déjeuners ensoleillées ou vos soirées after-beach.
              </p>
            </div>
          </div>

          <div className="flex-1 w-full lg:h-[400px]">
            <img
              src={BarLounge}
              alt="Bar & Lounge"
              className="w-full h-full max-md:h-100 max-lg:h-100 object-cover"
            />
          </div>
        </div>

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
        </div>
      </div>
    </>
  );
}
