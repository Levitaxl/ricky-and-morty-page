'use client';
import React, { useState, useEffect} from 'react';

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation';

import '../styles/rightSlotStyle.css'

export const RightSlot = () => {
    const { toast } = useToast()
    const [email, setEmail] = useState<string>(""); // Estado para controlar la visibilidad
    const [password, setPassword] = useState<string>(""); // Estado para controlar la visibilidad
    const router = useRouter();
    const [permiso, setPermiso] = useState<boolean>(true); // 1 segundo



    const handleClick = async () => {


        if(!permiso){
            return;
        }
        setPermiso(false);
        const emailSaved = "user@user.com"
        const passwordSaved = "user123#"


        const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);

        if(!isValidEmail){
            toast({
                variant:"destructive",
                className: 
                    'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                  ,
              title: "Uh oh! Something went wrong.",
              description: "Enter a valid email",
              action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
            })
            setPermiso(true);

            return;
        }

        if(emailSaved!=email || passwordSaved!= password){
            toast({
                variant:"destructive",
                className: 
                    'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                  ,
              title: "Uh oh! Something went wrong.",
              description: "Email and password do not match",
              action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
            })
            setPermiso(true);
            return;
        }

        toast({
            variant:"default",
            className: 
                'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500	 text-white	 '
              ,
          title: "Successfully Login.",
          action: <ToastAction altText="Cerrar">Cerrar</ToastAction>
        })

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

        const response4 = await fetch('https://rickandmortyapi.com/api/episode');
        const data4 = await response4.json();
        const first20CharactersEpisode = data4.results;

        const response5 = await fetch('https://rickandmortyapi.com/api/episode?page=2');
        const data5 = await response5.json();
        const first20CharactersEpisode2 = data5.results;

        const response6 = await fetch('https://rickandmortyapi.com/api/episode?page=3');
        const data6 = await response6.json();
        const first20CharactersEpisode6 = data6.results;

        const episodesNew = Array.from([...first20CharactersEpisode, ...first20CharactersEpisode2, ...first20CharactersEpisode6]);

        localStorage.setItem('episodes', JSON.stringify(episodesNew)); // Guardar en LocalStorage

        router.push('/personajes/listado'); // Cambiar '/pagina-destino' a la URL deseada
 
      };
    

  return (   
    <Card className="mx-auto right-slot h-[100vh;]">
        <div className="admin-marign-top-9-5">
            <CardHeader className="space-y-1">
                <div className="logo-icon"><img className ="hs-logo" src="./logo.png"/></div>
                <CardTitle className="text-4xl font-bold text-center !mt-6">Login To Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="max-w-2xl m-auto">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold">Email</Label>
                        <Input id="email" placeholder="Email address" required type="email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value) }} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="font-bold">Password</Label>
                        <Input id="password" required type="Password" placeholder="Password"  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value) }}/>
                    </div>

                    <div className="forminput-holder text-[#428BCA]">
                        <a id="forgot_btn"   className="hotelhide">¿Se te olvidó tu contraseña?</a>
                    </div>

                    <Button onClick={handleClick} className= {`w-full ${permiso && 'bg-[#799FCB]'} ${!permiso && 'bg-[#111827] cursor-not-allowed opacity-100	'}`}   type="submit">
                        Login
                    </Button>
                </div>
                
            </CardContent>
        </div>
    </Card>);
};