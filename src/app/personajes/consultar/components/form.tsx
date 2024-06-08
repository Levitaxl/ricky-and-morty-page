'use client';
import React, { useContext} from 'react';

import { CardTitle, CardHeader, CardContent, Card } from "@/app/login/components/card"
import { Label } from "@/app/login/components/label"
import { Input } from "@/app/login/components/input"
import { Button } from "@/app/login/components/button"
import {userContext, personajeContext} from "../page"

import '../styles/form.css'

export const Form = () => {
    const showElementsSidebar = useContext(userContext)
    const personaje =  useContext(personajeContext)
    const id = personaje['id'];
    const image = personaje['image'];
    const nombre = personaje['name']
    const especie = personaje['species']
    const gender =  personaje['gender']
    const type = personaje['type']
  return (   
    <Card className="mt-[100px] ml-[17px] divide-y w-full mr-[15px]" >

                <CardHeader className="p-4  w-full flex space-between">
                    <CardTitle className="text-[25px] flex justify-between">Edit Character {nombre}
                
                <Button className="bg-[#1fbad6]" type="submit">
                        BACK TO LISTING
                    </Button></CardTitle>
               
            </CardHeader>
            <CardContent className="bg-[#ffff]">
                <div className="space-y-4 mt-[20px] hs-box-shadow ">
                <div className="logo-icon mt-[10px]"><img src={image}/></div>
                    <div className="space-y-2  max-w-[50%]">
                        <Label htmlFor="Nombre" className="font-bold">Nombre<span className="text-red-600">*</span></Label>
                        <Input id="nombre" placeholder="Nombre" required type="email" value={nombre} />
                    </div>


                    <div className="space-y-2  max-w-[50%]">
                        <Label htmlFor="especie" className="font-bold">especie<span className="text-red-600">*</span></Label>
                        <Input id="especie" placeholder="Nombre" required type="email" value={especie} />
                    </div>

                    <div className="space-y-2  max-w-[50%]">
                        <Label htmlFor="gender" className="font-bold">gender <span className="text-red-600">*</span>   </Label>
                        <Input id="gender" placeholder="gender" required type="email" value={gender} />
                    </div>

                    <div className="space-y-2  max-w-[50%]">
                        <Label htmlFor="gender" className="font-bold">type<span className="text-red-600">*</span></Label>
                        <Input id="type" placeholder="type" required type="email" value={type} />
                    </div>
                    <Button className="w-full bg-[#799FCB]  max-w-[50%] mb-[100px]" type="submit">
                        Update
                    </Button>
                </div>
                
            </CardContent>
    </Card>);
};