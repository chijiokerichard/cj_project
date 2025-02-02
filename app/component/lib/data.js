import { WifiIcon } from "@heroicons/react/16/solid";
import { CiBookmark, CiSettings } from "react-icons/ci";
import { IoBookOutline, IoTrendingUpOutline } from "react-icons/io5";
import { LiaBoltSolid } from "react-icons/lia";
import { MdOutlineLiveHelp} from "react-icons/md";

export const list=[
    {name:"Feed",id:'3',href:'/',icon:<WifiIcon className=" rotate-[40deg] h-6 w-6" />
    },
    {name:"Trending",id:'4',href:'/component/pages/trendings',icon:<IoTrendingUpOutline  className=" rotate-[40deg] h-6 w-6"/>

    },
    {name:"Blog",id:'5',href:'/component/pages/blog',icon:<IoBookOutline className=" h-6 w-6"/>
    },
    {name:"Bookmarks",id:'6',href:'/component/pages/bookmark',icon:<CiBookmark  className=" h-6 w-6"/>    },
]

export const secondList = [
    {name:"Help/support",id:'6',href:'/component/pages/help&support',icon:<MdOutlineLiveHelp  className=" h-6 w-6"/>    },
    {name:"Settings",id:'6',href:'/component/pages/settings',icon:<CiSettings  className=" h-6 w-6"/>    },
    {name:"About Mastakai",id:'6',href:'/component/pages/about',icon:<LiaBoltSolid className=" h-6 w-6"/>    },

]

export const questions =[
    {id:1,img:'/about-2.png',author:"christopher",date:'1/2/2020', answer:8,likes:7,ques:'what is the best way to find affordable housing as a newcomer in vacouver?'},
    {id:2,img:'/about-3.png',author:"christopher",date:'1/2/2020', answer:8,likes:2,ques:'what is the best way to find affordable housing as a newcomer in vacouver?'},
    {id:3,img:'/about-4.png',author:"christopher",date:'1/2/2020', answer:8,likes:2,ques:'what is the best way to find affordable housing as a newcomer in vacouver?'}
]
