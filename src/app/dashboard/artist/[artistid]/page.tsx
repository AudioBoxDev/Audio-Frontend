"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { EllipsisVertical, Heart, MessageCircle, Users } from "lucide-react";
import image from "/public/images/Ellipse.png";
import { Album, Play } from "lucide-react";
import Rectangle1 from "/public/images/Rectangle1.png";
import { PlayingIndicator } from "@/components/PlayingIndicator";
import { useMusicPlayer } from "@/context/MusicPlayer";
import * as Tabs from "@radix-ui/react-tabs";
import CommentSection from "@/components/Comment";
import { contractAddress, abi } from "@/config/abi";
import { useReadContract, useReadContracts} from "wagmi";
import { useAccount } from "wagmi";
import { useParams } from "next/navigation";
import axios from "axios";

const ArtistId = () => {
	const { playSong, setSongs } = useMusicPlayer();
	const [songs, setSongsData] = useState<any[]>([]);
	const { address } = useAccount();
	const [artist, setArtist] = useState<any>();
	const params = useParams();

	const { data: artistId, isSuccess }: any = useReadContract({
		address: contractAddress,
		abi: abi,
		functionName: "getArtistById",
		args: [params.artistid],
		account: address,
	});
// console.log(artistId.artistAddress);

	const fetchProfileDetails = async (profileDataArray: any) => {
		try {
			const gateway = profileDataArray.artistCid.replace(
				"ipfs://",
				`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
			);
			const response = await axios.get(gateway, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			const profile = response.data;
			setArtist(profile);
		} catch (error: any) {
			console.error("Error fetching profile details:", error.message);
		}
	};

	useEffect(() => {
		if (artistId && isSuccess) {
			fetchProfileDetails(artistId);
		}
	}, [artistId, isSuccess]);

	// getallSongs

	const { data: songIds, isSuccess: issuccess }: any = useReadContract({
		address: contractAddress,
		abi: abi,
		functionName: "getArtistSongs",
		args: [artistId?.artistAddress],
		account: address,
	});

	const { data, isSuccess:success }: any = useReadContracts({
		contracts:
		songIds?.map((songid: any) => ({
				abi: abi,
				address: contractAddress,
				functionName: "getSongById",
				args: [songid],
				account: address,
			})) || [],
		
	});

	const fetchSong = async (songDataArray: any[]) => {
		try {
			const songs = [];
			for (const profileData of songDataArray) {
				
				const gateway = profileData.result.songCID.replace(
					"ipfs://",
					`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
				);
				const response = await axios.get(gateway, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				const artistSong = {
					...response.data
				};
				songs.push(artistSong);
				setSongsData(songs);
				setSongs(songs);
				
			}
		} catch (error: any) {
			console.error("Error fetching song details:", error.message);
		}
	};
	
	useEffect(() => {
		if(data && success){
		fetchSong(data);
	}
}, [data]);
// const songs = [
	// 	{
	// 		id: 1,
	// 		title: "Relax and Unwind",
	// 		coverImage: Rectangle1,
	// 		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
	// 		artist: "Lily Moonshadow",
	// 		duration: "20:24",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Relax and Unwind",
	// 		coverImage: Rectangle1,
	// 		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
	// 		artist: "Ruby Riversong",
	// 		duration: "15:15",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Relax and Unwind",
	// 		coverImage: Rectangle1,
	// 		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
	// 		artist: "Finn Oceanwood",
	// 		duration: "54:32",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Relax and Unwind",
	// 		coverImage: Rectangle1,
	// 		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
	// 		artist: "Finn Oceanwood",
	// 		duration: "54:32",
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Relax and Unwind",
	// 		coverImage: Rectangle1,
	// 		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
	// 		artist: "Finn Oceanwood",
	// 		duration: "54:32",
	// 	},
	// ];

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
					<div className="flex-1 gap-2">
						<h1 className="md:text-6xl text-3xl font-bold">
							{artist?.fullName}
						</h1>

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
						<img
							src={artist?.profilePicture.replace(
								"ipfs://",
								`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
							)}
							alt="Artist"
							className="md:w-32 md:h-32 w-20 h-20 rounded-full border border-white object-cover"
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
						<div className="overflow-x-auto mb-8">
							<table className="min-w-full text-[#666C6C] border-separate border-spacing-y-2">
								<thead>
									<tr className="text-sm hidden font-medium">
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
										<th className="p-3 text-left"></th>
									</tr>
								</thead>
								{songs?.length  > 0 ? (
									<tbody>
										{songs.map((song:any, index:any) => (
											<tr
												key={index}
												className={`hover:bg-[#0E0B0E] text-sm cursor-pointer transition-colors ${
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
												<td className="p-3 flex gap-1 items-center">
													<div className="relative">
														<img
															src={song?.image.replace(
																"ipfs://",
																`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
															)}
															alt={`${song.name} Cover`}
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
															className={`font-medium text-left text-sm ${
																currentSongIndex === index ? "text-red-500" : ""
															}`}
														>
															{song.name}
														</p>
														<td className="font-medium md:hidden text-left">
															{song?.fullName}
														</td>
													</div>
												</td>
												<td className="p-3 font-medium hidden md:table-cell text-left">
													{artist?.fullName}
												</td>
												<td className="p-3 hidden md:table-cell font-medium text-left">
													{song.duration}
												</td>
												<td className="p-3 font-medium text-center hidden md:table-cell">
													<Heart size={20} />
												</td>
												<td className="p-3 font-medium text-center ">
													<EllipsisVertical size={20} />
												</td>
											</tr>
										))}
									</tbody>
								) : (
									<div className="flex flex-col items-center justify-center h-full">
										<img
											src="https://via.placeholder.com/300x300?text=No+Songs+Available"
											alt="No songs available"
											className="w-32 h-32 mb-4"
										/>
										<p className="text-lg font-medium text-gray-600">
											No songs available for this artist.
										</p>
									</div>
								)}
							</table>
						</div>
					</Tabs.Content>
					<Tabs.Content value="album">
						<div className="h-64">No Album created</div>
					</Tabs.Content>
					<Tabs.Content value="playlist">nothing...</Tabs.Content>
				</Tabs.Root>
				<CommentSection />
			</div>
		</>
	);
};

export default ArtistId;
