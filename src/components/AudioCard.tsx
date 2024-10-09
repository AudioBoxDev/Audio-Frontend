import Image from 'next/image';

const AudioCard = ({ imageSrc, title, artist, price }:any) => {
  return (
    <div className="max-w-sm bg-gradient-to-b from-[#32031F] to-[#0C060B] rounded-lg shadow-lg m-4 p-5 text-white">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-48 rounded-md"
          width={300}
          height={300}
        />
        <div className="absolute top-0 right-0 p-2 text-white">
          <span className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>341</span>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-400">by {artist}</p>
        <p className="mt-2 text-2xl font-semibold">{price} ETH</p>
        <button className="w-full mt-4 py-2 bg-pink-500 text-white font-bold rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AudioCard;
