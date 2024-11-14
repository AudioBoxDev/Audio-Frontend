"use client";
import React, { Children } from "react";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/config/config";

const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();
	return (
		<div>
			{" "}
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider modalSize="compact" theme={darkTheme()}>
						{children}
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</div>
	);
};

export default Providers;
