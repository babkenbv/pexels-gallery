import { FC, useEffect, useState } from "react";
import { Photo } from "../types";

interface PhotoDetailsProps {
  photo: Photo;
  onBack: () => void;
}

const PhotoDetails: FC<PhotoDetailsProps> = ({ photo, onBack }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [optimizedSrc, setOptimizedSrc] = useState(photo.src.medium);

  const wrapperCN =
    "bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto";
  const arrowButtonCN =
    "absolute top-4 left-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group";
  const arrowSvgCN =
    "w-6 h-6 text-gray-700 group-hover:-translate-x-0.5 transition-transform";
  const loadingCN = "absolute inset-0 bg-gray-100 animate-pulse";
  const altWrapperCN = "p-8 md:p-10 space-y-6";
  const altCN = "text-2xl md:text-3xl font-bold text-gray-800";
  const dataContainerCN = "flex items-center gap-4";
  const authorWrapperCN = "flex items-center gap-2 text-gray-600";

  useEffect(() => {
    const img = new Image();
    img.src = photo.src.original;
    img.onload = () => {
      setOptimizedSrc(photo.src.original);
      setIsImageLoading(false);
    };
  }, [photo.src.original]);

  return (
    <div className={wrapperCN}>
      <div className="relative">
        <button onClick={onBack} className={arrowButtonCN}>
          <svg
            className={arrowSvgCN}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <div className="relative">
          {isImageLoading && <div className={loadingCN} />}
          <img
            src={optimizedSrc}
            alt={photo.alt}
            className={`w-full max-h-[85vh] object-contain transition-opacity duration-300 
            ${isImageLoading ? "opacity-0" : "opacity-100"}`}
            loading="eager"
            onLoad={() => setIsImageLoading(false)}
          />
        </div>
      </div>

      <div className={altWrapperCN}>
        <h2 className={altCN}>{photo.alt}</h2>

        <div className={dataContainerCN}>
          <div className={authorWrapperCN}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-medium">{photo.photographer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
