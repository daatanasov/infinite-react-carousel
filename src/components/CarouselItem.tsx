import React from "react";
import type { CarouselItemProps } from "../types/types";

const CarouselItem = React.memo(
  ({ virtualItem, images, virtualizer }: CarouselItemProps) => {
    const imageIndex = virtualItem.index % images.length;
    const image = images[imageIndex];

    const aspectRatio = image ? image.height / image.width : 1;
    return (
      <div
        ref={virtualizer.measureElement}
        data-index={virtualItem.index}
        className="flex-shrink-0 h-full snap-center snap-always"
        style={{
          width: `${virtualItem.size}px`,
          transform: `translateX(${virtualItem.start}px)`,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
        }}>
        <div className="relative w-full h-full p-2">
          {image ? (
            <img
              src={image.url}
              alt={`Carousel image ${image.id}`}
              loading="lazy"
              className="object-contain w-full h-full rounded-lg shadow-md"
            />
          ) : (
            <div
              className="w-full bg-gray-200 rounded-lg animate-pulse"
              style={{ paddingTop: `${aspectRatio * 100}%` }}></div>
          )}
        </div>
      </div>
    );
  }
);

export default CarouselItem;
