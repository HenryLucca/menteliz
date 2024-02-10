"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";

export default function HeaderUser() {
  const { user, signOut } = useAuthContext();
  return (
    <>
      {user?.email && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <UserIcon size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="pt-2">
            <a href="/humor">
              <DropdownMenuItem className="">
                Rastreador de Humor
              </DropdownMenuItem>
            </a>
            <a href="/medicacoes">
              <DropdownMenuItem className="">Medicações</DropdownMenuItem>
            </a>
            <a href="/recursos">
              <DropdownMenuItem className="">Recursos</DropdownMenuItem>
            </a>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <a href="/perfil">
              <DropdownMenuItem>Gerenciar perfil</DropdownMenuItem>
            </a>
            <DropdownMenuItem className="hover:bg-zinc-200">
              <Button variant="destructive" size={"sm"} onClick={signOut}>
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
