/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fuOSwiWdpXi
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
'use client';
import React, { useState, useEffect  } from 'react';
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/app/sidebar/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export default function sidebar() {

  const [showElements, setShowElements] = useState(true); // Estado para controlar la visibilidad

  const handleClick = async () => {
    setShowElements(!showElements)
  };


  const [charactersRickAndMorty, setCharactersRickAndMorty] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      const first20Characters = data.results;

      const response2 = await fetch('https://rickandmortyapi.com/api/character?page=2');
      const data2 = await response2.json();
      const first20Characters2 = data2.results;

      const response3 = await fetch('https://rickandmortyapi.com/api/character?page=3');
      const data3 = await response3.json();
      const first20Characters3 = data3.results;

      const charactersNew = Array.from([...first20Characters, ...first20Characters2, ...first20Characters3]);

      localStorage.setItem('characters', JSON.stringify(charactersNew)); // Guardar en LocalStorage

      setCharactersRickAndMorty(charactersNew);
      
    };

    fetchCharacters();
    console.log(charactersRickAndMorty);

  }, []);

  

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <aside className=  {` bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-75 transition-all	duration-500  ${showElements && 'w-64'} ${!showElements && 'w-32'}`}>
        <div className="border-b-2 pt-[8px] h-[92px] ">
          <div className="logo-icon flex justify-center"><img className="h-[75px] " src="./logo.png"/></div>
        </div>
        <ul>
          <li className={`flex items-center  hover:bg-gray-100 dark:hover:bg-gray-700 p-4  ${!showElements && 'm-auto'} ` } >
            <Link className={`flex items-center space-x-4  ${!showElements && 'm-auto'} ` }  href="#">
              <HomeIcon className={`h-5 w-5 text-gray-500 dark:text-gray-400  ${showElements && 'm-auto'} ` }  />
              {showElements &&  <span className="text-sm font-medium">Crear Personaje</span>}
            </Link>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
          <Link className={`flex items-center space-x-4  ${!showElements && 'm-auto'} ` }  href="#">
              <UsersIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              {showElements &&  <span className="text-sm font-medium">Personajes</span>}
            </Link>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
          <Link className={`flex items-center space-x-4  ${!showElements && 'm-auto'} ` }  href="#">
              <SettingsIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              {showElements &&  <span className="text-sm font-medium">Episodios</span>}
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 mt-[15px] pl-[30px] mr-[15px]">
        <div className ="">
          <Card className="w-full mr-[10px] shadow-[0 4px 24px 0 rgba(34,41,47,0.1))]" >
            <CardHeader className="p-4 flex flex-row">
               <SideBarIcon onClick={handleClick} className="h-5 w-5 text-gray-500 dark:text-gray-400 m-auto mx-0 cursor-pointer	" />
  
          
              <div className="flex ml-[15px]">
                <CardTitle className="text-[#799FCB] text-sm/[17px]">Hermes Sanchez
                <br/>
                <span className="text-[#6e6b7b] text-sm/[13px] mt-[-8px]">Super Administrator</span>
                </CardTitle>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className ="pt-[13px]">
          <Card className="w-full mr-[10px] shadow-[0 4px 24px 0 rgba(34,41,47,0.1))]" >
          <div className="grid grid-cols-1 divide-y">
              <CardHeader className="p-4 flex flex-row ">
                  <CardTitle className="text-[25px]">Listado de personajes</CardTitle>
              </CardHeader>

              <CardContent>

                    <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] font-bold	">Invoice</TableHead>
                  <TableHead className="w-[100px] font-bold	">Status</TableHead>
                  <TableHead className="w-[100px] font-bold	">Method</TableHead>
                  <TableHead className="w-[100px] font-bold	">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {charactersRickAndMorty.map((element) => (
                  <TableRow key={element.id}>
                    <TableCell >{element.name}</TableCell>
                    <TableCell>{element.status}</TableCell>
                    <TableCell>{element.image}</TableCell>
                    <TableCell>{element.species}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>

              </CardContent>

              
          </div>

           
          </Card>
        </div>
      </main>
    </div>
  )
}




function HomeIcon(props) {
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

function SideBarIcon(props) {
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


function SettingsIcon(props) {
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


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
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
