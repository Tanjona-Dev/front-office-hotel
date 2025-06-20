import room1 from "../../assets/Rooms/chambre1.jpeg";
import LogoHotel from "../../assets/image/N_TLogo.png";
import videoRomm from "../../assets/Rooms/roomVideoCloche.mp4";
import { ArrowBigDownDash } from "lucide-react";

export default function ChambreType() {
  return (
    <div>
      <div className="relative h-screen w-full overflow-x-hidden shadow-xl shadow-amber-50">
        {/* Vidéo d'arrière-plan */}
        <div className="absolute inset-0">
          <video
            src={videoRomm}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>

        {/* Logo en haut */}
        <div className="absolute top-[2vh] w-full max-lg:top-[10vh]">
          <img
            src={LogoHotel}
            alt="Logo de l'hôtel"
            className="w-45 h-45 max-lg:w-25 max-lg:h-25 mx-auto mb-4"
          />
        </div>

        <h1 className="absolute shadow-5xl top-[20vh] left-0 right-0 text-4xl text-black/70 text-center bg-amber-50 py-5">
          NOS CHAMBRES
        </h1>

        <div className="absolute top-[35vh] left-0 right-0 flex justify-center max-lg:flex-wrap  shadow-5xl">
          <div className="w-full max-w-6xl flex max-lg:flex-col max-lg:items-center max-lg:gap-8">
            <div className="w-1/2 max-lg:w-full p-6 bg-amber-50 flex flex-col justify-center gap-8">
              <h1 className="text-2xl font-bold text-center">DESCRIPTION</h1>
              <p className="text-lg">
                Découvrez nos chambres spacieuses et confortables avec une vue
                imprenable sur la ville. Chaque chambre est équipée de tout le
                nécessaire pour un séjour agréable, y compris la climatisation,
                le Wi-Fi gratuit et une télévision à écran plat.
              </p>
              <button className="text-black border bg-amber-100 rounded-full py-2 hover:scale-y-105 cursor-pointer hover:bg-amber-200 hover:shadow  transition-all">
                DECOUVRIR NOS TYPES DE CHAMBRES
              </button>
            </div>

            <div className=" max-lg:w-full w-180 flex justify-center items-center bg-amber-50 p-6">
              <img
                src={room1}
                alt="Chambre d'hôtel"
                className="w-210 max-w-xl h-120 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* BOUNCE */}
        <div className="animate-bounce absolute text-amber-50 left-0 right-0 flex justify-center bottom-0 max-sm:hidden ">
          <ArrowBigDownDash />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl text-black/70 flex justify-center">
            NOS TYPES DE CHAMBRES
          </h1>
          <p className="flex justify-center text-lg">
            Découvrez nos différents types de chambres, chacune conçue pour
            offrir un confort optimal et une expérience unique.
          </p>
        </div>
      </div>
    </div>
  );
}
