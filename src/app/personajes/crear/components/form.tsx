'use client';
import React, {  useState } from 'react';

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation';
import Link from "next/link"

import '../styles/form.css'

export const Form = (props:any) => {
    const [image, setImage] = useState<string>("https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg");
    const [nombre, setNombre] = useState<string>("");
    const [especie, setEspecie] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [type, setType] = useState<string>("");
    const router = useRouter();
    const [tiempo, setTiempo] = useState(1.5); // 1 segundo


    const { toast } = useToast()

    const SendToCreate = async () => {

        let error = ""

        if(nombre=="" || especie=="" || gender=="")  error +="Enter the fields of name, species, gender";
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
          title: "Successfully created character.",
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

        localStorage.setItem('characters', JSON.stringify(personajes)); // Guardar en LocalStorage

        setTimeout(() => {
            router.push('/personajes/listado'); // Cambiar '/pagina-destino' a la URL deseada
          }, tiempo * 1000);
        return;
    };
    return (   
        <Card className="mt-[100px] ml-[19px] divide-y w-full mr-[15px] max-w-[1200px] table-hs " >
    
    <CardHeader className="p-4 w-full flex flex-row justify-between table-header ">
                <CardTitle className="card-title text-[25px] ml-[10px] mt-auto">Create Character</CardTitle>
                <Link href="listado">
                        <Button className="bg-[#1fbad6]" type="submit">
                        BACK TO LISTING
                        </Button>
                    </Link>
            </CardHeader>
                <CardContent className="bg-[#ffff] test">
                    <div className="mt-[20px] hs-box-shadow flex flex-column">
                      
                            <div className="logo-icon mt-[10px] w-full m-auto flex w-[150%] max-w-[355px]"><img className="w-[150%] max-w-[355px] img-create" src={image}/></div>
                            <div className="w-full pl-[30px] responsive-padding-5 ">
                                <div className="space-y-2 mt-[5px] ">
                                    <Label htmlFor="nombre" className="font-bold">Name<span className="text-red-600">*</span></Label>
                                    <Input id="nombre" placeholder="Name" required value={nombre}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNombre(event.target.value) }}/>
                                </div>
    
    
                                <div className="space-y-2 mt-[5px] ">
                                    <Label htmlFor="especie" className="font-bold">Specie<span className="text-red-600">*</span></Label>
                                    <Input id="especie" placeholder="Specie" required type="text" value={especie}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEspecie(event.target.value) }}/>
                                </div>
    
                                <div className="space-y-2 mt-[5px] ">
                                    <Label htmlFor="gender" className="font-bold">Gender <span className="text-red-600">*</span>   </Label>
                                    <Input id="gender" placeholder="Gender" required type="text" value={gender} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setGender(event.target.value) }}/>
                                </div>
    
                                <div className="space-y-2  mt-[5px]">
                                    <Label htmlFor="type" className="font-bold">Type</Label>
                                    <Input id="type" placeholder="Type" required type="text" value={type} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setType(event.target.value) }}/>
                                </div>
                                <Button onClick={SendToCreate}className="w-full bg-[#799FCB] space-y-2 mt-[15px]" type="submit">
                                    Create
                                </Button>
                            </div>
                    </div>
                    
                </CardContent>
        </Card>);
};