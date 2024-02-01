import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <section className="h-dvh bg-mBlue-200 bg-gradient-to-b from-mBlue-200 via-mBlue-200 via-75% to-zinc-100 to-90%">
      <div className="flex flex-col justify-center items-center gap-4 pt-32 md:pt-64 lg:pt-72">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none text-mBlue-600 font-bold font">
          Bem-vindo(a) ao Menteliz
        </h1>
        <div className="text-center text-gray-500 font-medium text-lg md:text-2xl">
          <p className="">
            Seu{" "}
            <span className="text-mBlue-600 font-semibold">
              cantinho seguro
            </span>{" "}
            para fazer sua{" "}
            <span className="text-mBlue-600 font-semibold">mente feliz</span>
          </p>
          <p className="">
            anotar suas emoções, lembrar o horário de suas medicações e mais.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#sobre">
            <Button className="bg-mBlue-600 text-lg hover:bg-mBlue-400 font-semibold">
              Venha conhecer mais
            </Button>
          </a>
          <a href="">
            <Button
              variant={"outline"}
              className="bg-mBlue-200 text-lg hover:bg-mBlue-300 border-black font-medium"
            >
              Sobre o Menteliz
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
