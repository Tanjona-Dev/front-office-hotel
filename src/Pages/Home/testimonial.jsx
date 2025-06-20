import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion as Motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { testimonials } from "../../datas/testimonial";
import RatingStars from "../../components/RatingEtoile";
import apercu1 from "../../assets/Temoignage-img/apercu1.jpeg";
import apercu2 from "../../assets/Temoignage-img/apercu2.jpeg";
import apercu3 from "../../assets/Temoignage-img/apercu3.jpeg";
import testimonialImg from "../../assets/Temoignage-img/temoignage.jpeg";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

function DisplayPhotos() {
  const photoArrow = [
    {
      img: apercu1,
      legend:
        "Soirée romantique au coucher de soleil - Dîner aux chandelles face à la mer",
    },
    {
      img: apercu2,
      legend: "Spa luxueux - Soin relaxant aux huiles essentielles locales",
    },
    {
      img: apercu3,
      legend: "Moment de détente à la piscine - Suite VIP avec vue panoramique",
    },
  ];
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {photoArrow.map((photo, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col gap-1">
              <img
                src={photo.img}
                className="h-[650px] w-[600px] rounded max-sm:h-[400px]"
              />
              <p className=" text-white text- text-center backdrop-blur-sm bg-white/10 rounded h-15 xl:p-3 ">
                {photo.legend}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function Testimonial() {
  return (
    <div className="relative h-[900px] max-sm:h-full w-full">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: testimonialImg, speed: -50 }]}
          className="absolute inset-0 w-full h-full"
        >
          <div className=" relative h-full w-full flex max-md:flex-col container mx-auto px-4 z-10">
            <div className="flex-1 flex flex-col gap-12 items-center justify-center p-4">
              <div className="text-center mb-6">
                <Motion.h1
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-white/90 p-5 backdrop-blur rounded-lg bg-black/30 text-3xl max-md:text-xl font-semibold"
                >
                  " Découvrez ce que nos clients disent de leur séjour – des
                  expériences authentiques et des souvenirs inoubliables. Leur
                  satisfaction est notre plus belle récompense !"
                </Motion.h1>
              </div>
              <div className="backdrop-blur bg-black/30 text-white w-full max-w-[800px] rounded-lg p-6">
                <Carousel plugins={[Autoplay({ delay: 4000 })]}>
                  <CarouselContent>
                    {testimonials.map((avis) => (
                      <CarouselItem key={avis.id}>
                        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                          <div className="flex flex-col items-center gap-2 xl:w-150">
                            <img
                              src={avis.photo}
                              alt={avis.name}
                              className="rounded-full w-16 h-16 md:w-20 md:h-20 border border-amber-900 p-1 bg-amber-900"
                            />
                            <div>
                              <h1 className="text-lg font-bold text-center md:text-left">
                                {avis.name}
                              </h1>
                              <RatingStars rating={avis.stars} />
                            </div>
                          </div>
                          <p className="text-lg italic text-center md:text-left">
                            "{avis.testimonial}"
                          </p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <Motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Button>Partager votre avis</Button>
              </Motion.div>
            </div>

            {/* Partie droite - Photos */}
            <div className="flex-1 flex items-center justify-center p-4 mb-50">
              <div className="w-full max-w-[500px] h-[400px] md:h-[500px]">
                <DisplayPhotos />
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}
export default Testimonial;
