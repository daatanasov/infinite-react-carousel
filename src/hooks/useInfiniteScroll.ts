import { useCallback, useEffect, useRef, useTransition } from "react";
import type {
  UseInfiniteScrollProps,
  UseInfiniteScrollReturn,
} from "../types/types";

export const useInfiniteScroll = ({
  scrollContainerRef,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  threshold = 0.75,
}: UseInfiniteScrollProps): UseInfiniteScrollReturn => {
  const isRequestInProgress = useRef<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleScroll = useCallback(async () => {
    const container = scrollContainerRef.current;
    if (
      !container ||
      isRequestInProgress.current ||
      !hasNextPage ||
      isFetchingNextPage
    ) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const scrollPercentage = (scrollLeft + clientWidth) / scrollWidth;

    if (scrollPercentage >= threshold) {
      isRequestInProgress.current = true;
      startTransition(async () => {
        try {
          await fetchNextPage();
        } finally {
          setTimeout(() => {
            isRequestInProgress.current = false;
          }, 200);
        }
      });
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, threshold]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isPending, isRequestInProgress };
};
