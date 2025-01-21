import { useVirtualizer } from "@tanstack/react-virtual";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { Photo } from "../types";

interface MasonryGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const optimizeImageUrl = (url: string, width: number, height: number) => {
  return url.replace("?auto=compress", `?auto=compress&w=${width}&h=${height}`);
};

const MasonryGrid: FC<MasonryGridProps> = ({ photos, onPhotoClick }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState(getInitialColumns());

  const gridContainerCN = "w-full p-4";
  const rowCN =
    "absolute inset-x-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-10";
  const imgWrapperCN =
    "group relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-50";
  const imgCN =
    "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105";

  function getInitialColumns() {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1536) return 3;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => setColumns(getInitialColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const photoRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < photos.length; i += columns) {
      rows.push(photos.slice(i, i + columns));
    }
    return rows;
  }, [photos, columns]);

  const virtualizer = useVirtualizer({
    count: photoRows.length,
    getScrollElement: () => document.documentElement,
    estimateSize: () => 570,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className={gridContainerCN}>
      <div
        className="relative w-full"
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={rowCN}
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {photoRows[virtualRow.index].map((photo) => (
              <div
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className={imgWrapperCN}
              >
                <img
                  src={optimizeImageUrl(photo.src.medium, 800, 1200)}
                  srcSet={`
                    ${optimizeImageUrl(photo.src.medium, 400, 600)} 400w,
                    ${optimizeImageUrl(photo.src.medium, 800, 1200)} 800w,
                    ${optimizeImageUrl(photo.src.medium, 1200, 1800)} 1200w
                  `}
                  sizes="(max-width: 640px) 100vw, 
                         (max-width: 1024px) 50vw, 
                         (max-width: 1536px) 33.33vw, 
                         25vw"
                  alt={photo.alt}
                  loading="lazy"
                  className={imgCN}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
