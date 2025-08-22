"use client";
import { useState } from 'react';

type SearchProps = {
  onSearch: (term: string) => void;
  onClearSearch?: () => void;
};

export default function Search({ onSearch, onClearSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSearch(query);
    // Implement search logic here
  };

  const handleClearSearch = () => {
    setQuery('');
    onClearSearch?.();
  };

  return (
    <div className="flex items-center justify-center mb-4 mt-4">
      <input
        className="w-64 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>

      <button className="px-4 py-2 ml-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleClearSearch}>
        Clear
      </button>
    </div>
  );
}
