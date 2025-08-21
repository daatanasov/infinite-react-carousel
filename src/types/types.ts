import type { RefObject } from "react";

export interface Image {
  id: string;
  width: number;
  height: number;
  author: string;
  url: string;
  download_url: string;
}

export interface GetImagesResponse {
  images: Image[];
  nextPage: number;
  hasNextPage: boolean;
  currentPage: number;
}

export interface UseHorizontalScrollProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export interface UseInfiniteScrollProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<any>;
  threshold?: number;
}

export interface UseInfiniteScrollReturn {
  isPending: boolean;
  isRequestInProgress: RefObject<boolean>;
}
type Key = number | string | bigint;
export interface VirtualItem {
  end: number;
  index: number;
  key: Key;
  lane: number;
  size: number;
  start: number;
}

export type ColumnType = {
  index: number;
  style: React.CSSProperties;
};

export type CarouselItemProps = {
  virtualItem: VirtualItem;
  images: Image[];
  virtualizer: { measureElement: (element: HTMLElement | null) => void };
};
