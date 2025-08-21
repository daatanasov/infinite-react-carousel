import { useState, useEffect } from "react";
import { BASE_URL_PAGINATION } from "../utils/const";
import type { Image } from "../types/types";

const useImageFetcher = (count: number) => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL_PAGINATION}?page=1&limit=${count}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setImages(
          data.map((img: Image) => ({
            id: img.id,
            url: img.download_url,
            width: img.width,
            height: img.height,
          }))
        );
      } catch (e) {
        console.error("Failed to fetch images:", e);
        setError(e instanceof Error ? e : new Error(String(e)));
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [count]);
  return { images, loading, error };
};

export default useImageFetcher;
