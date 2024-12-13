import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/context/providers";
import { ToastContainer } from "react-toastify";
import { headers } from "next/headers";
import { WIPBanner } from "@/components/Wim";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AudioBlocks - Decentralized Music Platform",
  description: "AudioBlocks empowers musicians by providing a decentralized platform for streaming and direct payments via blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get('cookie')
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          
          <Providers cookies={cookies}>
            <WIPBanner/>
            {children}
            <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
