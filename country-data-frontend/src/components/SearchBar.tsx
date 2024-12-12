import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Pass the search query to the parent component
  };

  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md w-1/2"
      />
    </div>
  );
};

export default SearchBar;
