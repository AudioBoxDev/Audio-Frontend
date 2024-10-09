"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Slider from "react-slick";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import src from "/public/images/container.png";
import { ConnectBtn } from "@/components/ConnectBtn";
const images = [
  "/public/images/container.png", // Add your image paths here
  "/image2.jpg",
  "/image3.jpg",
];
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

function LoginScreen() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const router = useRouter();

  const account = useAccount();

  useEffect(() => {
    if (account.isConnected) {
      router.push("/dashboard/album");
    }
  }, [account.isConnected]);

  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen">
      {/* Left section - Form */}
      <div className="p-20 col-span-1 flex flex-col">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="account" className="text-white">
              Socials
            </TabsTrigger>
            <TabsTrigger value="wallet" className="text-white">
              Wallet
            </TabsTrigger>
          </TabsList>

          <TabsContent className="border-none outline-none" value="account">
            <Card className="bg-transparent border-none text-white">
              <CardHeader>
                <CardTitle>
                  <span className="text-4xl">Sign in</span>{" "}
                </CardTitle>
                <CardDescription>
                  Please login to continue to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Input
                    type="email"
                    className="rounded-full p"
                    placeholder="Provide email"
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    className="rounded-full h-12"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button className="w-full bg-pink-600 text-white rounded-full">
                  Create Account
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-white rounded-full"
                >
                  Sign up with Google
                </Button>
              </CardFooter>
              <div className="flex justify-center mt-4 text-xs">
                <p className="text-white">Already have an account?</p>
                <a href="" className="text-pink-600 ml-1">
                  Sign In
                </a>
              </div>
            </Card>
          </TabsContent>

          {/* Wallet Tab */}
          <TabsContent className="border-none" value="wallet">
            <Card className="bg-transparent border-none text-white p-6 rounded-lg">
              <CardHeader>
                <CardTitle>Sign in</CardTitle>
                <CardDescription>
                  Please connect your wallet to create your account.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col space-y-2">
                {/* You can add your wallet connect button here */}
                {/* <Button className="w-full bg-pink-600 text-white rounded-lg"><ConnectButton className="bg-transparent"/> Connect Wallet</Button> */}

                <ConnectBtn />
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right section - Image slider */}
      <div className="relative col-span-2 h-screen">
        {/* <Slider {...sliderSettings} className="h-full">
          {images.map((src, index) => (
            <div key={index} className="h-full"> */}
        <Image
          src={src}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-r-lg"
        />
        {/* </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
}

export default LoginScreen;
