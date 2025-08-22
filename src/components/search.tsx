"use client";
import { useEffect, useState } from 'react';

type SearchProps = {
  onSearch: (term: string) => void;
  onClearSearch?: () => void;
  onFilterByPosition: (position: string | null) => void;
};

export default function Search({ onSearch, onClearSearch, onFilterByPosition }: SearchProps) {
  const [query, setQuery] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSearch(query);
    // Implement search logic here
  };

  const handleClearSearch = () => {
    setQuery('');
    onClearSearch?.();
  };

  // Reflect selection changes to parent after local state updates to avoid cross-component update warnings
  useEffect(() => {
    onFilterByPosition(selectedPosition);
  }, [selectedPosition, onFilterByPosition]);

  // Ensure only one position is selected at a time; clicking the same option again clears it
  const togglePosition = (position: string) => {
    setSelectedPosition((prev) => (prev === position ? null : position));
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

      <div className="flex space-x-4 ml-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedPosition === 'RB'}
            onChange={() => togglePosition('RB')}
          />
          <span className="ml-2 text-gray-700">RB</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedPosition === 'WR'}
            onChange={() => togglePosition('WR')}
          />
          <span className="ml-2 text-gray-700">WR</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedPosition === 'K'}
            onChange={() => togglePosition('K')}
          />
          <span className="ml-2 text-gray-700">K</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedPosition === 'QB'}
            onChange={() => togglePosition('QB')}
          />
          <span className="ml-2 text-gray-700">QB</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedPosition === 'TE'}
            onChange={() => togglePosition('TE')}
          />
          <span className="ml-2 text-gray-700">TE</span>
        </label>
      </div>
    </div>
  );
}
