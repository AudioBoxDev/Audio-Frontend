// import React from "react";
// import { ArrowRightToLine, CirclePlay, Gem, Headset, Music, Play } from "lucide-react";
// import Link from "next/link";

// const LeftBar = ({ close, open}:any) => {
// 	return (
// 		<>
// 			<div className="bg-[#0E070C] z-30 space-y-2 mt-2 p-6 rounded-3xl">
// 			<ArrowRightToLine  className="md:hidden block text-white" onClick={close} size={16}/>
// 				<h2 className="text-base">Welcome Back</h2>
// 				<h1 className="text-white font-bold text-5xl">Wini</h1>
// 				<div className="text-gray-400">
// 					<h3 className="font-semibold text-sm text-gray-500 mb-4">
// 					Your STATS
// 					</h3>
// 					<ul className="text-sm space-y-2">
// 						<li className="text-gray-500 space-x-3 flex items-center">
// 							<Play className="w-4 h-4" />{" "}
// 							<div className="text-white flex flex-col">
// 								<span>Total Stream Count:</span>{" "}
// 								<span className="text-[#666C6C]">56 hours</span>{" "}
// 							</div>
// 						</li>
// 						{/* <li className="text-gray-500 space-x-3 flex items-center">
// 							<Music className="w-4 h-4" />
// 							<div className="text-white flex flex-col">Songs Bought: </div> 12
// 						</li>
// 						<li className="text-gray-500 space-x-3 flex items-center">
// 							<CirclePlay className="w-4 h-4" />{" "}
// 							<div className="text-white flex flex-col">
// 								<span>Albums Bought:</span>{" "}
// 								<span className="text-[#666C6C]">3</span>
// 							</div>
// 						</li> */}
// 						<li className="text-gray-500 space-x-3 flex items-center">
// 							<Headset className="w-4 h-4" />{" "}
// 							<div className="text-white flex flex-col">
// 								<span>Streaming Points:</span>{" "}
// 								<span className="text-[#666C6C]">5200 points</span>
// 							</div>{" "}
// 						</li>
// 					</ul>
// 				</div>
// 				{/* <div className="py-4">
// 					<Link
// 						href="#"
// 						className="flex bg-[#B1198E]   text-white text-sm px-7 py-3 rounded-full"
// 					>
// 						<Gem className="h-4 w-4 mr-3" />
// 						Upgrade to Premium
// 					</Link>
// 				</div> */}
// 				<Link href="/" className="flex mt-10 items-center">
// 						{/* <div className="bg-gray-900 rounded-full md:h-10 h-7 w-7 md:w-10"></div> */}
// 						<h1 className="md:text-2xl text-lg font-semibold text-gray-900">
// 							AudioBlocks
// 						</h1>
// 				</Link>
// 			</div>
// 		</>
// 	);
// };

// export default LeftBar;

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightToLine, CirclePlay, Gem, Headset, Music, Play, Pause } from "lucide-react";
import Link from "next/link";

// Define interfaces for component props and state
interface LeftBarProps {
  close: () => void;
  open?: () => void;
}

interface StreamStats {
  points: number;
  totalStreamTime: number;
  lastTrackingTime?: number;
}

const LeftBar: React.FC<LeftBarProps> = ({ close }) => {
  // Initialize state from localStorage or default values
  const [streamStats, setStreamStats] = useState<StreamStats>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedStats = localStorage.getItem('streamStats');
      return savedStats 
        ? JSON.parse(savedStats) 
        : {
            points: 0,
            totalStreamTime: 0,
            lastTrackingTime: undefined
          };
    }
    return {
      points: 0,
      totalStreamTime: 0,
      lastTrackingTime: undefined
    };
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  // Refs to manage interval and tracking
  const pointIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update localStorage whenever stats change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('streamStats', JSON.stringify(streamStats));
    }
  }, [streamStats]);

  // Check for ongoing tracking on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedStats = JSON.parse(localStorage.getItem('streamStats') || '{}');
      
      // If there was an ongoing tracking session before refresh
      if (savedStats.lastTrackingTime) {
        const timeSinceLastTracking = Math.floor(
          (Date.now() - (savedStats.lastTrackingTime || 0)) / 1000
        );
        
        // Calculate points and time gained during the break
        // Now using 0.02 points per minute
        const pointsToAdd = (timeSinceLastTracking / 60) * 0.02;
        
        setStreamStats(prev => ({
          ...prev,
          points: Number((prev.points + pointsToAdd).toFixed(2)),
          totalStreamTime: prev.totalStreamTime + timeSinceLastTracking,
          lastTrackingTime: Date.now()
        }));
        
        // Automatically resume tracking
        startStreamPointTracking();
      }
    }
  }, []);

  // Function to start incrementing stream points
  const startStreamPointTracking = (): void => {
    if (!isPlaying) {
      setIsPlaying(true);
      
      // Update last tracking time
      const currentTime = Date.now();
      setStreamStats(prev => ({
        ...prev,
        lastTrackingTime: currentTime
      }));
      
      // Increment points every minute (60 seconds)
      pointIntervalRef.current = setInterval(() => {
        setStreamStats(prev => ({
          ...prev,
          points: Number((prev.points + 0.02).toFixed(2)),
          totalStreamTime: prev.totalStreamTime + 60,
          lastTrackingTime: Date.now()
        }));
      }, 60000); // Every minute
    }
  };

  // Function to pause stream point tracking
  const pauseStreamPointTracking = (): void => {
    if (isPlaying) {
      setIsPlaying(false);
      
      // Clear the interval
      if (pointIntervalRef.current) {
        clearInterval(pointIntervalRef.current);
      }

      // Update stats one last time and remove tracking time
      setStreamStats(prev => ({
        ...prev,
        lastTrackingTime: undefined
      }));
    }
  };

  // Convert total seconds to hours for display
  const formatStreamTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours} hours ${minutes} minutes`;
  };

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (pointIntervalRef.current) {
        clearInterval(pointIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
    <div className="bg-[#0E070C] z-30 space-y-2 mt-2 p-6 rounded-3xl">
      <ArrowRightToLine className="md:hidden block text-white" onClick={close} size={16}/>
      <h2 className="text-base">Welcome Back</h2>
      <h1 className="text-white font-bold text-5xl">Wini</h1>
      <div className="text-gray-400">
        <h3 className="font-semibold text-sm text-gray-500 mb-4">
          Your STATS
        </h3>
        <ul className="text-sm space-y-2">
          <li className="text-gray-500 space-x-3 flex items-center">
            {!isPlaying ? (
              <Play 
                className="w-4 h-4 cursor-pointer text-white" 
                onClick={startStreamPointTracking} 
              />
            ) : (
              <Pause 
                className="w-4 h-4 cursor-pointer text-green-500" 
                onClick={pauseStreamPointTracking} 
              />
            )}
            <div className="text-white flex flex-col">
              <span>Total Stream Time:</span>
              <span className="text-[#666C6C]">{formatStreamTime(streamStats.totalStreamTime)}</span>
            </div>
          </li>
          <li className="text-gray-500 space-x-3 flex items-center">
            <Headset className="w-4 h-4" />
            <div className="text-white flex flex-col">
              <span>Streaming Points:</span>
              <span className="text-[#666C6C]">{streamStats.points.toFixed(2)} points</span>
            </div>
          </li>
        </ul>
      </div>
      <Link href="/" className="flex mt-10 items-center">
        <h1 className="md:text-2xl text-lg font-semibold text-gray-900">
          AudioBlocks
        </h1>
      </Link>
    </div>
    </>
  );
};

export default LeftBar;