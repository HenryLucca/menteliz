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

export default function UsersPresentation() {
  return (
    <section className="min-h-svh h-fit md:h-fit p-16 space-y-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl/none text-mBlue-600 font-bold font">
        Para todos os tipos de usuários
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="flex-1">
          <CardHeader>
            <User size={48} />
            <CardTitle>Paciente</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Registre suas emoções, horários de medicação e mais. </p>
          </CardContent>
          <CardFooter>
            <Link href="/login">
              <Button className="bg-mBlue-600 text-lg hover:bg-mBlue-400 font-semibold">
                Comece agora
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <Cross size={48} />
            <CardTitle>Terapeuta</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Acompanhe o progresso de seus pacientes e ajude-os a se manterem
              saudáveis.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/login">
              <Button className="bg-mBlue-600 text-lg hover:bg-mBlue-400 font-semibold">
                Comece agora
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <Users size={48} />
            <CardTitle>Familiar de Paciente</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Acompanhe o progresso de seus entes queridos e ajude-os a se
              manterem saudáveis.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/login">
              <Button className="bg-mBlue-600 text-lg hover:bg-mBlue-400 font-semibold">
                Comece agora
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
