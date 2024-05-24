import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Cross, User, Users } from "lucide-react";
import Link from "next/link";
import PresentUser from "./Users";

export default function UsersPresentation() {
  return (
    <section className="min-h-svh h-fit md:h-fit p-16 space-y-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl/none text-mBlue-600 font-bold font">
        Para todos os tipos de usuários
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <PresentUser
          title="Paciente"
          description="Registre suas emoções, horários de medicação e mais."
          href="/login"
          icon={User}
        />

        <PresentUser
          title="Terapeuta"
          description="Acompanhe o progresso de seus pacientes e ajude-os a se manterem saudáveis."
          href="/login"
          icon={Cross}
        />

        <PresentUser
          title="Familiar de Paciente"
          description="Acompanhe o progresso de seus entes queridos e ajude-os a se manterem saudáveis."
          href="/login"
          icon={Users}
        />
      </div>
    </section>
  );
}
