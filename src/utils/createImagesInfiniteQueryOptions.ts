import { infiniteQueryOptions } from "@tanstack/react-query";
import { fetchImages } from "./api";

export default function createImagesInfiniteQueryOptions() {
  return infiniteQueryOptions({
    queryKey: ["images"],
    queryFn: ({ pageParam = 1 }) => fetchImages({ page: pageParam, limit: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined;
    },
    staleTime: 300000,
  });
}
