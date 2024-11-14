import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useAccount } from "wagmi";
import { useDisconnect } from "wagmi";

export default function AvatarDropdown() {
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect()
  return (
    <div className="relative font-roboto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 rounded-full">
            <img
              src="https://via.placeholder.com/40" 
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-56 bg-[#791f685c] rounded-lg shadow-lg p-2"
          align="end"
        >
         
          <div className="px-4 py-2">
            {isConnected && 
            <p className="text-sm text-ellipsis overflow-hidden text-white">{address}</p>}
          </div>

          <DropdownMenuItem
           onClick={()=>disconnect()}  className="px-4 py-1 border-none font-medium cursor-pointer text-pink-600"
          >
          

            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}