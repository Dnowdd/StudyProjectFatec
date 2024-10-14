import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AulaCardProps {
  title: string;
  description: string;
}

function AulaCard({ title, description }: AulaCardProps) {
  return (
    <div className="border rounded-2xl w-full p-10 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <Button className="flex gap-2 px-6 mt-4 self-start">
        Estudar agora <ChevronRight size={18} />
      </Button>
    </div>
  );
}

export default function Aulas() {
  return (
    <div className="flex flex-col items-center justify-center gap-24">
      <div className="flex flex-col gap-2 items-center mt-32 relative">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-center bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
          Nossas <span className="font-bold">aulas</span>
        </h1>
        <p className="w-[80%] sm:w-[75%] md:w-[55%] lg:w-[40%] text-xs text-center text-neutral-600">
          Acesse aulas dinâmicas e focadas nos principais temas do vestibular.
          Nosso conteúdo é cuidadosamente estruturado para otimizar seu
          aprendizado e garantir que você esteja preparado para cada questão.
        </p>
      </div>
      <div className="w-3/5 h-px bg-neutral-200"></div>
      <div className="flex flex-col gap-2 px-4 lg:px-10 xl:px-20 2xl:px-60 pb-20">
        <div className="flex flex-col lg:flex-row gap-2">
          <AulaCard
            title="Redação"
            description="Aprenda a estruturar seus textos, desenvolver argumentos sólidos e conquistar a nota máxima com técnicas práticas e exemplos de redações nota 1000."
          />
          <AulaCard
            title="Matemática"
            description="Domine os principais tópicos de matemática com exercícios comentados, resumos teóricos e dicas que vão te ajudar a resolver qualquer questão com confiança."
          />
          <AulaCard
            title="Português"
            description="Desvende os segredos da língua portuguesa, desde interpretação de textos até gramática, e melhore suas chances de sucesso no vestibular com conteúdos didáticos e dinâmicos."
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <AulaCard
            title="Ciências da Natureza"
            description="Explore os conceitos fundamentais de biologia, física e química com materiais práticos e claros que facilitam a compreensão e aplicação nas provas."
          />
          <AulaCard
            title="Ciências Humanas"
            description="Aprofunde-se nos temas de história, geografia, filosofia e sociologia com análises críticas e conteúdos atualizados para desenvolver seu pensamento crítico e interpretativo."
          />
        </div>
      </div>
    </div>
  );
}
