"use client";

import { FiSearch } from "react-icons/fi";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="mb-6 flex items-center gap-3 bg-white shadow-md rounded-2xl px-4 py-3 border">
      <FiSearch className="text-gray-400 text-xl" />

      <input
        type="text"
        placeholder="Search books..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none"
      />
    </div>
  );
};

export default SearchBar;
