import { VariableSizeList as List } from "react-window";
import type { ColumnType } from "../types/types";
import { columnWidths, getItemSize } from "../utils/helpers";
import { useEffect, useRef, useState } from "react";

const Column = ({ index, style }: ColumnType) => {
  const width = columnWidths[index];
  const height = 200;

  return (
    <div
      className="transform hover:scale-105 transition-transform duration-300 p-2"
      style={{
        ...style,
        boxSizing: "border-box",
      }}>
      <img
        src={`https://picsum.photos/id/${index + 1}/${Math.floor(width - 16)}/${
          height - 40
        }.webp`}
        decoding="async"
        alt={`Random image ${index + 1}`}
        className="object-cover rounded-lg shadow"
        style={{
          width: "100%",
          height: height - 40,
        }}
        loading="lazy"
      />
      <span className="mt-2 text-xs text-gray-500 text-center">
        Image {index + 1}
      </span>
    </div>
  );
};

const VirtualCarousel = () => {
  const [containerWidth, setContainerWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="p-[20px] overflow-y-hidden overflow-x-hidden"
      ref={containerRef}>
      <h2 className="mb-[20px]">Virtual List with react-window</h2>
      <List
        height={containerWidth < 640 ? 220 : 260}
        itemCount={1000}
        itemSize={getItemSize}
        className="overflow-y-hidden!"
        layout="horizontal"
        width={containerWidth}>
        {Column}
      </List>
    </div>
  );
};

export default VirtualCarousel;
