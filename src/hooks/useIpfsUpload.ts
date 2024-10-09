import { useState } from 'react';
import axios from 'axios';
import * as dotenv from "dotenv";
import { generateRandomFileName, generateRandomSongTitle, replaceSpecialCharacters } from '@/lib/helper';

// Pinata API credentials
const PINATA_API_KEY = 'YOUR_PINATA_API_KEY';
const PINATA_SECRET_API_KEY = 'YOUR_PINATA_SECRET_API_KEY';

export const useIpfsUpload = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);


  const pinFileToIpfs = async (file: File): Promise<string> => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const formData = new FormData();
    const randomFileName = generateRandomFileName(file.name);
    const renamedFile = new File([file], randomFileName, { type: file.type });
    // formData.append('file', file);
    formData.append('file', renamedFile);

    try {
      setLoading(true);
      const response = await axios.post(url, formData, {
        maxContentLength: 'Infinity', // Prevents larger file restrictions
        headers: {
          'Content-Type': `multipart/form-data;`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
        },
      });
      return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (err) {
      console.error('Error uploading file to Pinata:', err);
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const pinJsonToIpfs = async (json: object): Promise<string> => {
    console.log("Original JSON:", json);
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    // Ensure that json.songtitle exists and is a valid string
    const defaultSongTitle = generateRandomSongTitle();
    const songTitle = json.songtitle || defaultSongTitle;
    const formattedTitle = replaceSpecialCharacters(songTitle);
    console.log("Formatted Title:", formattedTitle);

    const pinataPayload = {
        pinataContent: json, // Your actual JSON content to upload
        pinataMetadata: {
            name: formattedTitle,
        },
    };

    try {
        setLoading(true);
        const response = await axios.post(url, pinataPayload, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
                pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
                pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
            },
        });

        console.log("Pinata response:", response.data);
        return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (err) {
        console.error('Error uploading JSON to Pinata:', err);
        setError(err as Error);
        throw err;
    } finally {
        setLoading(false);
    }
};

  return {
    pinFileToIpfs,
    pinJsonToIpfs,
    loading,
    error,
  };
};
