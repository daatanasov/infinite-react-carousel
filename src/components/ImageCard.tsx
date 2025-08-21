import type { Image } from "../types/types";

interface ImageCardProps {
  image: Image;
}

export default function ImageCard({ image }: ImageCardProps) {
  const getImageUrl = () => {
    const width = window.innerWidth;
    // maybe  use srcset and sizes for better performance
    if (width < 640) {
      return `https://picsum.photos/id/${image.id}/300/450.webp`;
    } else if (width < 1024) {
      return `https://picsum.photos/id/${image.id}/350/500.webp`;
    } else {
      return `https://picsum.photos/id/${image.id}/400/600.webp`;
    }
  };

  return (
    <div
      className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden 
                    hover:shadow-lg transition-all duration-300 
                    hover:scale-[1.02] active:scale-[0.98]
                    touch-manipulation">
      <div className="relative w-full h-full">
        <img
          src={getImageUrl()}
          alt={`Photo by ${image.author}`}
          className="w-full h-full object-cover transition-opacity duration-500
                     select-none pointer-events-none"
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{
            scrollSnapAlign: "center",
          }}
        />
      </div>
    </div>
  );
}
