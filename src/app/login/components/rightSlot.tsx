'use client';

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import '../styles/rightSlotStyle.css'

export const RightSlot = () => {

  return (   
    <Card className="mx-auto right-slot h-[100vh;]">
        <div className="admin-marign-top-9-5">
            <CardHeader className="space-y-1">
                <div className="logo-icon"><img src="./logo.png"/></div>
                <CardTitle className="text-4xl font-bold text-center !mt-6">Login To Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="max-w-2xl m-auto">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold">Email</Label>
                        <Input id="email" placeholder="Email address" required type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="font-bold">Password</Label>
                        <Input id="password" required type="Password" placeholder="Password" />
                    </div>

                    <div className="forminput-holder text-[#428BCA]">
                        <a id="forgot_btn"   className="hotelhide">¿Se te olvidó tu contraseña?</a>
                    </div>
                    <Button className="w-full bg-[#799FCB]" type="submit">
                        Login
                    </Button>
                </div>
                
            </CardContent>
        </div>
    </Card>);
};