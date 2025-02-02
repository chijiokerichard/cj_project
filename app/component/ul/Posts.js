import { PencilIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FiThumbsDown } from 'react-icons/fi'
import { GiOpenPalm } from 'react-icons/gi'
import { GoShare, GoThumbsup } from 'react-icons/go'
import { HiDotsHorizontal, HiOutlineEye, HiOutlineLightBulb } from 'react-icons/hi'
import { LuDot } from 'react-icons/lu'
import { PiPencilCircleThin } from 'react-icons/pi'
import { TfiAngleDown } from 'react-icons/tfi'

function Posts() {
    return (
        <div className="h-full w-full ">
            <div className='relative w-full mx-auto flex items-start justify-between'>
                <div className=" lg:w-[720px] w-full">
                    <div className='flex flex-col  lg:flex-col items-center justify-center h-full gap-y-1 '>
                        <div className='flex w-full items-center justify-between lg:justify-end px-2'>
                            <span className='lg:hidden flex text-[15px]'>Posts</span>
                            <h1 className='text-right flex items-center lg:justify-end text-[16px] gap-x-3'>Sort by: <span className='font-bold'>recent</span><TfiAngleDown /></h1>
                        </div>
                        <div className=' lg:w-[720px] w-full border-[2px] h-auto bg-white py-4   relative lg:px-4 my-auto l   flex items-center  text-[17px] p-2  rounded-md shadow-sm'>
                            <div className='flex flex-col gap-y-[1.5rem] h-full justify-between items-start'>
                                <div className='flex items-center  justify-start lg:gap-x-[15px]'>
                                    <img src='/about-5.png' className='w-[3rem] h-[3rem] rounded-full' alt="" />
                                    <div className='flex flex-col items-start leading-6 justify-start'>
                                        <span className='flex items-start justify-start gap-x-[3px] text-[18px]'><h1 className='font-bold'>CityRun</h1> <span className='flex items-center justify-center'><LuDot /> 2h</span></span>
                                        <h1>Newbie Navigator</h1>
                                    </div>
                                </div>
                                <h1 className='text-[20px] text-wrap font-bold mb-[-15px]'>How will you and your family survive if you gree</h1>
                                <p className='text-[17px] text-wrap leading-5'>How will you and your family survive if you
                                    depend on salary. How many years will it take you to save money from your salary
                                    work that will build you your
                                    your family survive if you depend on salary.<span className='text-blue-800'>
                                        ...Read more</span>
                                </p>
                                <div className='w-full flex items-center justify-bewteen px-1 gap-x-3 '>
                                    <div className='flex items-center gap-x-3   lg:gap-x-2 bg-slate-50   text-[15px] lg:text-[18px] lg:justify-center justify-between rounded-md  '>
                                        <GoThumbsup /> 20 Agree <FiThumbsDown />
                                    </div>
                                    <button type='button' className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'>
                                        <PiPencilCircleThin className='flex' />
                                        <span>1</span>
                                    </button>
                                    <div className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'><HiOutlineEye />  12</div>
                                </div>
                            </div>
                            <span><HiDotsHorizontal className='absolute  top-4 right-5' /></span>
                            <span className='flex items-center justify-center absolute  right-5 bottom-[1.5rem] lg:bottom-4 gap-x-1 lg:gap-x-2'><GoShare className=' text-[18px]' /> <span className='text-[18px] hidden lg:flex'>Share</span></span>
                        </div>
                        <div className=' lg:w-[720px] w-full  border-[2px] h-auto bg-white   relative lg:px-4 px-1 my-auto   flex items-center  text-[17px] p-2  rounded-md shadow-sm'>
                            <div className='flex flex-col w-full lg:gap-y-[1.5rem] gap-y-[1rem] h-full justify-between items-start'>
                                <div className='flex items-center  justify-start gap-x-[15px]'>
                                    <img src='/about-5.png' className='w-[3rem] h-[3rem] rounded-full' alt="" />
                                    <div className='flex flex-col items-start leading-6 justify-start'>
                                        <span className='flex items-start justify-start gap-x-[3px] text-[18px]'><h1 className='font-bold'>CityRun</h1> <span className='flex items-center justify-center'><LuDot /> 2h</span></span>
                                        <h1>Newbie Navigator</h1>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mb-[-15px] lg:leading-7 leading-5'>How will you and your family survive if you gree</h1>
                                <p className='text-[17px] text-wrap mt-1 lg:mt-0 leading-5'>How will you and your family survive if you
                                    depend on salary. How many years will it take you to save money from your salary
                                    work that will build you your
                                    your family survive if you depend on salary.<span className='text-blue-800'>...Read more</span>
                                </p>
                                <div className='lg:w-[100%]   flex items-center mx-auto gap-x-[1px] lg:gap-x-[0.3rem] justify-center'>
                                    <img src="/cake (13).jpg" className=' flex-1 w-1/2 rounded-md lg:h-[200px] h-[200px]' alt="" />
                                    <img src="/cake (16).jpg" className='  flex-1 w-1/2 rounded-md lg:h-[200px] h-[200px]' alt="" />
                                </div>
                                <div className='w-full flex items-center justify-bewteen px-1 gap-x-3 '>
                                    <div className='flex items-center gap-x-3   lg:gap-x-2 bg-slate-50   text-[15px] lg:text-[18px] lg:justify-center justify-between rounded-md  '>
                                        <GoThumbsup /> 20 Agree <FiThumbsDown />
                                    </div>
                                    <button type='button' className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'>
                                        <PiPencilCircleThin className='flex' />
                                        <span>1</span>
                                    </button>
                                    <div className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'><HiOutlineEye />  12</div>
                                </div>
                            </div>
                            <span><HiDotsHorizontal className='absolute  top-4 right-5' /></span>
                            <span className='flex items-center justify-center absolute  right-5 bottom-[1rem] lg:bottom-4 gap-x-2'><GoShare className=' text-[18px]' /> <span className='text-[18px] hidden lg:flex'>Share</span></span>
                        </div>
                        <div className='lg:w-[720px] w-full border-[2px] h-auto bg-white   relative lg:px-4 px-2 my-auto l   flex items-center  lg:text-[17px] p-2  rounded-md shadow-sm'>
                            <div className='flex flex-col gap-y-[1.5rem] h-full justify-between items-start'>
                                <div className='flex items-center  justify-start gap-x-[15px]'>
                                    <img src='/about-5.png' className='w-[3rem] h-[3rem] rounded-full' alt="" />
                                    <div className='flex flex-col items-start leading-6 justify-start'>
                                        <span className='flex items-start justify-start gap-x-[3px] text-[18px]'><h1 className='font-bold'>CityRun</h1> <span className='flex items-center justify-center'><LuDot /> 2h</span></span>
                                        <h1>Newbie Navigator</h1>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mb-[-15px]'>How will you and your family survive if you gree</h1>
                                <p className='text-[17px] text-wrap leading-5'>How
                                    depend on salary. How many years will it take you to save money from your salary
                                    work that will your family survive if you depend on salary.?
                                </p>
                                <div className='w-auto flex items-center h-auto mx-auto lg:gap-x-[0.8rem] gap-x-[0.4rem] bg-slate-50 justify-center'>
                                    <img src="/images.jpeg" className=' rounded-md lg:h-[120px] w-[180px] grow h-[200px]' alt="" />
                                    <div className='flex items-start full justify-between w-full flex-col'>
                                        <p className='font-bold text-wrap text-[15px] lg:hidden leading-4 mb-[15px] '>how to survive when hunger dey catch you</p>
                                        <p className='lg:text-[17px] text-[15px]  lg:leading-7 h-full grow leading-4 text-wrap'>How
                                            depend on salary. How many years will it take you to save money from your salary
                                            work that will your family survive if you depend on salary.?
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-bewteen px-1 gap-x-3 '>
                                    <div className='flex items-center gap-x-3   lg:gap-x-2 bg-slate-50   text-[15px] lg:text-[18px] lg:justify-center justify-between rounded-md  '>
                                        <GoThumbsup /> 20 Agree <FiThumbsDown />
                                    </div>
                                    <button type='button' className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'>
                                        <PiPencilCircleThin className='flex' />
                                        <span>1</span>
                                    </button>
                                    <div className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'><HiOutlineEye />  12</div>
                                </div>
                            </div>
                            <span><HiDotsHorizontal className='absolute  top-4 right-5' /></span>
                            <span className='flex items-center justify-center absolute  right-5 bottom-[0.8rem] lg:bottom-4 gap-x-2'><GoShare className=' text-[18px]' /> <span className='text-[18px] hidden lg:flex'>Share</span></span>
                        </div>
                        <div className='lg:w-[720px] w-full border-[2px] h-auto bg-white px-1   relative lg:px-4 my-auto l   flex items-center  text-[17px] py-1  rounded-md shadow-sm'>
                            <div className='flex flex-col gap-y-[1.5rem] h-full justify-between items-start'>
                                <div className='flex items-center  justify-start gap-x-[15px]'>
                                    <img src='/about-5.png' className='w-[3rem] h-[3rem] rounded-full' alt="" />
                                    <div className='flex flex-col items-start leading-6 justify-start'>
                                        <span className='flex items-start justify-start gap-x-[3px] text-[18px]'><h1 className='font-bold'>CityRun</h1> <span className='flex items-center justify-center'><LuDot /> 2h</span></span>
                                        <h1>Newbie Navigator</h1>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mb-[-15px]'>How will you and your family survive if you gree</h1>
                                <p className='text-[17px] text-wrap leading-5'>How
                                    depend on salary. How many years will it take you to save money from your salary
                                    work that will your family survive if you depend on salary.?
                                </p>

                                <div className='w-full flex items-center justify-bewteen px-1 gap-x-3 '>
                                    <div className='flex items-center gap-x-3   lg:gap-x-2 bg-slate-50   text-[15px] lg:text-[18px] lg:justify-center justify-between rounded-md  '>
                                        <GoThumbsup /> 20 Agree <FiThumbsDown />
                                    </div>
                                    <button type='button' className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'>
                                        <PiPencilCircleThin className='flex' />
                                        <span>1</span>
                                    </button>
                                    <div className='flex px-2 lg:w-[100px]  text-[15px] items-center bg-slate-50 justify-center gap-x-1'><HiOutlineEye />  12</div>
                                </div>
                            </div>
                            <span><HiDotsHorizontal className='absolute  top-4 right-5' /></span>
                            <span className='flex items-center justify-center absolute  right-5 bottom-[0.8rem] lg:bottom-4 gap-x-2'><GoShare className=' text-[18px]' /> <span className='text-[18px] hidden lg:flex'>Share</span></span>
                        </div>
                    </div>
                </div>
                <div className="  py-5 w-[340px] mt-[1rem] justify-between flex-col h-full  mb-[3rem] hidden  lg:absolute right-2 ml-auto  lg:flex items-center">
                    <div className='h-[230px]  w-full border-[1px]   flex flex-col justify-between border-blue-900 bg-white p-3 rounded-md'>
                        <div className='flex items-center justify-start'>
                            <HiOutlineLightBulb className='text-2xl' />
                            <span className='text-[17px]'>Quick Tip</span>
                        </div>
                        <p className='text-[17px] leading-6'>
                            Do you know? Canada Please all those in my dm kindly
                            be patient. My WhatsApp was banned and
                            I just succeeded in getting it unbanned now, I'll make sure I respond to everyone
                        </p>
                        <div className='flex items-center justify-start gap-x-2'>
                            <p className='text-[15px] text-gray-500'>Did you find this helpful?</p>
                            <button className='text-[14px] text-gray-500 w-8 flex items-center justify-center  h-7 rounded-full bg-slate-200'>Yes</button>
                            <button className='text-[14px] text-gray-500 w-8  h-7 flex items-center justify-center rounded-full bg-slate-200'>No</button>
                        </div>
                    </div>
                    <div className='h-[420px] w-full border-[1px]    flex flex-col justify-between border-blue-900 bg-white p-3 rounded-md'>
                        <div className='flex items-center py-2 justify-between'>
                            <h4 className='text-[20px] '>sponspored</h4>
                            <CgClose />
                        </div>
                        <img src="/banner-10.jpg" className='h-full rounded-md w-full' alt="" />
                    </div>
                    <div className='h-[230px]  w-full border-[1px]   flex flex-col justify-between border-blue-900 bg-white p-3 rounded-md'>
                        <div className='flex items-center justify-start'>
                            <HiOutlineLightBulb className='text-2xl' />
                            <span className='text-[17px]'>Quick Tip</span>
                        </div>
                        <p className='text-[17px] leading-6'>
                            Do you know? Canada Please all those in my dm kindly
                            be patient. My WhatsApp was banned and
                            I just succeeded in getting it unbanned now, I'll make sure I respond to everyone
                        </p>
                        <div className='flex items-center justify-start gap-x-2'>
                            <p className='text-[15px] text-gray-500'>Did you find this helpful?</p>
                            <button className='text-[14px] text-gray-500 w-8 flex items-center justify-center  h-7 rounded-full bg-slate-200'>Yes</button>
                            <button className='text-[14px] text-gray-500 w-8  h-7 flex items-center justify-center rounded-full bg-slate-200'>No</button>
                        </div>
                    </div>
                    <div className='h-[420px] w-full border-[1px]   flex flex-col justify-between border-blue-900 bg-white p-3 rounded-md'>
                        <div className='flex items-center py-2 justify-between'>
                            <h4 className='text-[20px] '>sponspored</h4>
                            <CgClose />
                        </div>
                        <img src="/product-10-1.jpg" className='h-full rounded-md w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
