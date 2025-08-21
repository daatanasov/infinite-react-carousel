import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import createImagesInfiniteQueryOptions from "../utils/createImagesInfiniteQueryOptions";
import Error from "./Error";
import LoadingMoreImages from "./LoadingMoreImages";
import EndIndicator from "./EndIndicator";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function App() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, error } =
    useInfiniteQuery(createImagesInfiniteQueryOptions());

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [itemSize, setItemSize] = useState(280);

  const images = data?.pages.flatMap((page) => page.images) ?? [];

  useEffect(() => {
    const updateItemSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemSize(Math.min(width * 0.85, 300));
      } else if (width < 1024) {
        setItemSize(320);
      } else {
        setItemSize(280);
      }
    };

    updateItemSize();
    window.addEventListener("resize", updateItemSize);
    return () => window.removeEventListener("resize", updateItemSize);
  }, []);

  const virtualizer = useVirtualizer({
    count: images.length,
    estimateSize: () => itemSize,
    getScrollElement: () => scrollContainerRef.current,
    horizontal: true,
    overscan: 3,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useHorizontalScroll({ scrollContainerRef });

  const { isPending, isRequestInProgress } = useInfiniteScroll({
    scrollContainerRef,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    threshold: 0.75,
  });

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      <p className="text-gray-600 text-xs sm:text-sm mt-1">
        {images.length} images loaded
        {!hasNextPage && images.length > 0 && " • All images loaded"}
      </p>
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4">
        <div className="w-full max-w-7xl h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-white rounded-lg sm:rounded-xl shadow-lg relative mx-auto">
          <div
            ref={scrollContainerRef}
            className="w-full h-full overflow-x-auto overflow-y-hidden 
                       cursor-grab active:cursor-grabbing"
            style={{
              overflow: "hidden",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x proximity",
            }}>
            <div
              className="relative flex flex-row h-full"
              style={{
                width: `${virtualizer.getTotalSize()}px`,
              }}>
              {virtualItems.map((vItem) => {
                const image = images[vItem.index];
                if (!image) return null;

                return (
                  <div
                    key={vItem.key}
                    style={{
                      transform: `translateX(${vItem.start}px)`,
                      width: `${vItem.size}px`,
                    }}
                    className="absolute h-full p-2 sm:p-3"
                    data-index={vItem.index}>
                    <ImageCard image={image} />
                  </div>
                );
              })}
              {(isFetchingNextPage ||
                isRequestInProgress.current ||
                isPending) && (
                <div className="absolute right-0 h-full flex items-center justify-center p-4">
                  <LoadingMoreImages />
                </div>
              )}
              {!hasNextPage && images.length > 0 && (
                <div className="absolute right-0 h-full flex items-center justify-center p-4">
                  <EndIndicator />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
