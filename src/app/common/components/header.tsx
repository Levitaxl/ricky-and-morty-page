'use client';

import React, { useContext } from 'react';
import { CardTitle, CardHeader, Card } from "@/components/ui/card"
import {tableContext} from './sidebar'
import {handleClickContext} from "../contexts/contexts"
import { useRouter } from 'next/navigation';

  

export const HeaderComponent = ( ) => {
    const showElements = useContext(tableContext)
    const handleClik = useContext(handleClickContext);
    const router = useRouter();


    const handleClickLogOut = async () => {

      router.push('/'); // Cambiar '/pagina-destino' a la URL deseada
    }
  return (
    <div className={`header flex-1 pl-[30px] mr-[15px]  ${showElements && 'ml-[250px]'} ${!showElements && 'ml-[115px]'} '}`} >
        <div className ="fixed w-full mr-[10px] z-10 h-[30px] sidebar-pr-responsive-hs bg-gray-200">
        <div className ={`fixed w-full mr-[10px] z-10 mt-[15px]  sidebar-pr-responsive ${showElements && 'pr-[295px]'}   ${!showElements && 'pr-[160px]'} '}`} >
            <Card className="w-full mr-[10px] shadow-[0 4px 24px 0 rgba(34,41,47,0.1))]" >
            <CardHeader className="p-4 flex flex-row justify-between	">
              

            
                <div className="flex">
                    <SideBarIcon onClick={handleClik} className="h-5 w-5 text-gray-500 dark:text-gray-400 m-auto mx-0 cursor-pointer	" />
                
                    <div className="flex ml-[15px]"></div>
                    <CardTitle className="text-[#799FCB] text-sm/[17px]">User Admin
                    <br/>
                    <span className="text-[#6e6b7b] text-sm/[13px] mt-[-8px]">Super Administrator</span>
                  </CardTitle>
                </div>

                <LogOutIcon onClick={handleClickLogOut} className={`!block h-5 w-5 text-gray-500 dark:text-gray-400 cursor-pointer` }  />
                  
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

  function LogOutIcon(props:any) {
    return (
      
      <svg   {...props} fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 384.971 384.971" >
<g>
	<g id="Sign_Out">
		<path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z"/>
		<path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"/>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
</g>
</svg>
    )
  }