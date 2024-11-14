"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {EllipsisVertical, Heart, MessageCircle, Users } from "lucide-react";
import image from "/public/images/Ellipse.png";
import { Album, Play } from "lucide-react";
import Rectangle1 from "/public/images/Rectangle1.png";
import { PlayingIndicator } from "@/components/PlayingIndicator";
import { useMusicPlayer } from "@/context/MusicPlayer";
import * as Tabs from "@radix-ui/react-tabs";

const ArtistId = () => {
	const { playSong, setSongs } = useMusicPlayer();

	useEffect(() => {
		setSongs(songs);
	}, []);
	const songs = [
		{
			id: 1,
			title: "Relax and Unwind",
			coverImage: Rectangle1,
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
			artist: "Lily Moonshadow",
			duration: "20:24",
		},
		{
			id: 2,
			title: "Relax and Unwind",
			coverImage: Rectangle1,
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
			artist: "Ruby Riversong",
			duration: "15:15",
		},
		{
			id: 3,
			title: "Relax and Unwind",
			coverImage: Rectangle1,
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
			artist: "Finn Oceanwood",
			duration: "54:32",
		},
		{
			id: 4,
			title: "Relax and Unwind",
			coverImage: Rectangle1,
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
			artist: "Finn Oceanwood",
			duration: "54:32",
		},
		{
			id: 5,
			title: "Relax and Unwind",
			coverImage: Rectangle1,
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
			artist: "Finn Oceanwood",
			duration: "54:32",
		},
	];

	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hoveredRow, setHoveredRow] = useState<number | null>(null);

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
		<>
			<div className="w-11/12 m-auto text-white">
				<div className="bg-gradient-to-r from-[#4B0B3E] to-[#274749] p-8 rounded-lg text-white flex items-center justify-between">
					<div className="flex-1">
						<h1 className="text-6xl font-bold">Artist Name</h1>

						<div className=" grid grid-flow-col gap-2 w-2/5 mt-3">
							<span className="flex gap-2 text-xs">
								<MessageCircle size={15} /> 1020{" "}
							</span>
							<span className="flex gap-2 text-xs">
								<Users size={15} /> 1020
							</span>
							<span className="flex gap-2 text-xs ">
								<Heart size={15} /> 1,020
							</span>
						</div>
					</div>
					<div className="flex-shrink-0">
						<Image
							src={image}
							alt="Artist"
							className="w-32 h-32 rounded-full border border-white object-cover"
						/>
					</div>
				</div>
				<Tabs.Root defaultValue="songs">
					<Tabs.List className="flex space-x-4 my-8">
						<Tabs.Trigger
							value="songs"
							className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] rounded-full data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:text-white  hover:bg-[#B6195B] text-sm"
						>
							Songs
						</Tabs.Trigger>
						<Tabs.Trigger
							value="album"
							className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] rounded-full hover:bg-[#B6195B] data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:text-white text-sm"
						>
							Album
						</Tabs.Trigger>
						<Tabs.Trigger
							value="playlist"
							className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] rounded-full hover:bg-[#B6195B] data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:text-white text-sm"
						>
							Playlist
						</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="songs">
						<div className="overflow-x-auto mb-40">
							<table className="min-w-full text-[#666C6C] border-separate border-spacing-y-2">
								<thead>
									<tr className="text-sm  font-medium">
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
                                        <th className="p-3 text-left"></th>
                                        <th className="p-3 text-left"></th>
									</tr>
								</thead>
								<tbody>
									{songs.map((song, index) => (
										<tr
											key={song.id}
											className={`hover:bg-[#0E0B0E] cursor-pointer transition-colors ${
												currentSongIndex === index
													? "bg-[#0E0B0E] bg-opacity-50"
													: ""
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
											<td className="p-3 grid grid-cols-2 gap-1 items-center">
												<div className="relative">
													<Image
														src={song.coverImage}
														alt={`${song.title} Cover`}
														width={48}
														height={48}
														className={`rounded-md mr-4 ${
															currentSongIndex === index && isPlaying
																? "animate-pulse"
																: ""
														}`}
													/>
												</div>
												<div>
													<p
														className={`font-medium text text-sm ${
															currentSongIndex === index ? "text-red-500" : ""
														}`}
													>
														{song.title}
													</p>
												</div>
											</td>
											<td className="p-3 font-medium text-left">
												{song.artist}
											</td>
                                            <td className="p-3 font-medium text-left">
												{song.duration}
											</td>
											<td className="p-3 font-medium text-center">
												<Heart size={20} />
											</td>
											<td className="p-3 font-medium text-center">
												<EllipsisVertical size={20} />
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</Tabs.Content>
					<Tabs.Content value="album">nothing...</Tabs.Content>
					<Tabs.Content value="playlist">nothing...</Tabs.Content>
				</Tabs.Root>
			</div>
		</>
	);
};

export default ArtistId;
