import React from "react";
import Image from "next/image";
import {
	Check,
} from "lucide-react";
import image from "/public/images/Ellipse.png";

const Album = () => {
	return (
		<>
			<div className="w-11/12 m-auto text-white">
				<div className="relative bg-gradient-to-r items-center flex justify-between from-[#4B0B3E] to-[#274749] text-white p-8 rounded-lg mb-8">
					<div className="w-[288px]">
						<div className="flex items-center">
							<span className="h-4 w-4 rounded-full flex items-center justify-center bg-yellow-700 text-xs mr-2">
								<Check className="h-2 w-2" />
							</span>
							<span>Tip Artist</span>
						</div>
						<h1 className="text-5xl font-bold text-white mb-2">Artist Name</h1>
						<p className="text-base mb-4 text-[#91A2A4]">Artist Name</p>
					</div>

					<div className="absolute right-4 bottom-0 h-44 w-44 rounded-full border border-white overflow-hidden">
						<Image src={image} alt="Music" className="w-full h-full object-cover" />
					</div>
				</div>

				<div className="text-white h-[320px] overflow-y-scroll">
					<ul>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Album;
