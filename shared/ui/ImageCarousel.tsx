import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/ui/carousel";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  loading?: boolean;
  className?: string;
  imageHeight: string;
  alt?: string;
}

const ImageCarousel = ({
  images,
  loading = false,
  className,
  imageHeight,
  alt,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    handleSelect();
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  if (loading) {
    return (
      <div className={cn("w-full rounded-xl overflow-hidden", className)}>
        <div className="w-full h-[20rem] bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className={cn("w-full rounded-xl overflow-hidden", className)}>
        <div className="w-full h-[15.1rem] lg:h-[27.9rem] bg-gray-300 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">No images available</p>
        </div>
      </div>
    );
  }

  if (!hasMultipleImages) {
    return (
      <div className={cn("w-full rounded-xl overflow-hidden", className)}>
        <img
          src={images[0]}
          alt={alt || "Image"}
          className={`w-full h-96 sm:h-96 md:h-80 object-cover rounded-lg ${imageHeight}`}
        />
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <Carousel opts={{ align: "start" }} className="relative" setApi={setApi}>
        <CarouselContent>
          {images.map((imageUrl, index) => (
            <CarouselItem key={index} className="basis-full">
              <img
                src={imageUrl}
                alt={alt || `Image ${index + 1}`}
                className={`w-full h-48 sm:h-64 md:h-80 object-cover ${imageHeight}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 bg-white" />
        <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 bg-white" />
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index
                  ? "bg-white scale-125 shadow-sm"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
