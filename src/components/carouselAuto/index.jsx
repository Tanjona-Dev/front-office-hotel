import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function AutoScrollImage({ tableauImage }) {
  return (
    <div className="w-100">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {tableauImage?.map((items, index) => (
            <CarouselItem key={index}>
              <img src={items} alt="" className="w-200 h-164" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
