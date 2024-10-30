"use client";
import React, { useState, useRef, useEffect } from "react";
import {
	Play,
	Redo,
	Pause,
	SkipForward,
	SkipBack,
	Volume2,
	EllipsisVertical,
	VolumeOff,
} from "lucide-react";

interface Song {
	title: string;
	artist: string;
	src: string;
	albumCover: string;
}

const MusicPlayer: React.FC = () => {
	const songs: Song[] = [
		{
			title: "Song 1",
			artist: "Artist 1",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
			albumCover: "https://via.placeholder.com/300x300.png?text=Album+Cover+1",
		},
		{
			title: "Song 2",
			artist: "Artist 2",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
			albumCover: "https://via.placeholder.com/300x300.png?text=Album+Cover+2",
		},
		{
			title: "Song 3",
			artist: "Artist 3",
			src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
			albumCover: "https://via.placeholder.com/300x300.png?text=Album+Cover+3",
		},
	];

	const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [volume, setVolume] = useState<number>(1);
	const [isVolumeVisible, setIsVolumeVisible] = useState<boolean>(false);

	const audioRef = useRef<HTMLAudioElement | null>(null);
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	const togglePlayPause = () => {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const updateProgress = () => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
			setDuration(audioRef.current.duration);
		}
	};

	const handleProgressBarChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const newTime = parseFloat(event.target.value);
		setCurrentTime(newTime);
		if (audioRef.current) {
			audioRef.current.currentTime = newTime;
		}
	};

	const playNextSong = () => {
		setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
		resetPlayer();
		setIsPlaying(true); // Ensure the next song plays automatically
	};

	// Play the previous song
	const playPreviousSong = () => {
		setCurrentSongIndex(
			(prevIndex) => (prevIndex - 1 + songs.length) % songs.length,
		);
		resetPlayer();
		setIsPlaying(true); // Ensure the previous song plays automatically
	};

	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(event.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
	};

	const resetPlayer = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			setCurrentTime(0);
			setDuration(0);
			audioRef.current.load(); // Load the new song
		}
	};

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	const onLoadedMetadata = () => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
		}
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play();
		}
	}, [currentSongIndex]);

	return (
		<div className="fixed grid grid-cols-4 gap-4 md:left-64  left-0 bottom-0 items-center justify-between w-full bg-[#0D0D0D] text-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
			{/* Album Cover and Song Info */}
			<div className="flex col-span-1 items-center space-x-4">
				<img
					src={songs[currentSongIndex].albumCover}
					alt="Album Cover"
					className="md:w-12 md:h-12 w-6 h-6 rounded-full"
				/>
				<div>
					<h3 className="text-red-500 font-semibold text-sm">
						{songs[currentSongIndex].title}
					</h3>
					<p className="text-gray-400 text-xs">
						{songs[currentSongIndex].artist}
					</p>
				</div>
			</div>

			{/* Audio Element */}
			<audio
				ref={audioRef}
				src={songs[currentSongIndex].src}
				onTimeUpdate={updateProgress}
				onLoadedMetadata={onLoadedMetadata}
			></audio>

			{/* Control Buttons */}
			<div className="flex col-span-2 space-y-3 flex-col">
				<div className="flex items-center justify-center space-x-4">
					<button className="text-gray-400 hover:text-white">
						<Redo className="w-5 h-5" />
					</button>
					<button
						onClick={playPreviousSong}
						className="text-gray-400 hover:text-white"
					>
						<SkipBack className="w-5 h-5" />
					</button>
					<button
						onClick={togglePlayPause}
						className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
					>
						{isPlaying ? (
							<Pause className="w-5 h-5" />
						) : (
							<Play className="w-5 h-5" />
						)}
					</button>
					<button
						onClick={playNextSong}
						className="text-gray-400 hover:text-white"
					>
						<SkipForward className="w-5 h-5" />
					</button>
					<div className="relative flex items-center space-x-6">
						<button
							onClick={() => setIsVolumeVisible((prev) => !prev)}
							className="text-gray-400 hover:text-white"
						>
							{volume > 0 ? (
								<Volume2 className="w-5 h-5" />
							) : (
								<VolumeOff className="w-5 h-5" />
							)}
						</button>
						{isVolumeVisible && (
							<input
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={handleVolumeChange}
								className="w-20 absolute h-1 cursor-pointer accent-pink-500 top-1/2 transform -translate-y-1/2"
							/>
						)}
					</div>
				</div>

				{/* Progress Bar and Time */}
				<div className="flex items-center space-x-2 w-full">
					<p className="text-sm">{formatTime(currentTime)}</p>
					<input
						type="range"
						min="0"
						max={duration}
						step="0.1"
						value={currentTime}
						onChange={handleProgressBarChange}
						className="w-full h-1 cursor-pointer accent-pink-500  rounded-lg"
					/>
					<p className="text-sm">{formatTime(duration)}</p>
				</div>
			</div>
			<button className="text-gray-400 col-span-1 hover:text-white">
				<EllipsisVertical />
			</button>
		</div>
	);
};

export default MusicPlayer;
