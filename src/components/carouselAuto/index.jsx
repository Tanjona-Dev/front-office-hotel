import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function AutoScrollImage({ tableauImage }) {
  return (
    <div>
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
              <img
                src={items}
                alt="chambres models"
                className="rounded shadow w-200 max-sm:ml-7 max-sm:pl-0 max-lg:w-[90%] h-155 max-sm:max-w-85 max-sm:h-80 max-sm:mx-auto max-sm:rounded"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
