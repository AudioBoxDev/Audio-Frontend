"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { useReadContract, useReadContracts } from "wagmi";
import { useAccount } from "wagmi";
import { useParams } from "next/navigation";
import axios from "axios";
import { ArtistCardSkeleton } from "@/components/ArtistCardSkeleton";

const ArtistId = () => {
	const { playSong, setSongs } = useMusicPlayer();
	const [songs, setSongsData] = useState<any[]>([]);
	const { address } = useAccount();
	const [artist, setArtist] = useState<any>();
	const params = useParams();
	const [liked, setLiked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hoveredRow, setHoveredRow] = useState<number | null>(null);
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleBio = () => {
		setIsExpanded(!isExpanded);
	};

	const toggleLike = () => {
		setLiked((prev) => !prev);
	};

	const { data: artistId, isSuccess }: any = useReadContract({
		address: contractAddress,
		abi: abi,
		functionName: "getArtistById",
		args: [params.artistid],
		account: address,
	});
	// console.log(artistId.artistAddress);

	const fetchProfileDetails = async (profileDataArray: any) => {
		setIsLoading(true);
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
			setIsLoading(false);
		} catch (error: any) {
			setIsLoading(false);
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

	const { data, isSuccess: success }: any = useReadContracts({
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
			setIsLoading(true);
			for (const songData of songDataArray) {
				const gateway = songData.result.songCID.replace(
					"ipfs://",
					`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
				);
				const response = await axios.get(gateway, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				const artistSong = {
					...response.data,
				};
				songs.push(artistSong);
				setSongsData(songs);
				setSongs(songs);
			}
			setIsLoading(false);
		} catch (error: any) {
			setIsLoading(false);
			console.error("Error fetching song details:", error.message);
		}
	};

	// useEffect(() => {
	// 	if (data && success) {
	// 		fetchSong(data);
	// 	}
	// }, [data]);

	const isFetched = useRef(false);

	if (data && success && !isFetched.current) {
		isFetched.current = true; // Set the flag
		fetchSong(data); // Call your function only once
	}
	
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
				{isLoading ? (
					<ArtistCardSkeleton />
				) : (
					<div className="bg-gradient-to-r from-[#4B0B3E] to-[#274749] p-8 rounded-lg text-white flex items-center justify-between">
						<div className="flex-1 gap-2">
							<h1 className="md:text-6xl text-3xl font-bold">
								{artist?.fullName}
							</h1>
							<div className="flex  cursor-pointer">
								<p className="text-sm text-ellipsis" onClick={toggleBio}>
									{isExpanded ? artist?.bio : `${artist?.bio.slice(0, 53)}...`}
								</p>
							</div>

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
								src={artist?.profilePicture?.replace(
									"ipfs://",
									`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
								)}
								alt="Artist"
								className="md:w-32 md:h-32 w-20 h-20 rounded-full object-cover"
							/>
						</div>
					</div>
				)}
				<Tabs.Root defaultValue="songs">
					<Tabs.List className="flex space-x-4 my-8">
						<Tabs.Trigger
							value="songs"
							className="px-5 py-1 border font-semibold border-[#666C6C] text-[#666C6C] rounded-full data-[state=active]:bg-[#B6195B] data-[state=active]:border-none data-[state=active]:text-white hover:text-white  hover:bg-[#B6195B] text-sm"
						>
							Songs ({songs?.length})
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
						{/* <div className="overflow-x-auto mb-8"> */}
						<table className="min-w-full overflow-x-auto mb-8 text-[#666C6C] border-separate border-spacing-y-2">
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
							{isLoading ? (
								<div className="relative w-12 h-12 m-auto">
									<div className="absolute inset-0 border-2 border-blue-100 rounded-full animate-spin-slow"></div>
									<div className="absolute inset-0 border-2 border-pink-900 border-t-transparent rounded-full animate-spin"></div>
								</div>
							) : songs?.length > 0 ? (
								<tbody>
									{songs?.map((song: any, index: any) => (
										<tr
											key={index}
											className={`hover:bg-[#0E0B0E] text-sm cursor-pointer transition-colors ${
												currentSongIndex === index
													? "bg-[#0E0B0E] bg-opacity-50"
													: ""
											}`}
											onMouseEnter={() => setHoveredRow(index)}
											onMouseLeave={() => setHoveredRow(null)}
										>
											<td
												onClick={() => handlePlaySong(index)}
												className="p-3 w-10"
											>
												<div className="flex items-center justify-center w-6">
													{renderSongNumber(index)}
												</div>
											</td>
											<td
												onClick={() => handlePlaySong(index)}
												className="p-3 flex gap-1 items-center"
											>
												<div className="relative">
													<img
														src={song?.image.replace(
															"ipfs://",
															`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
														)}
														alt={`${song?.name} Cover`}
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
														{song?.name}
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
											<td
												className="p-3 font-medium text-center hidden md:table-cell"
												onClick={toggleLike}
												style={{ cursor: "pointer" }}
											>
												<Heart size={20} color={liked ? "red" : "white"} />
											</td>
											<td className="p-3 font-medium text-center ">
												<EllipsisVertical size={20} />
											</td>
										</tr>
									))}
								</tbody>
							) : (
								<div className="flex flex-col items-center justify-center h-full">
									<p className="text-lg font-medium text-gray-600">
										No songs available for this artist.
									</p>
								</div>
							)}
						</table>
						{/* </div> */}
					</Tabs.Content>
					<Tabs.Content value="album">
						<div className="h-64 text-center">No Album created</div>
					</Tabs.Content>
					<Tabs.Content value="playlist">
						<div className="h-64 text-center">No Playlist created</div>
					</Tabs.Content>
				</Tabs.Root>
				<CommentSection />
			</div>
		</>
	);
};

export default ArtistId;
