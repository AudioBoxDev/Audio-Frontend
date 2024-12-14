import React, { useState } from "react";
import { fetchArtist } from "@/hooks/fetchArtist";
import SearchArtist from "./SearchArtist";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const { artists } = fetchArtist();

  // Filter artists based on query
  const filteredArtists = artists.filter((artist) =>
    artist.fullName.toLowerCase().includes(query.toLowerCase()) || // Artist Name
    artist.genre.toLowerCase().includes(query.toLowerCase()) // Genre
  );

  return (
    <div className="flex flex-col space-y-4">
      {/* Search Input */}
      <div className="flex items-center bg-[#1D1F1F] rounded-full px-3 py-2">
        <Search className="text-gray-500 mr-2" size={16} />
        <input
          type="text"
          placeholder="Search by artists, songs, or albums"
          className="w-full rounded-full px-3 border-none focus:outline-none bg-[#1D1F1F] text-white placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Display Search Results */}
     
    </div>
  );
};

export default SearchBar;
