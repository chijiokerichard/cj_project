'use client'
import { create } from 'zustand'


export const useShow = create((set)=>({
    menu:false,
    setMenu:(menu)=>set({menu}),
    onRemove:()=>set((state)=>({menu:!state.menu})),
    disableDropdown:()=>set((state)=>({menu:state.menu=false})),
    navMenu:false,
    onNavMenu:()=>set((state)=>({navMenu:!state.navMenu})),

}))

