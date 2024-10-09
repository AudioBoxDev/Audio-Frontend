import Link from 'next/link';
import AudioCard from './AudioCard';
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";

export default function Home() {
  const items = [
    {
      imageSrc: Rectangle1,
      title: 'Just Chills',
      artist: 'Taya Bloom',
      price: '4.89',
    },
    {
      imageSrc:  Rectangle2,
      title: 'Just Chills',
      artist: 'John McGuire',
      price: '4.89',
    },
    {
      imageSrc:  Rectangle3,
      title: 'Just Chills',
      artist: 'Taya Bloom',
      price: '4.89',
    },
    {
      imageSrc:  Rectangle4,
      title: 'Just Chills',
      artist: 'Taya Bloom',
      price: '4.89',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#39020E] to-[#1D1703] text-white py-10">
      <div className="container mx-auto">
        <div className='flex justify-between'>
        <h1 className="text-4xl font-bold text-center mb-8">Audio Box Marketplace</h1>
        <Link href="/dashboard/marketplace" className="hover:bg-gradient-to-r border border-[#B1198E] from-[#B1198E] to-[#B81A3F] text-white text-lg px-6 py-2 h-12 rounded-full">Go to Marketplace</Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {items.map((item, index) => (
            <AudioCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              artist={item.artist}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
