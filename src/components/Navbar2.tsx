import Link from "next/link";
import React from "react";
import { useAccount } from "wagmi";

const Navbar2 = () => {
	const account = useAccount();
	return (
		<>
			<nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
				<div className="col-span-1 space-x-10 flex items-center">
					<Link href="/" className="flex space-x-3 items-center">
						<div className="bg-pink-500 rounded-full h-10 w-10"></div>
						<h1 className="text-xl md:text-2xl font-semibold text-pink-400">AudioBox</h1>
					</Link>
					<div>
						<ul className="lg:flex md:hidden gap-9 font-semibold text-gray-400 hidden">
							<Link href="/" className="hover:text-white">
								<li>Streams</li>
							</Link>
							<Link href="/" className="hover:text-white">
								<li>Artist hub</li>
							</Link>
							<Link 
							// href="/dashboard/marketplace" 
							href="/"
							className="hover:text-white">
								<li>Marketplace</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="col-span-1 ">
					<ul className="flex items-center font-semibold text-gray-400 gap-5">
						<div className='lg:flex md:hidden hidden'>
						<Link href="/" className="hover:text-white">Support</Link>
						<Link href="/" className="hover:text-white">Download</Link>
						</div>
						{account.address ? (
							<div className="text-ellipsis font-roboto font-bold border p-2 rounded-2xl overflow-hidden w-32">
								{account.address}
							</div>
						) : (
							<Link
								// href="/login"
								href="/"
								className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-7 py-3 rounded-full"
							>
								Sign up
							</Link>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar2;
