"use client";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { fetchArtist } from "@/hooks/fetchArtist";

const Trending = () => {
  const router = useRouter();
	const { artists, isLoading } = fetchArtist();

	const handleClick = (artistId: string) => {
		router.push(`/dashboard/artist/${artistId}`);
	};

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
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="text-white border-b border-[#151515] pb-5 font-roboto pt-6">
			<h2 className="text-base font-bold mb-4">Trending</h2>
			{isLoading ? (
				<div className="relative w-12 h-12 m-auto">
					<div className="absolute inset-0 border-2 border-blue-100 rounded-full animate-spin-slow"></div>
					<div className="absolute inset-0 border-2 border-pink-900 border-t-transparent rounded-full animate-spin"></div>
				</div>
			) : artists.length > 0 ? (
				<Slider {...settings}>
					{artists.map((artist, index) => (
						<div
							key={index}
							onClick={() => handleClick(artist.id)}
							className=" cursor-pointer p-2 "
						>
							<div className=" rounded-lg shadow-lg flex items-center flex-col overflow-hidden">
								<div className="rounded-full">
									<img
										src={artist.profilePicture.replace(
											"ipfs://",
											`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
										)}
										width={180}
										height={200}
										alt={artist.fullName}
										className="w-40  border border-white rounded-full h-40 object-cover"
									/>
								</div>
								<div className="p-4 pt-2 md:text-center  text-left">
									<p className="text-sm text-gray-400">{artist.fullName}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			) : (
				<div className="text-center text-white">No artists found.</div>
			)}
		</div>
	);
};


export default Trending;
