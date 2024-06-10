'use client';
import React, { useContext, useState , useEffect} from 'react';

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

import '../styles/form.css'

export const Form = (episode) => {
    console.log(episode)
    const [id, setID] = useState<number>(episode['personaje']['id']);
    const [title, setTitle] = useState<string>(episode['personaje']['name']);
    const [image, setImage] = useState<string>("https://www.toynk.com/cdn/shop/articles/Best_Rick_and_Morty_Episodes.jpg?v=1711194426");
    const [nombre, setNombre] = useState<string>(episode['personaje']['name']);
    const [air_date , setAirDate] = useState<string>(episode['personaje']['air_date']);
    const [episodeN, setEpisode] = useState<string>(episode['personaje']['episode']);

    const { toast } = useToast()

    const SendToUpdate = async () => {

        let error = ""

        if(nombre=="" || episodeN=="" || air_date=="")  error +="Enter the fields of name, air_date, episode";
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
          title: "Character successfully updated.",
          action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
        })

        const episodes = JSON.parse(localStorage.getItem("episodes"));
        const episodeNew = episodes.find(elemento => elemento.id == id);

        episodeNew['name'] = nombre;
        episodeNew['air_date'] = air_date;
        episodeNew['episode'] = episodeN;

        setTitle(nombre);

        episodes[id-1] = episodeNew

        localStorage.setItem('episodes', JSON.stringify(episodes)); // Guardar en LocalStorage

        console.log(episodes)

        return;
    };
  return (   
    <Card className="mt-[100px] ml-[19px] divide-y w-full mr-[15px] table-hs " >

               
            <CardHeader className="p-4 w-full flex flex-row justify-between table-header">
                <CardTitle className="card-title text-[25px] ml-[10px] mt-auto">Edit episode: {title}</CardTitle>
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

    
                            <Button onClick={SendToUpdate}className="w-full bg-[#799FCB] space-y-2 mt-[15px]" type="submit">
                                Update
                            </Button>
                        </div>
                </div>
                
            </CardContent>
    </Card>);
};