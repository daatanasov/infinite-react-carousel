import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import useImageFetcher from "../hooks/useImageFetcher";
import CarouselItem from "./CarouselItem";
import { VIRTUAL_ITEM_COUNT, IMAGE_COUNT } from "../utils/const";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

const InfiniteCarousel = () => {
  const { images, loading, error } = useImageFetcher(IMAGE_COUNT);
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: VIRTUAL_ITEM_COUNT,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    horizontal: true,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();
  useHorizontalScroll({ scrollContainerRef: parentRef });
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
      ref={parentRef}
      className="w-full h-64 md:h-96 overflow-x-auto cursor-grab active:cursor-grabbing flex relative snap-x snap-mandatory scroll-smooth">
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
