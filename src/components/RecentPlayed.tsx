"use client"
import React from 'react';
import Slider from 'react-slick';
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";
import Image from 'next/image';

const RecentlyPlayed = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const recentlyPlayedData = [
    { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle1 },
    { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle2 },
    { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle3},
    { title: "Good Day", artist: "Taya Bloom", year: 2024, imageUrl: Rectangle4 },
  ];

  return (
    <div className="text-white font-roboto pt-6">
      <h2 className="text-base font-bold mb-4">Recently played</h2>
      <Slider {...settings}>
        {recentlyPlayedData.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={180}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.artist}</p>
                <p className="text-sm text-gray-400">{item.year}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentlyPlayed;
