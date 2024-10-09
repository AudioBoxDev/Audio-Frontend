import { CircleDollarSign, Headset, Home, Music } from 'lucide-react';
import React from 'react';

const AudioBoxFeatures = () => {
  return (
    <div className="bg-transparent min-h-screen">
      <div className="w-11/12 mx-auto py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Why You'll Love AudioBox</h1>
        <p className="text-xl w-[500px] m-auto text-center">From discovering new tracks to supporting your favorite artists.</p>
        
        <div className="grid grid-cols-4 mt-24 gap-4">
          
        
          <div className="bg-[#B1199333] relative space-y-5 p-6 rounded-3xl text-white flex flex-col items-center">
            <div className="w-16  absolute -top-8 bg-[#B1199333] h-16 text-white rounded-full flex items-center justify-center mb-4">
              <Music className="text-2xl" />
            </div>
            <div className='space-y-8 pt-5'>
            <h3 className="text-xl font-bold">Seamless Music Experience</h3>
            <p className=" text-md text-left">
              Enjoy uninterrupted, high-quality streaming with a user-friendly interface designed to provide smooth navigation and instant access to your favorite songs and artists.
            </p>
            </div>
          </div>
          
          
          <div className="bg-gradient-to-r relative space-y-5 from-[#C21B3F33] to-[#5C0D1E33] p-6 rounded-3xl text-white flex flex-col items-center">
            <div className="w-16  absolute -top-8 h-16 bg-gradient-to-r from-[#C21B3F33] to-[#5C0D1E33] text-white rounded-full flex items-center justify-center mb-4">
              <Headset className="text-2xl" />
            </div>
            <div className='space-y-8 pt-5'>
            <h3 className="text-xl font-bold ">Ad-Free Listening</h3>
            <p className="text-md text-left">
              Experience uninterrupted listening with an ad-free environment. Upgrade to premium for unlimited skips, high-quality sound, and the ultimate music experience.
            </p>
            </div>
          </div>
          
          
          <div className="bg-gradient-to-r relative space-y-5 from-[#B6218A33] to-[#500F3D33] p-6 rounded-3xl text-white flex flex-col items-center">
            <div className="w-16  absolute -top-8  h-16 bg-gradient-to-r from-[#B6218A33] to-[#500F3D33] text-white rounded-full flex items-center justify-center mb-4">
              <Home className="text-2xl" />
            </div>
            <div className='space-y-8 pt-5'>
            <h3 className="text-xl font-bold mb-2">NFT Music Marketplace</h3>
            <p className="text-md text-left">
              Unlock exclusive music and digital content through our NFT marketplace. Own and trade unique music collectibles, giving you a deeper connection with the artists you love.
            </p>
            </div>
          </div>
          
          
          <div className="bg-gradient-to-b relative space-y-5 from-[#B6218A33] to-[#B81A3C33] p-6 rounded-3xl text-white flex flex-col items-center">
            <div className="w-16  absolute -top-8  h-16 bg-gradient-to-r  from-[#B6218A33] to-[#B81A3C33] text-white rounded-full flex items-center justify-center mb-4">
              <CircleDollarSign className="text-2xl" />
            </div>
            <div className='space-y-8 pt-5'>
            <h3 className="text-xl font-bold">Listen and Earn</h3>
            <p className="text-md text-left">
              You gain rewards just by streaming your favorite tracks. The more you listen, the more you earn in loyalty tokens, which can be redeemed within the platform.
            </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AudioBoxFeatures;
