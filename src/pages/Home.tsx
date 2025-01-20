import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPhotos } from "../api/api";
import MasonryGrid from "../components/MasonryGrid";
import SearchBar from "../components/SearchBar";
import { Photo } from "../types";

const Home: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const buttonCN =
    "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors";
  const searchbarWrapperCN = "sticky top-0 z-10 bg-white p-4 shadow-md";
  const buttonWrapperCN = "flex justify-center mt-8 mb-4";

  useEffect(() => {
    const loadPhotos = async () => {
      const fetchedPhotos = await fetchPhotos(query, page, 20);
      setPhotos((prev) =>
        page === 1 ? fetchedPhotos : [...prev, ...fetchedPhotos]
      );
    };
    loadPhotos();
  }, [query, page]);

  const handlePhotoClick = (photo: Photo) => {
    navigate(`/photo/${photo.id}`, { state: { photo } });
  };

  const handleSearch = (newQuery: string) => {
    setPage(1);
    setQuery(newQuery);
  };

  return (
    <div className="min-h-screen">
      <div className={searchbarWrapperCN}>
        <SearchBar query={query} onSearch={handleSearch} />
      </div>
      <div className="p-4">
        <MasonryGrid photos={photos} onPhotoClick={handlePhotoClick} />
        <div className={buttonWrapperCN}>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className={buttonCN}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
