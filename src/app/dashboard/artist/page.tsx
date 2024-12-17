"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchArtist } from "@/hooks/fetchArtist";

const Artist = () => {
	const router = useRouter();
	const { artists } = fetchArtist();

	// State to manage the selected genre
	const [selectedGenre, setSelectedGenre] = useState<string>("All");

	// Handle genre filter
	const handleGenreFilter = (genre: string) => {
		setSelectedGenre(genre);
	};

	// Filter artists based on selected genre
	const filteredArtists =
		selectedGenre === "All"
			? artists
			: artists.filter((artist) => artist.genre === selectedGenre);

	// Navigate to artist's page
	const handleClick = (artistId: string) => {
		router.push(`/dashboard/artist/${artistId}`);
	};	

	return (
		<>
			<div className="text-white">
				<div className="flex gap-4 text-sm flex-wrap">
					{["All", "pop", "Christian", "hip-hop", "Rock music", "R&B music", "Electronic music", "Country music"].map(
						(genre) => (
							<button
								key={genre}
								className={`border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full ${
									selectedGenre === genre ? "bg-pink-600" : ""
								}`}
								onClick={() => handleGenreFilter(genre)}
							>
								{genre}
							</button>
						),
					)}
				</div>
			</div>
			<div className="grid md:grid-cols-4 grid-cols-2 w-full gap-6 mt-10">
				{filteredArtists.length > 0 ? (
					filteredArtists.map((artist, index) => (
						<div
							key={index}
							onClick={() => handleClick(artist.id)}
							className="cursor-pointer"
						>
							<div className="rounded-lg shadow-lg flex items-center flex-col overflow-hidden">
								<div className="rounded-full">
									<img
										src={artist.profilePicture.replace(
											"ipfs://",
											`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
										)}
										alt={artist.fullName}
										className="md:w-40 w-20 rounded-full md:h-40 h-20 object-cover"
									/>
								</div>
								<div className="p-4 pt-2 md:text-center text-left">
									<p className="text-sm text-gray-400">{artist.fullName}</p>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="text-center text-white">No artists found.</div>
				)}
			</div>
		</>
	);
};

export default Artist;
