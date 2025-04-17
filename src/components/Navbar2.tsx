import Link from "next/link";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import { useEffect, useState } from "react";
import { Menu, CircleX } from "lucide-react";
import { ConnectBtn } from "./ConnectBtn";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import AvatarDropdown from "./Dropdown";
import EmailVerificationModal from "./VerificationModal";
import Image from "next/image";
import { motion } from "framer-motion";

const url = "https://theaudiobox-backend.onrender.com";

const Navbar2 = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const url = "https://theaudiobox-backend.onrender.com";

	const verifyEmail = async () => {
		setLoading(true);
		try {
			const response = await axios.post(`${url}/waitlist/join`, { email });
			toast.success(response.data.message || "Your email has been Added!");
		} catch (error: any) {
			toast.error(
				error?.response.data.message ||
					"There was an error joining the waitlist. Please try again.",
			);
		} finally {
			setLoading(false);
		}
	};
	// const { address, isConnected } = useAccount();
	// const { signMessageAsync } = useSignMessage();

	// const [token, setToken] = useState(null);
	// const [message, setMessage] = useState(null);

	// useEffect(() => {
	// 	if (isConnected) {
	// 		signMessage();
	// 	}
	// }, [isConnected, token]);

	// const signMessage = async () => {
	// 	if (!isConnected) return alert("Please connect your wallet first");

	// 	const messageToSign: any = `Welcome to AudioBlocks! Sign this message to verify your wallet and unlock a world of decentralized music. Timestamp: ${new Date().toISOString()}`;

	// 	setMessage(messageToSign);

	// 	try {
	// 		const signature = await signMessageAsync({ message: messageToSign });
	// 		authenticateUser(address, signature, messageToSign, "user");
	// 	} catch (error) {
	// 		console.error("Message signing failed:", error);
	// 		toast.error("Message signing failed");
	// 	}
	// };

	// const authenticateUser = async (
	// 	address: any,
	// 	signature: any,
	// 	message: any,
	// 	role: any,
	// ) => {
	// 	try {
	// 		const response = await axios.post(`${url}/wallet/auth/verify_signature`, {
	// 			address: address,
	// 			signature: signature,
	// 			message: message,
	// 			role: role,
	// 		});
	// 		setToken(response.data.token);
	// 		Cookies.set("audioblocks_jwt", response.data.token, { expires: 30 });
	// 		toast.success(response.data.message || "Authentication successful!");
	// 	} catch (error: any) {
	// 		toast.error(error.response.data.message || "Authentication failed!");
	// 		console.error("Authentication failed:", error);
	// 	}
	// };

	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<nav className="w-full text-white font-roboto z-50 relative">
			<div className="flex items-center justify-between px-3 py-4 md:py-6 w-11/12 mx-auto">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<Image
						src="/images/logo1.png"
						alt="logo"
						width={40}
						height={40}
						className="rounded-full"
					/>
					<h1 className="text-base md:text-xl font-semibold text-pink-400">
						AudioBlocks
					</h1>
				</Link>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-2xl z-50"
					aria-label="Toggle menu"
				>
					{isOpen ? <div className="-mt-20"><CircleX /> </div>: <Menu />}
				</button>

				{/* Desktop Links */}
				<div className="hidden md:flex items-center space-x-6">
					<button
						onClick={() =>
							window.open("https://audioblocks-artist.vercel.app/", "_blank")
						}
						className="bg-black border w-64 border-pink-500 text-white font-medium py-2 px-5 rounded-full shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
					>
						Artist Hub
					</button>
					<ConnectBtn />
				</div>
			</div>

			{/* Mobile Sidebar Menu */}
			<motion.div
				initial={{ x: "100%" }}
				animate={{ x: isOpen ? "0%" : "100%" }}
				transition={{ type: "spring", stiffness: 100 }}
				className={`fixed top-0 right-0 h-screen w-3/4 bg-black bg-opacity-95 text-white px-6 py-20 flex flex-col space-y-6 md:hidden z-40 transition-all`}
			>
				<button
					onClick={() =>
						window.open("https://audioblocks-artist.vercel.app/", "_blank")
					}
					className="w-full bg-black border border-pink-500 text-white font-semibold py-2 rounded-full shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
				>
					Artist Hub
				</button>
				<ConnectBtn />
			</motion.div>
		</nav>

			{/* Email Verification Modal */}
		</>
	);
};

export default Navbar2;
