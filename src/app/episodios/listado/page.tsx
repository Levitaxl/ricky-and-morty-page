/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fuOSwiWdpXi
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
'use client';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/table-core';
import { ArrowUpDown } from 'lucide-react';
import React, { useState, useEffect, createContext} from 'react';
import {TableComponent} from "./components/table"
import { SidebarComponent} from "../../common/components/sidebar"
import {MenuResponsive} from "../../common/components/menuResponsive"
import Link from "next/link"
import {userContext, tableContext,handleClickContext,columnsContext} from "../../common/contexts/contexts"


export default function listado() {
  const [showElements, setShowElements] = useState<boolean>(false); // Estado para controlar la visibilidad
  const [data, setData] = useState<any[]>([]);


  const handleClick = async () => {
    setShowElements(!showElements)
  };

  type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
  }

  const columns: ColumnDef<Episode>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            id
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <Link href={"consultar?id="+row.getValue("id")}>
        <div className="text-blue-500 font-bold hover:underline">
          {row.getValue("name")}
        </div>
    </Link>
    
    ,
    },
  
    {
      accessorKey: "air_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            air_date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("air_date")}</div>,
    },
  
    {
      accessorKey: "episode",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            episode
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("episode")}</div>,
    }
  ]
  
  useEffect(() => {
    const fetchEpisodes = async () => {
      const dataSaved = localStorage.getItem("episodes");
      if(dataSaved==null){
        return;
      }

      else  setData(JSON.parse(localStorage.getItem("episodes")));

      console.log(JSON.parse(localStorage.getItem("episodes")))

      
    };

    fetchEpisodes();

  }, []);

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <userContext.Provider value={showElements}>
        <handleClickContext.Provider value={handleClick}>
          <SidebarComponent />
        </handleClickContext.Provider>
      </userContext.Provider> 

      <tableContext.Provider value={data}>
          <userContext.Provider value={showElements}>
          <columnsContext.Provider value={columns}>
              <TableComponent />
            </columnsContext.Provider>
          </userContext.Provider> 
      </tableContext.Provider> 

      <MenuResponsive/>


  


  </div>)}









