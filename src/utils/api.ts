import type { GetImagesResponse, Image } from "../types/types";
import { BASE_URL_PAGINATION } from "./const";
import { parseLinkHeader } from "./helpers";

export const fetchImages = async ({
  page = 1,
  limit = 10,
}): Promise<GetImagesResponse> => {
  const response = await fetch(
    `${BASE_URL_PAGINATION}?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  const data: Image[] = await response.json();

  const linkHeader = response.headers.get("Link");
  const links = parseLinkHeader(linkHeader);
  const nextUrl = links["next"] || null;

  return {
    images: data,
    nextPage: page + 1,
    hasNextPage: Boolean(nextUrl),
    currentPage: page,
  };
};
