import React from 'react'
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

const UploadModal = () => {
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
        <form>
          <div className="space-y-4 mb-6">
            
            
            <div className="relative">
              <label className="text-white text-sm mb-2 block">Song Title *</label>
              <Input
                className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                type="text"
                placeholder="Song Title"
                required
              />
            </div>
  
           
            <div className="relative">
              <label className="text-white text-sm mb-2 block">Description *</label>
              <Input
                className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                type="text"
                placeholder="Description of music"
                required
              />
            </div>
  
            
            <div className="grid grid-cols-2 gap-7">
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Genre *</label>
                <select className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none">
                  <option>Choose Genre</option>
                </select>
              </div>
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Release Date *</label>
                <Input
                  className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                  type="text"
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
                  placeholder="Enter Purchase Price"
                  required
                />
              </div>
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Royalty *</label>
                <Input
                  className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                  type="text"
                  placeholder="Enter Royalty"
                  required
                />
              </div>
            </div>
  
            
            <div className="grid grid-cols-2 gap-7">
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Price per Stream *</label>
                <Input
                  className="w-full bg-[#1C1C1F] border border-pink-600 rounded-full py-2 px-4 text-white focus:outline-none"
                  type="text"
                  placeholder="Enter Price per Stream"
                  required
                />
              </div>
              <div className='col-span-1'>
                <label className="text-white text-sm mb-2 block">Album Cover Art *</label>
                <div className="w-full bg-[#1C1C1F] border border-dashed border-pink-600 rounded-lg py-2 text-white text-center cursor-pointer">
                  Select a file
                </div>
              </div>
            </div>
          </div>
          <hr />
         
          <div className="grid grid-cols-2 gap-12 mt-8">
            <button className="bg-gradient-to-r col-span-1 from-pink-600 to-pink-400 text-white py-2 px-6 rounded-full">Mint as NFT</button>
            <button className="border border-pink-600 col-span-1 text-white py-2 px-6 rounded-full">Publish</button>
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