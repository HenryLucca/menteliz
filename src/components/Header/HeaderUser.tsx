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
          <DropdownMenuContent>
            <a href="/humor">
              <DropdownMenuItem>Rastreador de Humor</DropdownMenuItem>
            </a>
            <a href="/medicacoes">
              <DropdownMenuItem>Medicações</DropdownMenuItem>
            </a>
            <a href="/recursos">
              <DropdownMenuItem>Recursos</DropdownMenuItem>
            </a>

            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <a href="/perfil">
              <DropdownMenuItem>Gerenciar perfil</DropdownMenuItem>
            </a>
            <DropdownMenuItem>
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
