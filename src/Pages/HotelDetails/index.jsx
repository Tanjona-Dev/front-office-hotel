import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Link } from "react-router-dom";
import WIFI from "../../assets/Logo/WIFI.png";
import Autoplay from "embla-carousel-autoplay";
import snack from "../../assets/image/snack.jpg";
// import { motion as Motion } from "framer-motion";
import breakfast from "../../assets/image/breakFast.jpg";
import parking from "../../assets/image/beachParking.jpg";
import testimonialImg from "../../assets/image/sunset.jpg";
import NTLogomini from "../../assets/Logo/N_TLogo_mini.png";
import airCondition from "../../assets/image/airCondition.jpg";
import apercu1 from "../../assets/Temoignage-img/apercu1.jpeg";
import apercu2 from "../../assets/Temoignage-img/apercu2.jpeg";
import apercu3 from "../../assets/Temoignage-img/apercu3.jpeg";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Footer from "../../components/Footer";

export default function HotelDetails() {
  return (
    <>
      <div className="bg-[#D2A76F] min-h-[250px] w-full relative">
        <div className="w-full pt-40">
          <h1 className="uppercase text-4xl max-xl:text-3xl text-black/70 text-center bg-amber-50 py-5">
            À propos de l’hôtel
          </h1>
          <div className="flex flex-col lg:flex-row mx-40 max-xl:mx-15 max-lg:mx-5 my-20">
            <div className="bg-amber-50 w-auto h-auto p-15 max-xl:p-10 max-sm:p-5">
              <h1 className="pb-6 uppercase text-3xl text-black/70 md:text-4xl max-sm:text-3xl font-semibold mb-6 max-xl:mb-2">
                N & T Hotel & Spa
              </h1>
              <p className="text-lg leading-relaxed">
                N & T Hotel est un établissement de prestige niché en bord de
                mer, idéal pour ceux qui souhaitent allier évasion, confort et
                raffinement. Sa situation exceptionnelle à proximité de la plage
                en fait un lieu parfait pour se ressourcer, en couple ou en
                famille. Profitez de l’élégance de nos chambres et de toutes les
                prestations haut de gamme mises à votre disposition, telles que
                notre spa, notre piscine ou notre espace bien-être. Le N & T
                Hotel vous propose également un restaurant raffiné aux saveurs
                internationales, fusion et locales, pour une véritable
                expérience culinaire face à l’océan. Installez-vous sur notre
                bar terrasse et laissez-vous envoûter par la vue imprenable sur
                le littoral, dans une ambiance chic et apaisante.
              </p>
            </div>
            <div>
              <DisplayPhotos />
            </div>
          </div>

          <div className="relative h-[500px]">
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  { image: testimonialImg, speed: -50 },
                  {
                    children: (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-amber-50/40 text-2xl p-4 rounded-lg text-center px-100 max-xl:px-50 max-lg:px-20 max-sm:px-2 py-10">
                          <h1 className="font-bold text-white text-4xl">
                            Le N & T Hotel & Spa
                          </h1>
                          <p className="uppercase text-3xl text-[#D2A76F] border-b-2 border-b-[#D2A76F]">
                            Notre historique
                          </p>
                          <div className="flex justify-center">
                            <img
                              src={NTLogomini}
                              alt="NT_Logo"
                              className="w-20 mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    ),
                    speed: 0,
                  },
                ]}
                className="w-full h-full"
              />
            </ParallaxProvider>
          </div>
        </div>

        <div className="bg-amber-50 py-10 text-center">
          <Link
            to="/reservation"
            className="bg-[#D2A76F] uppercase hover:bg-[#DFC57B] text-white font-medium py-5 px-10 rounded-full inline-block transition-colors duration-300"
          >
            Réservez votre chambre
          </Link>
        </div>

        <div className="text-center py-10">
          <h1 className="uppercase text-3xl max-sm:text-xl text-black/70">
            Tout pour votre confort, à l’hôtel et aux alentours
          </h1>

          <div className="flex grid grid-cols-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4 p-10 ">
            {[
              { logo: WIFI, text: "Connexion Wi-Fi gratuite" },
              { logo: WIFI, text: "Service de petit-déjeuner" },
              { logo: WIFI, text: "Parking réservé aux clients" },
              { logo: WIFI, text: "Bar-restaurant sur place" },
              { logo: WIFI, text: "Chambres climatisées" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-center p-4 border-2 border-black"
              >
                <img
                  src={service.logo}
                  alt={service.text}
                  className="w-15 h-15 object-contain"
                />
                <span className="text-xl font-medium text-black/80">
                  {service.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 p-10">
          <ImageGallery />
        </div>

        <div className="text-2xl py-10 px-100 max-sm:px-5 max-md:px-20 max-lg:px-30 max-xl:px-50 rounded-lg text-center">
          <h1 className="font-bold text-white text-4xl ">Actus de l'hôtel</h1>
          <p className="uppercase text-3xl max-sm:text-base text-white">
            Restez connectés à notre actualité
          </p>
          <div className="flex justify-center">
            <img
              src={NTLogomini}
              alt="NT_Logo"
              className="w-20 max-sm:w-15 mt-2"
            />
          </div>
          <p className="text-white text-xl max-sm:text-sm">
            Inscrivez votre adresse e-mail pour rester informé(e) de nos
            actualités.
          </p>

          <form className="relative mt-2">
            <div className="flex">
              <input
                type="email"
                className="bg-amber-50 py-3 px-5  max-sm:text-sm rounded-l-full focus:ring-2 focus:ring-amber-300 w-full"
                placeholder="Votre e-mail"
                required
              />
              <button
                type="submit"
                className="bg-[#DFC57B] hover:bg-orange-300 font-bold text-black/80 max-sm:text-sm py-3 px-5 rounded-r-full transition-colors duration-200 cursor-pointer"
              >
                OK
              </button>
            </div>
          </form>
        </div>
        <div className="mt-20">{/* <Footer  /> */}</div>
      </div>
    </>
  );
}

function DisplayPhotos() {
  const photoArrow = [
    {
      img: apercu1,
    },
    {
      img: apercu2,
    },
    {
      img: apercu3,
    },
  ];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {photoArrow.map((photo, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col gap-1 overflow-hidden ">
              <img
                src={photo.img}
                alt={photo.alt || "Hôtel N&T"}
                className="h-130 w-300 object-cover object-center"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const tableImage = [parking, snack, breakfast, airCondition];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Miniatures */}
      {tableImage.map((image, index) => (
        <div
          key={index}
          className="cursor-pointer relative group overflow-hidden"
          onClick={() => openModal(image)}
        >
          <img
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-full h-[200px] object-cover shadow-md transition-all duration-300 group-hover:brightness-50"
          />

          {/* Texte qui apparaît au survol */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-medium text-lg bg-black/50 px-3 py-1 rounded-lg">
              Agrandir l'image
            </span>
          </div>
        </div>
      ))}

      {/* Modale pour l'image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[90vh] object-contain"
            />
            {/* <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/30 text-white p-2 rounded-full hover:bg-white/50"
            >
              ✕
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//   } from "@/components/ui/carousel";
//   import { useState } from "react";
//   import { Link } from "react-router-dom";
//   import WIFI from "../../assets/Logo/WIFI.png";
//   import Autoplay from "embla-carousel-autoplay";
//   import snack from "../../assets/image/snack.jpg";
//   // import { motion as Motion } from "framer-motion";
//   import breakfast from "../../assets/image/breakFast.jpg";
//   import parking from "../../assets/image/beachParking.jpg";
//   import testimonialImg from "../../assets/image/sunset.jpg";
//   import NTLogomini from "../../assets/Logo/N_TLogo_mini.png";
//   import airCondition from "../../assets/image/airCondition.jpg";
//   import apercu1 from "../../assets/Temoignage-img/apercu1.jpeg";
//   import apercu2 from "../../assets/Temoignage-img/apercu2.jpeg";
//   import apercu3 from "../../assets/Temoignage-img/apercu3.jpeg";
//   import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

// const HotelDetails = () => {
//   const services = [
//     { logo: WIFI, text: "Connexion Wi-Fi gratuite" },
//     { logo: WIFI, text: "Service de petit-déjeuner" },
//     { logo: WIFI, text: "Parking réservé aux clients" },
//     { logo: WIFI, text: "Bar-restaurant sur place" },
//     { logo: WIFI, text: "Chambres climatisées" },
//   ];

//   return (
//     <div className="bg-[#D2A76F] min-h-[250px] w-full relative">
//       {/* Hotel About Section */}
//       <section className="w-full pt-40">
//         <h1 className="uppercase text-4xl text-black/70 text-center bg-amber-50 py-5">
//           À propos de l'hôtel
//         </h1>

//         <div className="flex flex-col lg:flex-row mx-4 lg:mx-40 my-20 gap-10">
//           <HotelDescription />
//           <DisplayPhotos photos={[apercu1, apercu2, apercu3]} />
//         </div>

//         <ParallaxSection />
//       </section>

//       {/* Reservation CTA */}
//       <ReservationCTA />

//       {/* Services Section */}
//       <ServicesSection services={services} />

//       {/* Image Gallery */}
//       <div className="bg-amber-50 p-10">
//         <ImageGallery images={[parking, snack, breakfast, airCondition]} />
//       </div>

//       {/* Newsletter Section */}
//       <NewsletterSection />
//     </div>
//   );
// };

// // Extracted Components for better organization
// const HotelDescription = () => (
//   <div className="bg-amber-50 p-8 lg:p-12 rounded-lg shadow-md flex-1">
//     <h1 className="pb-6 uppercase text-3xl md:text-4xl font-semibold border-b border-amber-200 mb-6">
//       N & T Hotel & Spa
//     </h1>
//     <p className="text-lg leading-relaxed">
//       N & T Hotel est un établissement de prestige niché en bord de mer,
//       idéal pour ceux qui souhaitent allier évasion, confort et raffinement.
//       Sa situation exceptionnelle à proximité de la plage en fait un lieu
//       parfait pour se ressourcer, en couple ou en famille.
//     </p>
//   </div>
// );

// const DisplayPhotos = ({ photos }) => (
//   <Carousel
//     plugins={[Autoplay({ delay: 2000 })]}
//     className="flex-1"
//   >
//     <CarouselContent>
//       {photos.map((photo, index) => (
//         <CarouselItem key={index}>
//           <div className="overflow-hidden rounded-lg">
//             <img
//               src={photo}
//               alt={`Hotel preview ${index + 1}`}
//               className="h-[300px] w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         </CarouselItem>
//       ))}
//     </CarouselContent>
//   </Carousel>
// );

// const ParallaxSection = () => (
//   <div className="relative h-[500px]">
//     <ParallaxProvider>
//       <ParallaxBanner
//         layers={[
//           { image: testimonialImg, speed: -50 },
//           {
//             children: <ParallaxContent />,
//             speed: 0,
//           },
//         ]}
//         className="w-full h-full"
//       />
//     </ParallaxProvider>
//   </div>
// );

// const ParallaxContent = () => (
//   <div className="absolute inset-0 flex items-center justify-center">
//     <div className="bg-amber-50/40 text-2xl p-4 rounded-lg text-center px-10 py-10 max-w-2xl">
//       <h1 className="font-bold text-white text-4xl">Le N & T Hotel & Spa</h1>
//       <p className="uppercase text-3xl text-[#D2A76F] border-b-2 border-b-[#D2A76F]">
//         Notre historique
//       </p>
//       <div className="flex justify-center">
//         <img src={NTLogomini} alt="NT Logo" className="w-20 mt-2" />
//       </div>
//     </div>
//   </div>
// );

// const ReservationCTA = () => (
//   <div className="bg-amber-50 py-10 text-center">
//     <Link
//       to="/reservation"
//       className="bg-[#D2A76F] uppercase hover:bg-[#DFC57B] text-white font-medium py-5 px-10 rounded-full inline-block transition-colors duration-300"
//     >
//       Réservez votre chambre
//     </Link>
//   </div>
// );

// const ServicesSection = ({ services }) => (
//   <section className="text-center py-10">
//     <h1 className="uppercase text-3xl text-black/70 mb-10">
//       Tout pour votre confort, à l'hôtel et aux alentours
//     </h1>
//     <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 md:p-10">
//       {services.map((service, index) => (
//         <ServiceCard key={index} service={service} />
//       ))}
//     </div>
//   </section>
// );

// const ServiceCard = ({ service }) => (
//   <div className="flex flex-col items-center justify-center p-4 border-2 border-black rounded-lg bg-white">
//     <img
//       src={service.logo}
//       alt={service.text}
//       className="w-15 h-15 object-contain mb-2"
//     />
//     <span className="text-xl font-medium text-black/80 text-center">
//       {service.text}
//     </span>
//   </div>
// );

// const ImageGallery = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {images.map((image, index) => (
//           <GalleryImage
//             key={index}
//             image={image}
//             index={index}
//             onClick={() => setSelectedImage(image)}
//           />
//         ))}
//       </div>

//       {selectedImage && (
//         <ImageModal
//           image={selectedImage}
//           onClose={() => setSelectedImage(null)}
//         />
//       )}
//     </>
//   );
// };

// const GalleryImage = ({ image, index, onClick }) => (
//   <div
//     className="cursor-pointer relative group overflow-hidden rounded-lg"
//     onClick={onClick}
//   >
//     <img
//       src={image}
//       alt={`Gallery item ${index + 1}`}
//       className="w-full h-[200px] object-cover shadow-md transition-all duration-300 group-hover:brightness-50"
//     />
//     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <span className="text-white font-medium text-lg bg-black/50 px-3 py-1 rounded-lg">
//         Agrandir l'image
//       </span>
//     </div>
//   </div>
// );

// const ImageModal = ({ image, onClose }) => (
//   <div
//     className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//     onClick={onClose}
//   >
//     <div className="relative max-w-4xl w-full">
//       <img
//         src={image}
//         alt="Enlarged view"
//         className="w-full max-h-[90vh] object-contain"
//       />
//     </div>
//   </div>
// );

// const NewsletterSection = () => (
//   <section className="text-2xl py-10 px-4 md:px-10 rounded-lg text-center bg-[#D2A76F]">
//     <h1 className="font-bold text-white text-4xl mb-4">Actus de l'hôtel</h1>
//     <p className="uppercase text-3xl text-white mb-6">
//       Restez connectés à notre actualité
//     </p>
//     <div className="flex justify-center mb-6">
//       <img src={NTLogomini} alt="NT Logo" className="w-20" />
//     </div>
//     <p className="text-white text-xl mb-8">
//       Inscrivez votre adresse e-mail pour rester informé(e) de nos actualités.
//     </p>
//     <NewsletterForm />
//   </section>
// );

// const NewsletterForm = () => (
//   <form className="relative mt-2 max-w-md mx-auto">
//     <div className="flex">
//       <input
//         type="email"
//         className="bg-amber-50 py-3 px-5 rounded-l-full focus:ring-2 focus:ring-amber-300 w-full"
//         placeholder="Votre e-mail"
//         required
//       />
//       <button
//         type="submit"
//         className="bg-[#DFC57B] hover:bg-orange-300 text-black/80 py-3 px-5 rounded-r-full transition-colors duration-200 cursor-pointer"
//       >
//         OK
//       </button>
//     </div>
//   </form>
// );

// export default HotelDetails;
