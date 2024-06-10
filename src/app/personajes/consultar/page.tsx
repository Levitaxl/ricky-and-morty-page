/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fuOSwiWdpXi
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
'use client';
import React, { useState, useEffect, createContext   } from 'react';
import { Form} from "./components/form"
import { useSearchParams } from 'next/navigation'
import { SidebarComponent} from "../../common/components/sidebar"
import {MenuResponsive} from "../../common/components/menuResponsive"

import {userContext, tableContext,handleClickContext,columnsContext} from "../../common/contexts/contexts"



export default function Consultar() {
  const [showElements, setShowElements] = useState<boolean>(false); // Estado para controlar la visibilidad
  const [personaje, setPersonaje] = useState<any>({}); // Estado para controlar la visibilidad
  const [bool, setBool] = useState<any>(false); // Estado para controlar la visibilidad

  const handleClick = async () => {
    setShowElements(!showElements)
  };

  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchCharacters = async () => {
      const id = searchParams.get('id');
      if(id){
        const personajes = JSON.parse(localStorage.getItem("characters"));
        const personajeNew = personajes.find(elemento => elemento.id == id);

        if(!personajeNew){
          alert('personaje no encontrado');
          return;
        }

        setPersonaje(personajeNew)
        setBool(true);
        //console.log(personajeNew)
      
      } 

      
    };
    if(!bool) fetchCharacters();

  }, []);

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <userContext.Provider value={showElements}>
        <handleClickContext.Provider value={handleClick}>
          <SidebarComponent />
        </handleClickContext.Provider>
      </userContext.Provider> 

      {bool && <Form personaje={personaje}></Form>}

      
      <MenuResponsive/>

      </div>
    );

}