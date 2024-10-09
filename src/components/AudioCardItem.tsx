import AudioCard from './AudioCard';

export default function Home() {
  const items = [
    {
      imageSrc: '/public/images/Rectangle1.png',
      title: 'Just Chills',
      artist: 'Taya Bloom',
      price: '4.89',
    },
    {
      imageSrc: '/images/just-chills2.jpg',
      title: 'Just Chills',
      artist: 'John McGuire',
      price: '4.89',
    },
    {
      imageSrc: '/images/just-chills3.jpg',
      title: 'Just Chills',
      artist: 'Taya Bloom',
      price: '4.89',
    },
    {
      imageSrc: '/images/just-chills4.jpg',
      title: 'Just Chills',
      artist: 'Taya Bloom',
      price: '4.89',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Audio Box Marketplace</h1>
        <div className="grid grid-flow-row">
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
