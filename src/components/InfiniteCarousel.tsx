import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import useImageFetcher from "../hooks/useImageFetcher";
import CarouselItem from "./CarouselItem";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { VIRTUAL_ITEM_COUNT, IMAGE_COUNT } from "../utils/const";

const InfiniteCarousel = () => {
  const { images, loading, error } = useImageFetcher(IMAGE_COUNT);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: VIRTUAL_ITEM_COUNT,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 300,
    horizontal: true,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useHorizontalScroll({ scrollContainerRef });
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Loading images...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-500">
        Failed to load images. Please try again later.
      </div>
    );
  }

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-64 md:h-96 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing flex scroll-smooth"
      style={{
        overflow: "hidden",
        scrollBehavior: "smooth",
        WebkitOverflowScrolling: "touch",
      }}>
      <div
        className="relative w-full h-full"
        style={{
          width: `${virtualizer.getTotalSize()}px`,
        }}>
        {virtualItems.map((virtualItem) => (
          <CarouselItem
            key={virtualItem.key}
            virtualItem={virtualItem}
            images={images}
            virtualizer={virtualizer}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
