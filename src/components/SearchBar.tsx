import React, { useCallback } from "react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  const containerCN = "max-w-3xl mx-auto px-4 py-6";
  const inputCN =
    "w-full pl-12 pr-4 py-4 text-lg bg-gray-700 text-white dark:text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-400 border-0 rounded-2xl shadow-lg outline-none backdrop-blur-sm transition-all duration-200";

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    },
    [onSearch]
  );

  return (
    <div className={containerCN}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for amazing photos..."
          className={inputCN}
        />
      </div>
    </div>
  );
};

export default SearchBar;
