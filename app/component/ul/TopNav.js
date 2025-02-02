"use client";

import Link from "next/link";
import React from "react";
import { BiBell, BiEditAlt, BiSearch } from "react-icons/bi";
import {  FaBoltLightning } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import {useShow} from '../store/states'

export default function NavTop() {
    const { onRemove, menu,onNavMenu } = useShow();



    return (
        <div className="flex lg:w-full z-10   fixed top-0 md:w-[100%] md:flex-row md:mx-auto   w-full   bg-white h-[3.5rem] lg:h-[5rem] items-center  lg:gap-x-9 justify-between mx-auto border-b-2 text-center px-3   lg:px-[3rem]">
            <h1 className="text-6xl font-extrabold rotate-[34deg] text-blue-900 hidden lg:flex sm:flex 2xl:text-[4rem]">
                <FaBoltLightning/>
            </h1>
            <div className="flex items-center justify-between ">
                <div className="lg:w-[520px]  mr-[10rem] flex items-center bg-transparent lg:border-2  py-2 px-4  mx-auto rounded-full">
                    <BiSearch className="text-2xl text-gray-400 " />
                    <input
                        type="text"
                        placeholder="Search Mastakai"
                        className=" hidden mx-auto outline-none lg:flex ml-4 bg-transparent  lg:w-[460px] w-[200px] md:w-[250px]"
                    />
                </div>
                <div className="flex  items-center gap-x-3 lg:gap-x-[2rem] md:flex md:justify-between md:gap-x-6 md:flex-row ">
                    <Link href='/create' className="flex items-center justify-center gap-x-2 bg-blue-900 text-white px-4 w-[50px] lg:w-[100px] py-1 lg:py-2 rounded-md text-[1rem]"> <BiEditAlt className="text-2xl" /> <span className="hidden lg:flex">Create</span></Link>
                    <div className="relative">
                        <div className="w-2 h-2 lg:w-2 lg:h-2   absolute right-[3px] top-[1px] text-[13px] font-extrabold rounded-full bg-red-500 text-white text-center flex items-center justify-center">
                        </div>
                        <BiBell className="text-[1.5rem]  lg:text-3xl " />
                    </div>
                    <span className="md:inline-block   border-[1px] font-bold text-blue-900 border-blue-950 bg-blue-100  hidden py-[1px]  px-[0.4rem] items-center  lg:flex  justify-center rounded-full text-[15px]">S</span>
                    <RxHamburgerMenu className="lg:hidden flex  text-[1.4rem] w-[1.4rem]" onClick={onNavMenu}/>
                </div>
            </div>
        </div>
    );
}
