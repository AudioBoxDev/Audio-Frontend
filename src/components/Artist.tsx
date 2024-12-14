"use client";
import React from "react";
import Slider from "react-slick";
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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	// const recentlyPlayedData = [
	//   { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle1 },
	//   { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle2 },
	//   { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle3},
	//   { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle4 },
	// ];

	return (
		<div className="text-white border-b border-[#151515] font-roboto pt-6">
			<h2 className="text-base font-bold mb-4">Artist</h2>
			<Slider {...settings}>
				{/* {artists.map((artist, index) => (
					<div
						key={index}
						onClick={() => handleClick(artist.id)}
						className=" cursor-pointer p-2 "
					>
						
						<div className=" relative w-1/3 rounded-lg shadow-lg flex md:flex-col flex-row overflow-hidden">
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

				))} */}
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
			</Slider>
		</div>
	);
};

export default Artist;
