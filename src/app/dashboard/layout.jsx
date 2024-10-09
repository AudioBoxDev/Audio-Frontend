import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { ToastContainer } from "react-toastify";


const Dashboardlayout = ({ children }) => {
  return (
    <>
      <div>

        <Sidebar />

        <div className="ml-52 font-roboto flex flex-col justify-center items-center">
          <Navbar />

          <div className="text-white ">{children}</div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
};

export default Dashboardlayout;
