"use client";
import AudioBoxFeatures from "@/components/AudioBoxFeatures";
import AudioCardItem from "@/components/AudioCardItem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import headset from "/public/images/img.png";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import { useAccount } from "wagmi";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { fetchArtist } from "@/hooks/fetchArtist";

export default function Home() {
	const { artistProfileDetails } = uploadProfileDetails();
	const { isConnected } = useAccount();
	const token = Cookies.get("audioblocks_jwt");
	const router = useRouter();
	
	const { artists, isLoading } = fetchArtist();

	const handleClick = (artistId: string) => {
		router.push(`/dashboard/artist/${artistId}`);
	};
	const getStarted = () => {
		if (!token) {
			if (!isConnected) {
				toast.error("Please connect your wallet");
			} else  if(isConnected && !token){
				toast.error("Please sign the Authentication message");
			}
		} else {
			const redirectPath = artistProfileDetails
				? "/dashboard"
				: "/dashboard/profile";
			router.push(redirectPath);
		}
	};

	return (
		<>
			<Navbar2 />
			<Hero />
			<AudioBoxFeatures />
			<AudioCardItem />
			{!isLoading &&
			<div>
			<h1 className="text-2xl text-white text-center font-bold mb-2">Artist</h1>
				<div className="flex w-11/12 m-auto items-center justify-between flex-wrap">
					{artists?.slice(0,4).map((artist, index) => (
						<div
							key={index}
							onClick={() => handleClick(artist?.id)}
							className=" cursor-pointer p-2 "
						>
							<div className=" rounded-lg shadow-lg flex items-center flex-col overflow-hidden">
								<div className="rounded-full">
								<h2 className="text-base font-bold mb-4 flex justify-center">Artist</h2>
									<img
										src={artist?.profilePicture?.replace(
											"ipfs://",
											`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
										)}
										width={180}
										height={200}
										alt={artist.fullName}
										className="w-40 rounded-full h-40 object-cover"
									/>
								</div>
								<div className="p-4 pt-2 md:text-center  text-left">
									<p className="text-sm text-gray-400">{artist?.fullName}</p>
								</div>
							</div>
						</div>
					))}
			</div>
			</div>}

			<div className="bg-gradient-to-r from-[#991E7035] to-[#333A5670] text-white py-6">
				<div className="grid w-11/12 m-auto items-center md:grid-cols-5 grid-cols-12 gap-6">
					<div className="md:col-span-2 col-span-12 md:text-left text-center md:pl-16 space-y-5">
						<h1 className="text-3xl md:text-5xl font-bold leading-tight">
							Stream,Support, and Own it!
						</h1>
						<p className="text-lg md:text-xl text-white">
							Join a community where your support makes a real difference, and
							every play, tip, or purchase helps artists thrive.
						</p>
						<div>
							<button
								onClick={getStarted}
								className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-4 py-2 rounded-full"
							>
								Get Started
							</button>
						</div>
					</div>
					<div className="md:col-span-3 col-span-12">
						<Image
							className="w-full md:w-96 mx-auto"
							src={headset}
							alt="Headphone"
						/>
					</div>
				</div>
			</div>
			<div className="bg-[#471439] text-white py-4">
				<div className="container mx-auto flex items-center justify-center space-x-2">
					<span className="text-sm font-bold">Powered by</span>
					<img src="/images/lisk.png" alt="Lisk Logo" className="h-12" />
					<span className="text-sm font-bold">Lisk</span>
				</div>
			</div>
			<Footer />
		</>
	);
}
