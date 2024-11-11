import React from "react";
import bottom from "/public/images/bottoms.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<>
			<div className=" bg-gradient-to-br flex flex-col pt-36 font-roboto  -mt-24 from-[#1d02185c] to-transparent h-screen  justify-center items-center">
				<div className="text-center w-11/12 m-auto">
					<h1
						className="text-7xl md:text-6xl font-extrabold bg-gradient-to-r from-[#B11993] to-[#50F3FF] text-transparent bg-clip-text"
						style={{
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Stream Music <br /> Own the Experience
					</h1>
					<p className="text-lg md:text-xl text-white mt-5">
						Own the music, support the artists, revolutionize the industry
					</p>
					<div className=" md:flex  md:justify-center items-center  gap-5">
					<div className="mt-10 flex justify-center md:justify-start">
							<Link
								href="/dashboard"
								className="bg-gradient-to-r from-[#B1198E] p-1 to-[#B81A3F] text-white text-sm px-5 py-4 rounded-3xl w-full text-center md:w-[196px] h-[65px] md:h-[50px]"
							>
								Start Listening
							</Link>
						</div>
						
						<div className="flex items-center border-2 p-1 border-pink-500 mt-10 rounded-full overflow-hidden">
							<input
								type="email"
								placeholder="name@domain.com"
								className="text-white bg-transparent px-4 py-1 focus:outline-none placeholder-gray-400"
							/>

							<button className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-full focus:outline-none hover:bg-pink-700 transition">
								Join the Waitlist
							</button>
						</div>
						
					</div>
					<div>
						<Image src={bottom} alt="" className="mt-5 sm:h" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
