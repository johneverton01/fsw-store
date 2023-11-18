"use client";

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Separator } from "./separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Menu = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };
  
  return (
    <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>{data.user.name?.[0].toUpperCase()}</AvatarFallback>                
                    {data.user.image && <AvatarImage src={data.user.image} alt={data.user.name!} /> }
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">{data.user.name}</span>
                    <span className="text-sm opacity-75">
                      Boas compras!
                    </span>
                  </div>
                </div>
                <Separator />

              </div>
            )}

            <div className="mt-2 flex flex-col gap-3">
             {status === "authenticated" && (
                <Button onClick={handleLogoutClick} className="w-full justify-start gap-2" variant="ghost">
                <LogOutIcon size={16} />
                Fazer logout
              </Button>
             )}

             {status === "unauthenticated" && (
                <Button onClick={handleLoginClick} className="w-full justify-start gap-2" variant="ghost">
                <LogInIcon size={16} />
                Fazer login
              </Button>
             )}

              <Button className="w-full justify-start gap-2" variant="ghost">
                <HomeIcon size={16} />
                Início
              </Button>

              <Button className="w-full justify-start gap-2" variant="ghost">
                <PercentIcon size={16} />
                Ofertas
              </Button>


              <Button className="w-full justify-start gap-2" variant="ghost">
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
  )
};

export default Menu;