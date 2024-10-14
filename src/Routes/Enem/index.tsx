import GradualSpacing from "@/components/ui/gradual-spacing";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Enem() {
  return (
    <div className="flex flex-col items-center justify-center gap-24 pb-40">
      <div className="flex flex-col gap-2 items-center mt-32 relative">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-center bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
          Exame Nacional do
          <br />
          Ensino Médio
        </h1>
        <p className="w-[80%] sm:w-[75%] md:w-[55%] lg:w-[40%] text-xs text-center text-neutral-600">
          Encontre todas as informações sobre o Enem em um só lugar. Descubra as
          datas, o formato da prova, como funciona o processo seletivo e a
          importância do exame para a sua carreira. Esteja sempre preparado e
          informado sobre o Enem, que é a porta de entrada para a universidade
          dos seus sonhos.
        </p>
      </div>
      <div className="w-3/5 h-px bg-neutral-200"></div>
      <div className="flex flex-col items-center px-60 gap-10">
        <Link to="#" className="flex gap-2 items-center">
          <GradualSpacing
            className="font-display text-center text-3xl font-bold -tracking-widest text-black dark:text-white md:leading-[5rem]"
            text="ENEM"
          />
          <ExternalLink size={14} />
        </Link>
        <div className="flex gap-8">
          <div className="w-1/3 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">O que é?</h2>
            <div className="text-justify">
              O{" "}
              <span className="font-medium">
                Enem (Exame Nacional do Ensino Médio)
              </span>{" "}
              é uma das{" "}
              <span className="font-medium">
                principais avaliações educacionais do Brasil
              </span>
              , criado pelo{" "}
              <span className="font-medium">Ministério da Educação (MEC)</span>{" "}
              para{" "}
              <span className="font-medium">
                avaliar o desempenho dos estudantes ao final do ensino médio.
              </span>
              O exame é utilizado como uma ferramenta para medir o conhecimento
              e as habilidades adquiridas pelos alunos, além de servir como uma
              <span className="font-medium">
                importante porta de entrada para o ensino superior
              </span>{" "}
              em instituições públicas e privadas do país.
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Como funciona?</h2>
            <div className="text-justify">
              O Enem é composto por{" "}
              <span className="font-medium">
                duas provas aplicadas em dois dias diferentes
              </span>
              , abrangendo{" "}
              <span className="font-medium">quatro áreas de conhecimento</span>:{" "}
              <span className="font-medium">
                Linguagens, Códigos e suas Tecnologias; Ciências Humanas e suas
                Tecnologias; Ciências da Natureza e suas Tecnologias; e
                Matemática e suas Tecnologias
              </span>
              . Além disso, há uma{" "}
              <span className="font-medium">
                redação dissertativa-argumentativa
              </span>
              , que deve ser escrita de acordo com o tema proposto no exame. As
              notas obtidas são calculadas por meio de uma metodologia chamada{" "}
              <span className="font-medium">
                Teoria de Resposta ao Item (TRI)
              </span>
              , que leva em consideração a{" "}
              <span className="font-medium">
                coerência das respostas do candidato
              </span>{" "}
              para determinar seu desempenho.
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Qual a importância?</h2>
            <div className="text-justify">
              O Enem é um exame{" "}
              <span className="font-medium">
                fundamental para os estudantes que desejam ingressar no ensino
                superior no Brasil
              </span>
              . Ele é utilizado como critério de seleção para diversos programas
              de acesso à educação, como o{" "}
              <span className="font-medium">
                Sisu (Sistema de Seleção Unificada)
              </span>
              , o{" "}
              <span className="font-medium">
                ProUni (Programa Universidade para Todos)
              </span>{" "}
              e o{" "}
              <span className="font-medium">
                FIES (Fundo de Financiamento Estudantil)
              </span>
              . Além disso, muitas universidades públicas e privadas adotam a{" "}
              <span className="font-medium">
                nota do Enem como forma de ingresso
              </span>{" "}
              ou como parte do processo seletivo. A importância do Enem vai além
              do acesso à universidade, pois ele também é um{" "}
              <span className="font-medium">
                indicador de qualidade da educação no país
              </span>{" "}
              e um{" "}
              <span className="font-medium">
                estímulo para os estudantes buscarem uma formação mais sólida e
                qualificada
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
