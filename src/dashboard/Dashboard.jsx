import React, { useContext } from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { AuthContext } from '../contects/AuthProvider';
import SideBar from './SideBar';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Dashboard = () => {
  const {user} = useContext(AuthContext)

  

  return (
    <section className=" w-full h-full py-40 px-16 z-40 gap-6 bg-teal-400">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            Dashboard
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-700 mx-auto">
            Welcome back, {user?.displayName || "Demo User"}!
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-cyan-200 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-slate-800 cursor-pointer">
                Books
              </h3>
              <p className=' text-3xl font-bold text-slate-800'>
                  32
              </p>
            </div>
          </div>
          <div className="bg-cyan-200 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-slate-800">
                Total Sales
              </h3>
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-800">
                  0
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cyan-200 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-slate-800">
                Books Listed
              </h3>
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-800">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Dashboard