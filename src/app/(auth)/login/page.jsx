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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from 'next/link';
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
      router.push("/dashboard");
    }
  }, [account.isConnected]);

  return (
    <div className="grid grid-cols-3  md:gap-4 gap-0 min-h-screen">
      {/* Left section - Form */}
      <div className="p-20 md:col-span-1 col-span-3 flex flex-col">
        <Tabs defaultValue="wallet" className="w-[400px]">
          <TabsList className="grid w-1/2 bg-transparent grid-cols-2 mb-6">
             <TabsTrigger value="wallet" className="text-white font-bold text-md aria-selected:bg-transparent rounded-none aria-selected:border-b-2 aria-selected:border-pink-600">
              Wallet
            </TabsTrigger>
            <TabsTrigger value="account" className="text-white font-bold text-md aria-selected:bg-transparent rounded-none aria-selected:border-b-2 aria-selected:border-pink-600" >
              Socials
            </TabsTrigger>
           
          </TabsList>

            <TabsContent className="border-none" value="wallet">
            <Card className="bg-transparent border-none text-white rounded-lg">
              <CardHeader>
                <CardTitle>
                  <span className="text-4xl">Sign in</span>
                </CardTitle>
                <CardDescription>
                  Please login to continue to your account.
                </CardDescription>
              </CardHeader>
              <CardFooter className="w-full">

                <ConnectBtn className="w-full" />
              </CardFooter>
            </Card>
          </TabsContent>

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
                    className="rounded-full h-12"
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
              <CardFooter className="flex flex-col space-y-5">
                <Button className="w-full bg-pink-600 h-12 text-white rounded-full">
                  Create Account
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-black h-12 rounded-full"
                >
                  Sign up with Google
                </Button>
              </CardFooter>
              <div className="flex justify-center mt-4 text-xs">
                <p className="text-white">Already have an account?</p>
                <Link href="" className="text-pink-600 ml-1">
                  Sign In
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right section - Image slider */}
      <div className="relative md:block hidden md:col-span-2 h-screen">
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
