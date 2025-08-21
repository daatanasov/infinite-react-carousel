import { useCallback, useEffect } from "react";
import type { UseHorizontalScrollProps } from "../types/types";

export const useHorizontalScroll = ({
  scrollContainerRef,
}: UseHorizontalScrollProps): void => {
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    },
    [scrollContainerRef]
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let startX = 0;
    let scrollLeftStart = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX;
      scrollLeftStart = container.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaX = e.touches[0].pageX - startX;
      container.scrollLeft = scrollLeftStart - deltaX;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);
};
