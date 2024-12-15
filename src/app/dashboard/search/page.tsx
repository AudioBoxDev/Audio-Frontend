"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import { Heart, Play } from "lucide-react";
import { PlayingIndicator } from "@/components/PlayingIndicator";
import { useMusicPlayer } from "@/context/MusicPlayer";
import SearchAlbum from "@/components/SearchAlbum";
import { fetchArtist } from "@/hooks/fetchArtist";
import { useRouter } from "next/navigation";

const Search = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get("query") || ""; // Retrieve the search query from the URL

	const { playSong, setSongs } = useMusicPlayer();
	const { artists } = fetchArtist();
	const router = useRouter();

	const handleClick = (artistId: string) => {
		router.push(`/dashboard/artist/${artistId}`);
	};
	const musicList = [
		{
			id: 1,
			title: "Relax and Unwind",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
			artist: "Lily Moonshadow",
			duration: "20:24",
		},
		{
			id: 2,
			title: "Relax and Unwind",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
			artist: "Ruby Riversong",
			duration: "15:15",
		},
		{
			id: 3,
			title: "Relax and Unwind",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
			artist: "Finn Oceanwood",
			duration: "54:32",
		},
		{
			id: 4,
			title: "Relax and Unwind",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
			artist: "Finn Oceanwood",
			duration: "54:32",
		},
		{
			id: 5,
			title: "Relax and Unwind",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
			artist: "Finn Oceanwood",
			duration: "54:32",
		},
	];

	const [filteredMusic, setFilteredMusic] = useState(musicList);
	const [filteredArtists, setFilteredArtists] = useState(artists);
	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hoveredRow, setHoveredRow] = useState<number | null>(null);

	// Filter logic based on the query parameter
	useEffect(() => {
		const filteredMusicList = musicList.filter(
			(song) =>
				song.title.toLowerCase().includes(query.toLowerCase()) ||
				song.artist.toLowerCase().includes(query.toLowerCase()),
		);
		setFilteredMusic(filteredMusicList);

		const filteredArtistList = artists.filter(
			(artist) =>
				artist.fullName.toLowerCase().includes(query.toLowerCase()) ||
				artist.genre.toLowerCase().includes(query.toLowerCase()),
		);
		setFilteredArtists(filteredArtistList);
	}, [query]);

	useEffect(() => {
		setSongs(filteredMusic);
	}, [filteredMusic, setSongs]);

	const handlePlaySong = (index: number) => {
		if (index === currentSongIndex && isPlaying) {
			setIsPlaying(false);
			playSong(index);
		} else {
			setCurrentSongIndex(index);
			setIsPlaying(true);
			playSong(index);
		}
	};

	const renderSongNumber = (index: number) => {
		if (hoveredRow === index) {
			return <Play size={15} className="text-white" />;
		}
		if (currentSongIndex === index && isPlaying) {
			return <PlayingIndicator />;
		}
		return index + 1;
	};

	return (
		<Tabs.Root defaultValue="music" className="text-white p-6 font-sans">
       <h2 className="text-lg mb-4">Search Results for "{query}"</h2>
			<Tabs.List className="flex space-x-4 mb-4">
      <Tabs.Trigger
					value="artist"
					className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] hover:text-white rounded-full data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:bg-[#B6195B] text-sm"
				>
					Artist
				</Tabs.Trigger>
				<Tabs.Trigger
					value="music"
					className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] hover:text-white rounded-full data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:bg-[#B6195B] text-sm"
				>
					Music
				</Tabs.Trigger>
			
				<Tabs.Trigger
					value="album"
					className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] hover:text-white rounded-full data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:bg-[#B6195B] text-sm"
				>
					Album
				</Tabs.Trigger>
				<Tabs.Trigger
					value="playlist"
					className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] hover:text-white rounded-full data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:bg-[#B6195B] text-sm"
				>
					Playlist
				</Tabs.Trigger>
			</Tabs.List>

			<Tabs.Content value="music" className="mt-4">
				<table className="w-full min-w-full text-[#666C6C] border-separate border-spacing-y-2">
					<thead>
						<tr className="text-base text-white font-medium">
							<th className="p-3 text-left">#</th>
							<th className="p-3 text-left">Title</th>
							<th className="p-3 text-left">Artist</th>
							<th className="p-3 text-left"></th>
							<th className="p-3 text-left">Duration</th>
						</tr>
					</thead>
					<tbody>
						{filteredMusic.map((item, index) => (
							<tr
								key={item.id}
								className={`hover:bg-[#0E0B0E] cursor-pointer transition-colors ${
									currentSongIndex === index ? "bg-[#0E0B0E] bg-opacity-50" : ""
								}`}
								onMouseEnter={() => setHoveredRow(index)}
								onMouseLeave={() => setHoveredRow(null)}
								onClick={() => handlePlaySong(index)}
							>
								<td className="p-3 w-10">
									<div className="flex items-center justify-center w-6">
										{renderSongNumber(index)}
									</div>
								</td>
								<td className="p-3 font-medium text-left">{item.title}</td>
								<td className="p-3 font-medium text-left">{item.artist}</td>
								<td className="p-3 font-medium text-center">
									<Heart size={20} />
								</td>
								<td className="p-3 font-medium text-left">{item.duration}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Tabs.Content>

			<Tabs.Content value="artist" className="mt-10">
				<div className="grid grid-cols-4 gap-4">
					{filteredArtists.map((artist) => (
						<div
							key={artist.id}
							onClick={() => handleClick(artist.id)}
							className=" cursor-pointer p-2 "
						>
							<div className=" rounded-lg shadow-lg flex items-center flex-col overflow-hidden">
								<div className="rounded-full">
									<img
										src={artist.profilePicture.replace(
											"ipfs://",
											`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
										)}
										width={180}
										height={200}
										alt={artist.fullName}
										className="w-40  border border-white rounded-full h-40 object-cover"
									/>
								</div>
								<div className="p-4 pt-2 md:text-center  text-left">
									<p className="text-sm text-gray-400">{artist.fullName}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</Tabs.Content>
			<Tabs.Content value="album" className="mt-10">
				<SearchAlbum />
			</Tabs.Content>
			<Tabs.Content value="playlist" className="mt-4">
				<p className="text-white text-2xl text-center">Coming Soon</p>
			</Tabs.Content>
		</Tabs.Root>
	);
};

export default Search;
