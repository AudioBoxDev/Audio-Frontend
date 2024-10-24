import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import MusicPlayer from "@/components/MusicPlayer";
import LeftBar from "@/components/LeftBar";

const Dashboardlayout = ({ children }) => {
	return (
		<>
			<div>
				<Sidebar />

				<div className="md:ml-52 px-4 font-roboto grid grid-cols-12 gap-1">
					<div className="flex flex-col col-span-9  justify-center items-center">
						<Navbar />

						<div className="text-white ">{children}</div>

						<MusicPlayer />
					</div>
          <div className="col-span-3">

					<LeftBar  />
          </div>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Dashboardlayout;
