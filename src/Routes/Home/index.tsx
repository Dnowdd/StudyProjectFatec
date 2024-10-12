import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-24">
      <div className="flex flex-col gap-2 items-center pt-32">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-center bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
          Seu <span className="font-bold">guia</span> para o<br />
          sucesso no <span className="font-bold">vestibular</span>
        </h1>
        <p className="w-[80%] sm:w-[75%] md:w-[55%] lg:w-[40%] text-xs text-center text-neutral-600">
          A QuestVest oferece simulados, exercícios e estratégias personalizadas
          para te ajudar a alcançar a sua vaga na universidade dos sonhos. Com
          uma abordagem prática e focada, você estará sempre preparado para
          qualquer desafio no vestibular.
        </p>
        <Button className="flex gap-2 px-8 my-4">
          Iniciar Jornada <ChevronRight size={18} />
        </Button>
      </div>
      <div className="w-3/5 h-px bg-neutral-200"></div>
      <div className="flex flex-col gap-2">
        <p className="text-xs px-8 md:text-sm text-center text-neutral-600">
          Vamos te ajudar a conquistar a{" "}
          <span className="font-extrabold md:font-bold">aprovação</span> nas{" "}
          <span className="font-extrabold md:font-bold">melhores</span>{" "}
          faculdades do país.
        </p>
        <div className="flex item-center justify-center gap-4">
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
          <div className="w-10 h-10 bg-neutral-400"></div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="relative w-full flex items-center justify-center">
          <div className="bg-background w-full h-[400px] rounded-[100%]"></div>
          <div className="absolute z-[-1] bg-primary w-1/2 h-[400px] rounded-[100%] blur-3xl opacity-35"></div>
          <div className="absolute bottom-0 w-full h-[200px] bg-background"></div>

          <div className="absolute w-full top-40 sm:top-28 md:top-20 left-0 flex flex-col items-center gap-6 overflow-hidden">
            <h1 className="text-2xl font-bold">Nossas Aulas</h1>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 justify-center items-center rounded-2xl px-2 md:px-14 py-12 sm:py-14 md:py-16 w-[350px] sm:w-[400px] md:w-[450px] relative opacity-50">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent from-20% "></div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                  Matemática
                </h1>
                <p className="w-[80%] md:w-full text-center text-xs text-neutral-600">
                  Domine os principais tópicos de matemática com exercícios
                  comentados, resumos teóricos e dicas que vão te ajudar a
                  resolver qualquer questão com confiança.
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center border rounded-2xl px-2 md:px-14 py-12 sm:py-14 md:py-16 w-[350px] sm:w-[400px] md:w-[450px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                  Redação
                </h1>
                <p className="w-[80%] md:w-full text-center text-xs text-neutral-600">
                  Aprenda a estruturar seus textos, desenvolver argumentos
                  sólidos e conquistar a nota máxima com técnicas práticas e
                  exemplos de redações nota 1000.
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center rounded-2xl px-2 md:px-14 py-12 sm:py-14 md:py-16 w-[350px] sm:w-[400px] md:w-[450px] relative opacity-50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background to-80%"></div>

                <h1 className="text-5xl font-bold bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                  Português
                </h1>
                <p className="text-center text-xs text-neutral-600">
                  Desvende os segredos da língua portuguesa, desde interpretação
                  de textos até gramática, e melhore suas chances de sucesso no
                  vestibular com conteúdos didáticos e dinâmicos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 h-[100px] bg-background"></div>
      </div>
    </div>
  );
}
