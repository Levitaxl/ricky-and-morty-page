'use client';

import React, { useState, useEffect, useContext, createContext, Children } from 'react';

const sidebarContext = createContext();
const sidebarClickContext = createContext();

export function useSidebarContext(){
    return createContext(sidebarContext);
}

export function useSidebarClickContext(){
    return createContext(sidebarClickContext);
}

export const SidebarProvider = (props) => {
    const [showElements, setShowElements] = useState<boolean>(true); // Estado para controlar la visibilidad

    const handleClick = async () => {
        setShowElements(!showElements)
    };

  return (
    <sidebarContext.Provider value={showElements}>
     <sidebarClickContext.Provider value={handleClick}>
        {props.children}
     </sidebarClickContext.Provider>
    </sidebarContext.Provider>
  )};
