'use client';
import React, {  useState } from 'react';

import { CardTitle, CardHeader, CardContent, Card } from "@/app/login/components/card"
import { Label } from "@/app/login/components/label"
import { Input } from "@/app/login/components/input"
import { Button } from "@/app/login/components/button"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

import '../styles/form.css'

export const Form = (props:any) => {
    const [image, setImage] = useState<string>("https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
    const [nombre, setNombre] = useState<string>("");
    const [especie, setEspecie] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [type, setType] = useState<string>("");

    const { toast } = useToast()

    const SendToCreate = async () => {

        let error = ""

        if(nombre=="" || especie=="" || gender=="")  error +="Ingrese los campos de nombre, especie, genero";
        if(error!=""){
            toast({
                variant:"destructive",
                className: 
                    'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                  ,
              title: "Uh oh! Something went wrong.",
              description: error,
              action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
            })

            return;
        }

        toast({
            variant:"default",
            className: 
                'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500	 text-white	 '
              ,
          title: "Personaje creado exitosamente.",
          action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
        })

        const personajes = JSON.parse(localStorage.getItem("characters"));
        const personajeNew = {};
        personajeNew['id'] = personajes.length+1;
        personajeNew['image'] = image;
        personajeNew['name'] = nombre;
        personajeNew['species'] = especie;
        personajeNew['gender'] = gender;
        personajeNew['type'] = type;

        personajes.push(personajeNew)
        console.log(personajes)

        localStorage.setItem('characters', JSON.stringify(personajes)); // Guardar en LocalStorage

        /*
        const personajes = JSON.parse(localStorage.getItem("characters"));
        const personajeNew = personajes.find(elemento => elemento.id == id);

        personajeNew['name'] = nombre;
        personajeNew['species'] = especie;
        personajeNew['gender'] = gender;
        personajeNew['type'] = type;

        personajes[id-1] = personajeNew

        localStorage.setItem('characters', JSON.stringify(personajes)); // Guardar en LocalStorage

        console.log(personajes)
        */
       // console.log(personajes[id])

        return;
    };
  return (   
    <Card className="mt-[100px] ml-[17px] divide-y w-full mr-[15px] max-w-[1200px]" >

                <CardHeader className="p-4  w-full flex space-between">
                    <CardTitle className="text-[25px] flex justify-between">Create Character
                
                    <Link href="listado">
                        <Button className="bg-[#1fbad6]" type="submit">
                            BACK TO LISTING
                        </Button>
                    </Link>
                </CardTitle>
                    
                
               
            </CardHeader>
            <CardContent className="bg-[#ffff]">
                <div className="mt-[20px] hs-box-shadow flex ">
                  
                        <div className="logo-icon mt-[10px] w-full m-auto flex w-[150%] max-w-[355px]"><img className="w-[150%] max-w-[355px]" src={image} /></div>
                        <div className="w-full pl-[30px] ">
                            <div className="space-y-2 mt-[5px] ">
                                <Label htmlFor="Nombre" className="font-bold">Nombre<span className="text-red-600">*</span></Label>
                                <Input id="nombre" placeholder="Nombre" required value={nombre}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNombre(event.target.value) }}/>
                            </div>


                            <div className="space-y-2 mt-[5px] ">
                                <Label htmlFor="especie" className="font-bold">Especie<span className="text-red-600">*</span></Label>
                                <Input id="especie" placeholder="Nombre" required type="text" value={especie}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEspecie(event.target.value) }}/>
                            </div>

                            <div className="space-y-2 mt-[5px] ">
                                <Label htmlFor="gender" className="font-bold">Gender <span className="text-red-600">*</span>   </Label>
                                <Input id="gender" placeholder="gender" required type="text" value={gender} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setGender(event.target.value) }}/>
                            </div>

                            <div className="space-y-2  mt-[5px]">
                                <Label htmlFor="type" className="font-bold">Type</Label>
                                <Input id="type" placeholder="type" required type="text" value={type} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setType(event.target.value) }}/>
                            </div>
                            <Button onClick={SendToCreate}className="w-full bg-[#799FCB] space-y-2 mt-[15px]" type="submit">
                                Create
                            </Button>
                        </div>
                </div>
                
            </CardContent>
    </Card>);
};