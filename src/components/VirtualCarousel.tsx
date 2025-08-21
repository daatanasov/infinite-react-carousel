import { VariableSizeList as List } from "react-window";
import type { ColumnType } from "../types/types";
import { columnWidths, getItemSize } from "../utils/helpers";

const Column = ({ index, style }: ColumnType) => {
  const width = columnWidths[index];
  const height = 200;

  return (
    <div
      className="flex flex-col items-center p-[8px]"
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
        style={{
          width: "100%",
          height: height - 40,
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        loading="lazy"
      />
      <span className="mt-2 text-xs text-gray-500 text-center">
        Image {index + 1}
      </span>
    </div>
  );
};

const VirtualCarousel = () => (
  <div className="p-[20px]">
    <h2 className="mb-[20px]">Virtual List with react-window</h2>
    <List
      height={250}
      itemCount={1000}
      itemSize={getItemSize}
      layout="horizontal"
      width={800}>
      {Column}
    </List>
  </div>
);

export default VirtualCarousel;
