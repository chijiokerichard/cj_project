import React, { ReactNode, useContext, useState, } from 'react'
import btn from '../../login/login.module.css'
import { myDatasContext } from '../redux/context'
import clsx from "clsx"




// type btn = "submit" | "reset" | "button"
// interface Props {
//   children?:ReactNode,
//   className?:string,
//   type?:btn /*or "submit" |'reset' | 'button' */
//   onClick?:()=> void,
//   active?:boolean
// }

function Button({children,className,type,active,onClick}:{children:ReactNode,type:"submit" | "reset"|"button", className:string,active:boolean,onClick?:()=>void}) {

  const [bump,setBump]=useState<boolean>(false)

  function bumpBtn():void {
    setBump( true);
    setTimeout(() => {
      setBump(false);
    },100);
  }
  return (
    <div>
      <h1 className={clsx(
        'bg-red',
        {
          'bg-green-600':active === true,
          'bg-red-600':active === false,
        },
      )}>hello</h1>
    <button onClick={onClick?onClick:bumpBtn} type={type?type: "button"}   className={className? className.concat(` bg-green-800 ${bump? btn.btn : ''} text-white  rounded-full ${className?"":'p-4'} inline-block w-[200px] mx-auto`) :  `bg-green-800 ${bump? btn.btn : ''} text-white rounded-full p-4 inline-block w-[200px] mx-auto`} >{ children}</button>
    </div>
  )
}

export default Button
