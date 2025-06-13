import { useState } from "react";
import { X } from "lucide-react";
import { motion as Motion } from "framer-motion";
import room1 from "../../assets/image/room1.jpg";
import room2 from "../../assets/image/room2.jpg";
import room3 from "../../assets/image/room3.jpg";
import room4 from "../../assets/image/room4.jpg";
import room5 from "../../assets/image/room5.jpeg";
import room6 from "../../assets/image/room6.jpeg";
import room7 from "../../assets/image/room7.jpeg";
import room8 from "../../assets/image/room8.jpeg";
import room10 from "../../assets/image/room10.jpeg";
import room11 from "../../assets/image/room11.jpeg";
import { Button } from "../../components/ui/button";
import { AutoScrollImage } from "../../components/carouselAuto";

function TypeDeChambre() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(null);

  const tableauImage = [room1, room2, room3, room4];
  const tableauImage2 = [room5, room6, room7, room8, room10, room11];
  return (
    <div className="overflow-x-hidden">
      {modalIsOpen ? (
        <div className="fixed z-50 inset-0 w-full h-screen flex flex-col justify-center items-center  gap-2 bg-black/90">
          <div onClick={() => setModalIsOpen(false)}>
            <X className="text-white absolute right-5 top-3 cursor-pointer hover:text-teal-700" />
          </div>
          <div className="mt-8">
            {indexImg !== null && (
              <img
                src={tableauImage2[indexImg]}
                alt=""
                className="rounded max-h-[80vh]"
              />
            )}
          </div>
          <div className=" flex gap-3 mb-10">
            {tableauImage2.map((image, index) => (
              <div key={index} className="">
                <img
                  src={image}
                  alt="chambres d'hotel"
                  className="cursor-pointer rounded w-30 h-30 hover:scale-102 transition duration-200"
                  onClick={() => setIndexImg(index)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="px-4 mx-auto max-w-7xl flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start w-full">
          <div className="w-full lg:flex-1 lg:max-w-2xl">
            <Motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
              <h1 className="font-bold text-3xl sm:text-4xl mb-3">
                Nos Chambres
              </h1>
              <Motion.p className="text-base sm:text-lg text-black/75">
                Découvrez nos chambres élégantes avec vue mer, confort moderne
                et ambiance apaisante. Chaque détail a été pensé pour faire de
                votre séjour un moment inoubliable.
              </Motion.p>
              <div className="mt-4 sm:mt-6">
                <Button className="w-full sm:w-auto">Voir plus</Button>
              </div>
            </Motion.div>
            <Motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {tableauImage2.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square shadow-2xl overflow-hidden rounded hover:overflow-hidden"
                >
                  <img
                    src={image}
                    onClick={() => (setModalIsOpen(true), setIndexImg(index))}
                    alt="chambre d'hotel"
                    className="cursor-pointer w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </Motion.div>
          </div>
          <Motion.div
            initial={{ x: 150, opacity: 0, y: 150, scaleY: 0 }}
            whileInView={{ x: 0, opacity: 1, y: 0, scaleY: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:flex-1 lg:max-w-2xl mt-8 lg:mt-0"
          >
            <AutoScrollImage tableauImage={tableauImage} />
          </Motion.div>
        </div>
      </div>
    </div>
  );
}
export default TypeDeChambre;
