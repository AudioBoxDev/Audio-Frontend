import React, { useState } from "react";
import bottom from "/public/images/bottoms.svg";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import EmailVerificationModal from "./VerificationModal";

const Hero = () => {
	const [email, setEmail] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [verificationCode, setVerificationCode] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const url = "https://theaudiobox-backend.onrender.com";

	const JoinWaitlist = async () => {
		setLoading(true);
		try {
			const response = await axios.post(`${url}/waitlist/join`, { email });

			setIsModalOpen(true);
			setMessage(
				response.data.message ||
					"A verification code has been sent to your email.",
			);
		} catch (error) {
			setIsModalOpen(true);
			setMessage(
				error?.response?.data.message ||
					"There was an error joining the waitlist. Please try again.",
			);
		} finally {
			setLoading(false);
		}
	};

	// const verifyEmail = async () => {
	// 	try {
	// 		const response = await axios.post(`${url}/waitlist/verify`, {
	// 			email,
	// 			code: verificationCode,
	// 		});
	// 		setMessage(response.data.message || "Your email has been verified!");
	// 	} catch (error) {
	// 		setMessage("Invalid code. Please try again.");
	// 	}
	// };

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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="name@domain.com"
								className="text-white bg-transparent px-4 py-1 focus:outline-none placeholder-gray-400"
							/>

							<button
								onClick={JoinWaitlist}
								disabled={loading}
								className={`bg-pink-600 text-white font-semibold px-6 py-2 rounded-full focus:outline-none hover:bg-pink-700 transition ${
									loading ? "opacity-50 cursor-not-allowed" : ""
								}`}
							>
								{loading ? "Loading..." : "Join the Waitlist"}
							</button>
						</div>
					</div>
					<div>
						<Image src={bottom} alt="" className="mt-5" />
					</div>
				</div>
			</div>

			<EmailVerificationModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				// onVerify={verifyEmail}
				// verificationCode={verificationCode}
				// setVerificationCode={setVerificationCode}
				message={message}
			/>
		</>
	);
};

export default Hero;
