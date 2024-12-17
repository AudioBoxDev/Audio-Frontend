"use client"
import {  Image, Radius, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const WalletPage = () => {
    const router = useRouter();
    const TxnDetails =()=>{
        router.push('/dashboard/transactions')
    }
    const AssetDetails =()=>{
        router.push('/dashboard/assets')
    }
	return (
		<>
			<div className="font-roboto min-h-screen mt-5 text-[#A4A4A4]">
				<div className="flex justify-between text-white mb-4 items-center">
					<h1 className="text-2xl font-bold text-[#A4A4A4]">Wallet</h1>
					<div className="grid gap-4 items-center grid-cols-2">
						<button className="border-[#B11993]  text-sm uppercase font-semibold border px-3  py-1 rounded-full">
							swap
						</button>
						<button className="border-[#B11993]  text-sm uppercase font-semibold border px-4 py-1 rounded-full">
							Withdraw
						</button>
					</div>
				</div>
				<div className="grid grid-cols-2 text-white border-b pb-6 border-[#151515] lg:grid-cols-3 gap-4 mb-10">
					<div className="bg-[#100D0F] p-4 flex items-center space-x-4 rounded-lg">
						<div className="p-2 bg-[#1A3F35] rounded-full">
							<Wallet className=" text-white  h-5 w-5" />
						</div>
						<div>
							<p className="text-xs">Balance</p>
							<p className="text-lg font-semibold">0</p>
						</div>
					</div>
					<div className="bg-[#100D0F] p-4 flex items-center space-x-4 rounded-lg">
						<div className="p-2 bg-[#1A3F35] rounded-full">
							<Radius className=" text-white  h-5 w-5" />
						</div>
						<div>
							<p className="text-xs">Streaming Point</p>
							<p className="text-lg font-semibold">0 SP</p>
						</div>
					</div>
					<div className="bg-[#100D0F] p-4 flex items-center space-x-4 rounded-lg">
						<div className="p-2 bg-[#1A3F35] rounded-full">
							<Image className=" text-white  h-5 w-5" />
						</div>
						<div>
							<p className="text-xs">NFT Assets</p>
							<p className="text-lg font-semibold">0</p>
						</div>
					</div>
				</div>

				<div>
					<div className="flex justify-between border-b pb-1 border-[#151515] text-white mb-4 items-center">
						<h1 className="text-lg font-bold text-[#A4A4A4]">My Assets</h1>

						<button onClick={AssetDetails} className="text-[#666C6C]  text-xs uppercase font-semibold px-3  py-1 rounded-full">
							SEE DETAIL
						</button>
					</div>
				</div>

				<div>
					<div className="flex justify-between border-b pb-1 border-[#151515] text-white mb-4 items-center">
						<h1 className="text-lg font-bold text-[#A4A4A4]">Transactions History</h1>

						<button onClick={TxnDetails} className="text-[#666C6C]  text-xs uppercase font-semibold px-3  py-1 rounded-full">
							SEE DETAIL
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default WalletPage;
