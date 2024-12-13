import Link from "next/link";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import { useEffect, useState } from "react";
import { ConnectBtn } from "./ConnectBtn";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import AvatarDropdown from "./Dropdown";

const url = "https://theaudiobox-backend.onrender.com";

const Navbar2 = () => {
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
	return (
		<>
			<nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
				<div className="space-x-10 flex items-center">
					<Link href="/" className="flex space-x-3 items-center">
						<div className="bg-pink-500 rounded-full md:h-10 h-7 w-7 md:w-10"></div>
						<h1 className="md:text-2xl text-lg font-semibold text-pink-400">
							AudioBlocks
						</h1>
					</Link>
					<div className="md:block hidden">
						{/* <ul className="flex gap-9 font-semibold text-gray-400">
							<Link href="/" className="hover:text-white">
								<li>Streams</li>
							</Link>
							<Link href="/" className="hover:text-white">
								<li>Artist hub</li>
							</Link>
							<Link href="/dashboard/marketplace" className="hover:text-white">
								<li>Marketplace</li>
							</Link>
						</ul> */}
					</div>
				</div>
				<div className=" ">
					<ul className="flex items-center font-semibold text-gray-400 gap-5">
						{/* <Link href="/" className="hover:text-white md:block hidden">
							Support
						</Link>
						<Link href="/" className="hover:text-white md:block hidden">
							Download
						</Link> */}
						<div><ConnectBtn /></div>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar2;