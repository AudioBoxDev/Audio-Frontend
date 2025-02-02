"use client";
import { useState, useEffect } from "react";
import {
	ArrowRightToLine,
	CirclePlay,
	Gem,
	Headset,
	Music,
	Play,
	Pause,
} from "lucide-react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

// Define interfaces for component props and state
interface LeftBarProps {
	close: () => void;
	open?: () => void;
}

const LeftBar: React.FC<LeftBarProps> = ({ close }) => {
	const url = process.env.NEXT_PUBLIC_API_URL;
	const jwt = Cookies.get("audioblocks_jwt");
	const [listersStat, setListernerStat] = useState<any>(null);

	useEffect(() => {
		const handleListerStat = async () => {
			try {
				const response = await axios.get(`${url}/user/get-listerner-stats`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${jwt}`,
					},
				});

				if (response) {
					setListernerStat(response.data.data);
				}
			} catch (err: any) {
				console.log(err.message);
			}
		};

		handleListerStat();
	}, [url, jwt]);

	return (
		<>
			<div className="bg-[#0E070C] z-30 space-y-2 mt-2 p-6 rounded-3xl">
				<ArrowRightToLine
					className="md:hidden block text-white"
					onClick={close}
					size={16}
				/>
				<h2 className="text-base">Welcome Back</h2>
				<h1 className="text-white font-bold text-5xl">Wini</h1>
				<div className="text-gray-400">
					<h3 className="font-semibold text-sm text-gray-500 mb-4">
						Your STATS
					</h3>
					<ul className="text-sm space-y-2">
						<li className="text-gray-500 space-x-3 flex items-center">
							
								<Play
									className="w-4 h-4 cursor-pointer text-white"
								/>
							
							<div className="text-white flex flex-col">
								<span>Total Stream Time:</span>
								<span className="text-[#666C6C]">
									{listersStat?.stats.totalStreamTime}
								</span>
							</div>
						</li>
						<li className="text-gray-500 space-x-3 flex items-center">
							<Headset className="w-4 h-4" />
							<div className="text-white flex flex-col">
								<span>Streaming Points:</span>
								<span className="text-[#666C6C]">
									{listersStat?.stats.totalStreams} points
								</span>
							</div>
						</li>
					</ul>
				</div>
				<Link href="/" className="flex mt-10 items-center">
					<h1 className="md:text-2xl text-lg font-semibold text-gray-900">
						AudioBlocks
					</h1>
				</Link>
			</div>
		</>
	);
};

export default LeftBar;
