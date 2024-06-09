'use client';

import React, { useContext,createContext } from 'react';
import Link from "next/link"
import {HeaderComponent} from "./header"
import {userContext} from "../page"
import '../styles/sidebar.css'

export const tableContext = createContext({});

export const SidebarComponent = ( ) => {

    const showElementsSidebar = useContext(userContext)

  return (
      <div className=  {` sidebar-component ${showElementsSidebar && 'w-[16.3rem]'} ${!showElementsSidebar && 'w-32'}`}>
        <aside className=  {` sidebar h-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-75 transition-all	duration-100 fixed ${showElementsSidebar && 'w-64'} ${!showElementsSidebar && 'w-32'}`}>
            <div className="border-b-2 pt-[8px] h-[92px] ">
              <div className="logo-icon flex justify-center"><img className="h-[75px] " src="http://localhost:3000/logo.png"/></div>
            </div>
            <ul>
              <li className={`flex items-center  hover:bg-gray-100 dark:hover:bg-gray-700 p-4  ${!showElementsSidebar && 'm-auto'} ` } >
                <Link className={`flex items-center space-x-4  ${!showElementsSidebar && 'm-auto'} ` }  href="#">
                  <HomeIcon className={`h-5 w-5 text-gray-500 dark:text-gray-400  ${showElementsSidebar && 'm-auto'} ` }  />
                  {showElementsSidebar &&  <span className="text-sm font-medium">Crear Personaje</span>}
                </Link>
              </li>
              <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link className={`flex items-center space-x-4  ${!showElementsSidebar && 'm-auto'} ` }  href="#">
                  <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  {showElementsSidebar &&  <span className="text-sm font-medium">Personajes</span>}
                </Link>
              </li>
              <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Link className={`flex items-center space-x-4  ${!showElementsSidebar && 'm-auto'} ` }  href="#">
                  <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  {showElementsSidebar &&  <span className="text-sm font-medium">Episodios</span>}
                </Link>
              </li>
            </ul>
        </aside>
      <tableContext.Provider value={showElementsSidebar}>
          <HeaderComponent />
      </tableContext.Provider> 

      </div>
  )};

function SettingsIcon(props:any) {
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  

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
  