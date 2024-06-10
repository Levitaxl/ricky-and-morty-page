'use client';

import React, { useContext,createContext } from 'react';
import Link from "next/link"
import {HeaderComponent} from "./header"
import {userContext} from "../contexts/contexts"
import '../styles/sidebar.css'

export const tableContext = createContext({});

export const SidebarComponent = ( ) => {

    const showElementsSidebar = useContext(userContext)

  return (
      <div className=  {` sidebar-component ${showElementsSidebar && 'w-[16.3rem]'} ${!showElementsSidebar && 'w-32'}`}>
        <aside className=  {` sidebar h-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-75 transition-all	duration-100 fixed ${showElementsSidebar && 'w-64'} ${!showElementsSidebar && 'w-32'}`}>
            <div className="border-b-2 pt-[8px] h-[92px] ">
              <div className="logo-icon flex justify-center"><img className="!h-[75px] " src="http://localhost:3000/logo.png"/></div>
            </div>
            <ul>
              <li className={`flex items-center  hover:bg-gray-100 dark:hover:bg-gray-700 p-4  ${!showElementsSidebar && 'm-auto'} ` } >
                <Link className={`flex items-center  ${showElementsSidebar && 'space-x-4'} ${!showElementsSidebar && 'm-auto flex flex-col'} ` }  href="/personajes/listado">
                  <UsersIcon className={`h-5 w-5 text-gray-500 dark:text-gray-400  ${showElementsSidebar && 'm-auto'} ` }  />
                  <span className="text-sm font-medium m-auto">Characters</span>
                </Link>
              </li>
              <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link className={`flex items-center  ${showElementsSidebar && 'space-x-4'}    ${!showElementsSidebar && 'm-auto flex flex-col'} ` }  href="/episodios/listado">
                  <EpisodesIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium m-auto">Episodes</span>
                </Link>
              </li>
            </ul>
        </aside>
      <tableContext.Provider value={showElementsSidebar}>
          <HeaderComponent />
      </tableContext.Provider> 

      </div>
  )};


  function UsersIcon(props:any) {
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }

  function HomeIcon(props:any) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  function EpisodesIcon(props:any) {
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

      <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 4)"/>

      <path d="m13.5 12.5v-6c0-1.1045695-.8954305-2-2-2h-9c-1.1045695 0-2 .8954305-2 2v6c0 1.1045695.8954305 2 2 2h9c1.1045695 0 2-.8954305 2-2z"/>

      <path d="m15.5 12.5v-6.99481259c0-1.65685425-1.3431458-3-3-3-.0017276 0-.0034553 0-.0051829 0l-8.9948171.01554432"/>

      <path d="m17.5 10.5v-5.99308345c0-2.209139-1.790861-4-4-4-.0023035 0-.004607 0-.0069106 0l-7.9930894.01381519"/>      </svg>
    )
  }
  