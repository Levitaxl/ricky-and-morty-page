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

    const [image, setImage] = useState<string>("https://www.toynk.com/cdn/shop/articles/Best_Rick_and_Morty_Episodes.jpg?v=1711194426");
    const [nombre, setNombre] = useState<string>("");
    const [air_date , setAirDate] = useState<string>("");
    const [episodeN, setEpisode] = useState<string>("");
    const router = useRouter();
    const [tiempo, setTiempo] = useState(1.5); // 1 segundo


    const { toast } = useToast()

    const SendToCreate = async () => {

        let error = ""

        if(nombre=="" || air_date=="" || episodeN=="")  error +="Enter the fields of name, air_date, episode";
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
          title: "Successfully created episode.",
          action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
        })

        const personajes = JSON.parse(localStorage.getItem("episodes"));
        const personajeNew = {};
        personajeNew['id'] = personajes.length+1;
        personajeNew['name'] = nombre;
        personajeNew['air_date'] = air_date;
        personajeNew['episode'] = episodeN;

        personajes.push(personajeNew)

        localStorage.setItem('episodes', JSON.stringify(personajes)); // Guardar en LocalStorage

        setTimeout(() => {
            router.push('/episodios/listado'); // Cambiar '/pagina-destino' a la URL deseada
          }, tiempo * 1000);
        return;
    };
    return (   
        <Card className="mt-[100px] ml-[19px] divide-y w-full mr-[15px] table-hs " >
    
    <CardHeader className="p-4 w-full flex flex-row justify-between table-header ">
                <CardTitle className="card-title text-[25px] ml-[10px] mt-auto">Create Episode</CardTitle>
                <Link href="listado" className="mr-[6px;]">
                        <Button className="bg-[#1fbad6]" type="submit">
                        BACK TO LISTING
                        </Button>
                    </Link>
            </CardHeader>
                <CardContent className="bg-[#ffff] test">
                    <div className="mt-[20px] hs-box-shadow flex flex-column">
                      
                            <div className="w-full pl-[30px] responsive-padding-5 ">
                                <div className="space-y-2 mt-[5px] ">
                                    <Label htmlFor="nombre" className="font-bold">Name<span className="text-red-600">*</span></Label>
                                    <Input id="nombre" placeholder="Name" required value={nombre}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNombre(event.target.value) }}/>
                                </div>


                                <div className="space-y-2 mt-[5px] ">
                                    <Label htmlFor="air_date" className="font-bold">air_date<span className="text-red-600">*</span></Label>
                                    <Input id="air_date" placeholder="air_date" required type="text" value={air_date}  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setAirDate(event.target.value) }}/>
                                </div>

                                <div className="space-y-2 mt-[5px] ">
                                    <Label htmlFor="episodeN" className="font-bold">episodeN <span className="text-red-600">*</span>   </Label>
                                    <Input id="episodeN" placeholder="episodeN" required type="text" value={episodeN} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEpisode(event.target.value) }}/>
                                </div>

                                <Button onClick={SendToCreate}className="w-full bg-[#799FCB] space-y-2 mt-[15px]" type="submit">
                                    Create
                                </Button>
                            </div>
                    </div>
                    
                </CardContent>
        </Card>);
};