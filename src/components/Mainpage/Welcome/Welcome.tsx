import { Button } from "@/components/ui/button";
import About from "../About/About";
import WelcomeButtons from "./WelcomeButtons";

export default function Welcome() {
  return (
    <section className="h-dvh bg-mBlue-200 bg-gradient-to-b from-mBlue-200 via-mBlue-200 via-75% to-zinc-100 to-90%">
      <div className="flex flex-col justify-center items-center gap-4 pt-32 md:pt-64 lg:pt-72">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl/none text-mBlue-600 font-bold">
          Bem-vindo(a) ao{" "}
          <span className="text-secondaryCoral-600">Menteliz</span>
        </h1>
        <div className="text-center text-gray-500 font-medium text-lg md:text-2xl">
          <p className="">
            Seu{" "}
            <span className="text-secondaryCoral-600 font-semibold">
              cantinho seguro
            </span>{" "}
            para fazer sua{" "}
            <span className="text-secondaryCoral-600 font-semibold">
              mente feliz
            </span>
          </p>
          <p className="">
            anotar suas emoções, lembrar o horário de suas medicações e mais.
          </p>
        </div>
        <WelcomeButtons />
      </div>
    </section>
  );
}
