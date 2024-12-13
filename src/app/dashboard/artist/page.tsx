"use client";
import React, { useEffect } from "react";
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchArtist } from "@/hooks/fetchArtist";

const Artist = () => {
	const router = useRouter();
	const { artists } = fetchArtist();


	const handleClick = (artistId: string) => {
		router.push(`/dashboard/artist/${artistId}`);
	};
	return (
		<>
			<div className="text-white">
				<div className="flex gap-4 text-sm flex-wrap">
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						All
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						Pop music
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						Christian
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						Hip Hop music
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						Rock music
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						R&B music
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						Electronic music
					</button>
					<button className="border border-gray-800 hover:bg-pink-600 text-white px-4 py-2 rounded-full">
						Country music
					</button>
				</div>
			</div>
			<div className="grid md:grid-cols-4  grid-cols-1 md:w-full w-3/4 gap-6 mt-10">
				{artists.length > 0 ? (
					artists.map((artist, index) => (
						<div
							key={index}
							onClick={() => handleClick(artist.id)}
							className=" cursor-pointer "
						>
							<div className=" rounded-lg shadow-lg flex items-center md:flex-col flex-row overflow-hidden">
								<div className="rounded-full">
									<img
										src={
											artist.profilePicture.replace(
												"ipfs://",
												`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
											)
										}
										alt={artist.fullName}
										className="md:w-40 w-20 border border-white rounded-full md:h-40 h-20 object-cover"
									/>
								</div>
								<div className="p-4 pt-2 md:text-center  text-left">
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
