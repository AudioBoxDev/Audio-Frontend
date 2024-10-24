import Link from "next/link";
import AudioCard from "./AudioCard";
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
	const items = [
		{
			imageSrc: Rectangle1,
			title: "Just Chills",
			artist: "Taya Bloom",
			price: "4.89",
		},
		{
			imageSrc: Rectangle2,
			title: "Just Chills",
			artist: "John McGuire",
			price: "4.89",
		},
		{
			imageSrc: Rectangle3,
			title: "Just Chills",
			artist: "Taya Bloom",
			price: "4.89",
		},
		{
			imageSrc: Rectangle4,
			title: "Just Chills",
			artist: "Taya Bloom",
			price: "4.89",
		},
	];

	return (
		<div className="min-h-screen bg-[#0E070C] font-roboto w-11/12 mx-auto rounded-xl text-white p-16 my-7">
			<div className="container mx-auto">
				<div className="flex justify-between">
					<div className="flex  flex-col text-left">
						<h1 className="text-4xl font-bold mb-8">Music Marketplace</h1>
						<p className="text-base w-3/5">
							Explore a vast collection of exclusive NFTs minted by artists
							worldwide, own a piece of music history and support your favorite
							artists directly.
						</p>
					</div>
					<Link
						href="/dashboard/marketplace"
						className=" w-52 flex text-white text-sm"
					>
						Go to Marketplace 
            <ArrowRight className="h-4 w-7"/>
					</Link>
				</div>
				<div className="grid grid-cols-4 gap-3">
					{items.map((item, index) => (
						<AudioCard
							key={index}
							imageSrc={item.imageSrc}
							title={item.title}
							artist={item.artist}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
