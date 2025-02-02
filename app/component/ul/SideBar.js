"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { list, secondList } from "../lib/data";
import { usePathname } from "next/navigation";

import { MdClose } from "react-icons/md";
import { useShow } from "../store/states";
import { TfiAngleDown } from "react-icons/tfi";
import { GoPerson } from "react-icons/go";

export default function Sidenav() {
  const pathname = usePathname();
  const { navMenu, onNavMenu,onRemove } = useShow();
  return (
    <div
      className={` bg-white lg:top-[13%] top-0    right-0 fixed  w-[14rem] lg:pb-4 h-full z-20  bottom-0   lg:flex flex-col 
       text-gray-900 
      px-4  lg:left-0  md:w-64    justify-between md:fixed   lg:w-[14rem] border-r
     border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white 
     ${
      navMenu
        ? `w-[14rem] right-0  lg:flex-col   transition-all duration-[0.7s] ease-in`
        : `w-64 right-[-100%] transition-all duration-[0.7s] ease-out`
    }
     `}
    >
      <MdClose
      onClick={onNavMenu}
        className={`text-[1.5rem] cursor-pointer absolute text-2xl top-[1%] md:top-[2.7%]  right-[10%]  lg:hidden`}
      />
      <div className="flex flex-col  gap-y-[1.3rem] w-full">
        <div className="flex flex-col lg:gap-y-[23px] w-full gap-y-[20px] py-7  lg:py-7">
          <div className="flex mr-4 flex-col items-start  justify-items-start w-full h-full gap-y-[20px] pb-7 border-b-[2px] ">
            <div
            className={clsx(
              "flex items-center py-0  lg:py-2 justify-start  gap-x-[13px] w-[100%] lg:px-2 text-[15px] text-slate-500",
              
            )}
            >
            <span className="lg:hidden flex text-left  items-center py-2 justify-start  gap-x-[13px] w-[100%] px-2 text-[15px] text-slate-500"
            ><GoPerson className=" h-6 w-6"/>     Account</span>
          <TfiAngleDown
            className=" cursor-pointer lg:hidden inline"
            onClick={onRemove}
          />
            </div>
            {list.map((list) => (
              <Link 
                href={list.href}
                className={clsx(
                  "flex items-center py-1 justify-start  gap-x-[13px] w-[100%] px-2 text-[15px] text-slate-500",
                  {
                    "  text-left py-2  bg-blue-50 text-violet-900  rounded-md":
                      pathname === list.href
                  }
                )}
                key={list.id}
              >
                {list.icon}
                {list.name}
              </Link>
            ))}
          </div>
          <h1 className=" text-[15px] px-2 lg:pb-4 text-gray-400">
            Resources
          </h1>
          {secondList.map((list) => (
              <Link 
                href={list.href}
                className={clsx(
                  "flex items-center justify-start gap-x-[13px] w-[100%] px-2 text-[15px] text-slate-500",
                  {
                    " w-[100%] text-left py-2 bg-blue-50 text-violet-900  rounded-md":
                      pathname === list.href
                  }
                )}
                key={list.name}
              >
                {list.icon}
                {list.name}
              </Link>
            ))}
        </div>
      </div>
     
    </div>
  );
}
