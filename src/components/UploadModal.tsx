'use client'
import React, { useState, ChangeEvent, FormEvent  } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Upload, Cross2Icon } from 'lucide-react'
import { Input } from './ui/input'
import CollectionModal from './CollectionModal'
import { Tabs, TabsList, TabsContent, TabsTrigger } from './ui/tabs'
import { useIpfsUpload } from '@/hooks/useIpfsUpload';
import { toSmartAccount } from 'viem/zksync'
import { toast } from 'react-toastify'
import { replaceSpecialCharacters } from '@/lib/helper'



interface FormData {
  title: string;
  description: string;
  genre: string;
  release_date: string;
  purchase_price: string;
  song: File | null;
  cover_art: File | null;
}

const UploadModal = () => {

  const genre = ["Hip-hop", "Gospel", "R & B", "Jazz", "Classic"]
  const { pinFileToIpfs, pinJsonToIpfs, loading, error } = useIpfsUpload();

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    genre: '',
    release_date: '',
    purchase_price: '',
    song: null,
    cover_art: null,
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, genre, release_date, purchase_price, song, cover_art } = formData;

    // Validate required fields
    if (!title || !description || !genre || !release_date || !purchase_price || !song || !cover_art) {
      alert('All fields are required');
      return;
    }

    try {
      // Upload song and cover art to IPFS using Pinata
      const songUrl = await pinFileToIpfs(song);
      const coverArtUrl = await pinFileToIpfs(cover_art);

      // Create metadata
      const metadata = {
        name: replaceSpecialCharacters(title) || "Default-Name",
        songtitle: title,
        decription: description,
        image: coverArtUrl,
        data: {
          "artistName": "",
          owner: "",
          genre: genre,
          release_date: release_date,
          purchase_price: purchase_price,
          songUrl: songUrl,
          coverArtUrl: coverArtUrl,
          image: coverArtUrl,
        }
      };

      // Upload metadata JSON to IPFS using Pinata
      const metadataUrl = await pinJsonToIpfs(metadata);

      console.log('Metadata uploaded to IPFS:', metadataUrl);

      //Smart Contract interaction is here.

      alert('Song uploaded successfully!');
      toast.success("Song Uploaded Successfully");
      
    } catch (err) {
      console.error('Error uploading song or metadata:', err);
    }
  };



  return (
    <>
    <Dialog>
    <DialogTrigger asChild>
        <div className="flex space-x-3 tems-center *:text-base items-center text-gray-400 hover:text-pink-500 cursor-pointer">
            <Upload className="w-4 h-4" />
            <span className='font-roboto text-base font-normal leading-[18.75px] text-left'>New Uploads</span>
        </div>
    </DialogTrigger>
   
      <DialogContent className="bg-[#0d0d0d] rounded-full h-[90vh] overflow-y-scroll max-w-[500px] p-8">
        <DialogTitle className="text-center text-white text-2xl font-semibold mb-6">Upload/Mint Music</DialogTitle>
        <Tabs defaultValue='single'>
        
        
        <TabsList  className="flex justify-center bg-transparent space-x-4 mb-8">
          <TabsTrigger className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full" value="single">
            Single Music
          </TabsTrigger>
          <TabsTrigger className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-400 text-white rounded-full" value="collection">
           Collection
          </TabsTrigger>
        </TabsList>
  
        <TabsContent value="single">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            
            <div className="relative">
              <label className="text-white text-sm mb-2 block">Song Title *</label>
              <Input
                className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Song Title"
                required
              />
            </div>
  
           
            <div className="relative">
              <label className="text-white text-sm mb-2 block">Description *</label>
              <Input
                className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description of music"
                required
              />
            </div>
  
            
            <div className="grid grid-cols-2 gap-7">
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Genre *</label>
                <select className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none" name="genre" value={formData.genre} onChange={handleChange}>
                  <option value="">Choose Genre</option>
                  {
                    genre.map((item, index) => (
                      <option value={item} key={index}>{item}</option>
                    ))
                  }
                </select>
              </div>
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Release Date *</label>
                <Input
                  className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                  type="text"
                  name="release_date"
                  value={formData.release_date}
                  onChange={handleChange}
                  placeholder="DDMMYYYY"
                  required
                />
              </div>
            </div>
  
            
            <div className="grid grid-cols-2 gap-7">
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Purchase Price *</label>
                <Input
                  className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                  type="text"
                  name="purchase_price"
                  placeholder="Enter Purchase Price"
                  value={formData.purchase_price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='col-span-1'>
              <label className="text-white text-sm mb-2 block">Select Song mp3 *</label>
              <input type="file" name="song" accept=".mp3" onChange={handleChange} className="w-full bg-[#1C1C1F] border border-dashed border-pink-600 rounded-lg py-2 text-white text-center cursor-pointer px-2"/>
              </div>
            </div>
  
            
            <div className="grid grid-cols-2 gap-7">
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Album Cover Art *</label>
                <input type="file" name="cover_art" accept="image/*" onChange={handleChange} className="w-full bg-[#1C1C1F] border border-dashed border-pink-600 rounded-lg py-2 text-white text-center cursor-pointer px-2"/>
              </div>
            </div>
          </div>
          <hr />
         
          <div className="grid grid-cols-2 gap-12 mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r col-span-1 from-pink-600 to-pink-400 text-white py-2 px-6 rounded-full"
            disabled={loading}
          >
            {loading ? 'Minting...' : 'Mint as NFT'}
          </button>
          {error && <p className="text-red-500">{error.message}</p>}
          <button
            type="button"
            className="border border-pink-600 col-span-1 text-white py-2 px-6 rounded-full"
            onClick={() => alert('Publish functionality not yet implemented')}
          >
          Publish
        </button>
          </div>
        </form>
        </TabsContent>
        <TabsContent value="collection">
            <CollectionModal/>
        </TabsContent>
        </Tabs>
      </DialogContent>
  </Dialog>
  </>
  )
}

export default UploadModal