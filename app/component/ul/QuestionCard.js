import React from 'react'
import Link from 'next/link'
import { RiShareForwardLine, RiUserFollowLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
import { CgClose } from 'react-icons/cg';
import { SlUserFollow } from 'react-icons/sl';



function QuestionCard({ img, author, ques, answer, likes, date }) {
  return (
    <div className=' bg-white relative px-1 w-full   lg:px-2 lg:w-[360px] lg:mr-[0.2rem]      my-auto   h-[180px] flex items-start  text-[15px] p-2  rounded-md shadow-lg'>
      <div className='flex flex-col h-full justify-between items-start'>
        <div className='flex items-start justify-start gap-x-[3px]'>
          <img src={img} className='w-7 h-7 rounded-full' alt="" />
          <span className='flex items-start justify-start gap-x-[3px] text-[15px]'> Asked by <h1 className='font-bold'>@{author}</h1> <span className='flex items-center justify-center'><LuDot /> {date}</span></span>
        </div>
        <p className='text-[15px] text-wrap leading-5'>{ques}</p>
        <div className='flex w-full items-start gap-x-1 justify-start text-[14px]'>
          <div className='flex items-center gap-x-[0.3rem]'>
            <span >{answer}</span>
            <span>answer</span>
          </div>
          <div className='flex items-center gap-x-[0.3rem]'>
            <span >{likes}</span>
            <span>views</span>
          </div>
        </div>
        <div className='w-full flex items-center justify-start gap-x-4'>
          <Link href='/edit' className='flex items-center gap-x-2 bg-slate-50 px-2 py-1 text-[14px] justify-center'><FaRegEdit />
            Answer</Link>
          <button type='button' className='flex text-[14px] bg-slate-50 px-2 py-1 items-center gap-x-2 justify-center'><SlUserFollow />  Follow</button>
          <Link href='/edit' className='flex text-[14px] bg-slate-50 px-2 py-1 items-center gap-x-2 justify-center'><RiShareForwardLine /> Repost</Link>
        </div>
      </div>
      <span><HiDotsHorizontal className='absolute bottom-4 right-2' /></span>
      <span><CgClose className='absolute top-4 right-2' /></span>
    </div>
  )
}

export default QuestionCard
