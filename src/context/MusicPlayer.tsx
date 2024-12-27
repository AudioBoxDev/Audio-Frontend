import React, { createContext, useContext, useState, useCallback } from 'react';
import { Song } from '../components/MusicPlayer';
import Cookies from 'js-cookie';

interface MusicPlayerContextType {
  songs: Song[];
  currentSongIndex: number;
  isPlaying: boolean;
  setSongs: (songs:any) => void;
  playSong: (index: number) => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  togglePlayPause: () => void;
  handleSongEnd: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const jwt = Cookies.get("audioblocks_jwt");

  const startSongSession = async (userId: number, artistId: number, songId: number) => {
    try {
      const startTime = new Date().toISOString(); // Current timestamp
      const response = await fetch(`${url}/song/start-song-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          userId,
          artistId,
          songId,
          startTime,
        }),
      });
      if (!response.ok) {
        console.error('Failed to start song session');
      }
    } catch (error) {
      console.error('Error starting song session:', error);
    }
  };
  
  
  const playSong = useCallback(async (index: number) => {
    console.log(songs);
    // const { id: songId, artistId } = songs[index]; 
    // await startSongSession(userId, artistId, songId);
    setCurrentSongIndex(index);
    setIsPlaying(true);
  }, []);

  const playNextSong = useCallback(() => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(prev => prev + 1);
      setIsPlaying(true);
    }
  }, [currentSongIndex, songs.length]);

  const playPreviousSong = useCallback(() => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(prev => prev - 1);
      setIsPlaying(true);
    }
  }, [currentSongIndex]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleSongEnd = useCallback(() => {
    if (currentSongIndex < songs.length - 1) {
      playNextSong();
    } else {
      console.log(songs);
      setIsPlaying(false);
      setCurrentSongIndex(0);
    }
  }, [currentSongIndex, songs.length, playNextSong]);

  return (
    <MusicPlayerContext.Provider
      value={{
        songs,
        currentSongIndex,
        isPlaying,
        setSongs,
        playSong,
        playNextSong,
        playPreviousSong,
        togglePlayPause,
        handleSongEnd,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};