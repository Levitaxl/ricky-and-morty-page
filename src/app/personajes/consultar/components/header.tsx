'use client';

import React, { useContext } from 'react';
import { CardTitle, CardHeader, Card } from "@/components/ui/card"
import {tableContext} from './sidebar'
import {handleClickContext} from '../page'

  

export const HeaderComponent = ( ) => {
    const showElements = useContext(tableContext)
    const handleClik = useContext(handleClickContext);

  return (
    <div className={`flex-1 pl-[30px] mr-[15px]  ${showElements && 'ml-[250px]'} ${!showElements && 'ml-[115px]'} '}`} >
        <div className ="fixed w-full mr-[10px] z-10 h-[30px] bg-gray-200">
        <div className ={`fixed w-full mr-[10px] z-10 mt-[15px]  ${showElements && 'pr-[295px]'}   ${!showElements && 'pr-[160px]'} '}`} >
            <Card className="w-full mr-[10px] shadow-[0 4px 24px 0 rgba(34,41,47,0.1))]" >
            <CardHeader className="p-4 flex flex-row">
                <SideBarIcon onClick={handleClik} className="h-5 w-5 text-gray-500 dark:text-gray-400 m-auto mx-0 cursor-pointer	" />

            
                <div className="flex ml-[15px]">
                <CardTitle className="text-[#799FCB] text-sm/[17px]">Hermes Sanchez
                <br/>
                <span className="text-[#6e6b7b] text-sm/[13px] mt-[-8px]">Super Administrator</span>
                </CardTitle>
                </div>
            </CardHeader>
            </Card>
        </div>
        </div>
  </div>
  )};

  function SideBarIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
  
      </svg>
    )
  }