import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Ellipse from "/public/images/Ellipse.png";
import Ellipse4 from "/public/images/Ellipse4.png";
import Image from "next/image";


const MusicScene = () => {
  const artists = [
    { name: "John McGuire", image: Ellipse4 },
    { name: "Taya Bloom", image: Ellipse},
    { name: "Merola Brian", image: Ellipse4 },
    { name: "Saha Bloomer", image: Ellipse},
  ];

  return (
    <div className=" text-white w-11/12 m-auto py-16 md:px-8 mx-3">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="md:text-4xl text-5xl font-bold mb-2">Explore the Music Scene</h1>
        <p className="text-gray-400 md:w-1/2 w-11/12  m-auto">
          Browse our extensive catalog, search for specific genres or moods, and follow your
          favorite creators to stay updated on their latest releases.
        </p>

        <Link
						// href="/dashboard/marketplace"
            href="/"
						className=" w-44 my-6 px-2 m-auto md:hidden  flex text-white border rounded-full border-[#B81A3C52]  text-sm"
					>
						Go to Marketplace 
            <ArrowRight className="h-4 w-7"/>
					</Link>
      </div>

      {/* Artist Profile Section */}
      <div className="grid grid-cols-1 md:grid md:grid-cols-4 justify-center gap-8">
        {artists.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular Image with Border */}
            <div className="rounded-full w-40 h-40   border-4 border-pink-500 p-1">
              <Image
                src={artist.image}
                alt={artist.name}
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
            {/* Artist Name */}
            <p className="mt-4 text-center">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicScene;
