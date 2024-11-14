"use client"
import React from "react";
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Artist = () => {
  const router = useRouter();
	const recentlyPlayedData = [
		{
			title: "Good Day",
			artist: "Taya Bloom",
			year: 2024,
			imageUrl: Rectangle1,
		},
		{
			title: "Good Day",
			artist: "Taya Bloom",
			year: 2024,
			imageUrl: Rectangle2,
		},
		{
			title: "Good Day",
			artist: "Taya Bloom",
			year: 2024,
			imageUrl: Rectangle3,
		},
		{
			title: "Good Day",
			artist: "Taya Bloom",
			year: 2024,
			imageUrl: Rectangle4,
		},
	];

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
				{recentlyPlayedData.map((item, index) => (
					<div key={index} onClick={() => handleClick(item.artist)} className=" cursor-pointer ">
						<div className=" rounded-lg shadow-lg flex items-center md:flex-col flex-row overflow-hidden">
							<div className="rounded-full">
								<Image
									src={item.imageUrl}
									alt={item.title}
									width={180}
									height={200}
									className="md:w-40 w-20 rounded-full md:h-40 h-20 object-cover"
								/>
							</div>
							<div className="p-4 pt-2 md:text-center  text-left">
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p className="text-sm text-gray-400">{item.artist}</p>
								<p className="text-sm text-gray-400">{item.year}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Artist;
