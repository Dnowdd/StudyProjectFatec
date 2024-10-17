import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function Matérias() {
  const params = useParams();
  const { materia } = params;

  const getMateria = (materia: string) => {
    switch (materia) {
      case "matematica":
        return {
          title: "Matemática",
          description:
            "Domine os principais tópicos de matemática com exercícios comentados, resumos teóricos e dicas que vão te ajudar a resolver qualquer questão com confiança.",
          cards: [
            {
              title: "Álgebra Básica",
              description:
                "Estudo dos conceitos fundamentais de álgebra, incluindo operações com números inteiros, racionais e irracionais, simplificação de expressões algébricas, e resolução de equações e inequações do 1º e 2º graus.",
              link: "/aulas/matematica/algebra-basica",
            },
            {
              title: "Funções",
              description:
                "Introdução às funções, cobrindo tipos como funções lineares, quadráticas, exponenciais e logarítmicas, além do estudo de domínio, imagem e comportamento das funções.",
              link: "/aulas/matematica/funcoes",
            },
            {
              title: "Geometria Plana",
              description:
                "Exploração de conceitos sobre figuras geométricas planas como triângulos, quadriláteros, círculos, e o uso do Teorema de Pitágoras, além do cálculo de áreas e perímetros.",
              link: "/aulas/matematica/geometria-plana",
            },
            {
              title: "Trigonometria",
              description:
                "Estudo das relações entre os ângulos e os lados de um triângulo usando seno, cosseno e tangente, além das leis dos senos e cossenos.",
              link: "/aulas/matematica/trigonometria",
            },
            {
              title: "Geometria Espacial",
              description:
                "Análise de formas tridimensionais como prismas, cilindros, cones e esferas, com foco no cálculo de volumes e áreas de superfícies.",
              link: "/aulas/matematica/geometria-espacial",
            },
            {
              title: "Estatística e Probabilidade",
              description:
                "Introdução às medidas de tendência central (média, mediana, moda), dispersão de dados (variância e desvio padrão), e fundamentos de probabilidade.",
              link: "/aulas/matematica/estatistica-e-probabilidade",
            },
            {
              title: "Progressões Aritméticas e Geométricas (PA e PG)",
              description:
                "Estudo das progressões aritméticas e geométricas, incluindo suas fórmulas e propriedades, e a aplicação prática em problemas de sequências.",
              link: "/aulas/matematica/progressoes-aritmeticas-e-geometricas",
            },
            {
              title: "Números Complexos",
              description:
                "Conceitos de números complexos, incluindo operações, formas algébrica e polar, e suas aplicações em equações polinomiais.",
              link: "/aulas/matematica/numeros-complexos",
            },
            {
              title: "Cálculo Diferencial e Integral",
              description:
                "Introdução aos conceitos de limites, derivadas e integrais, com ênfase em suas aplicações em problemas de máximos, mínimos e taxas de variação.",
              link: "/aulas/matematica/calculo-diferencial-e-integral",
            },
            {
              title: "Matrizes e Determinantes",
              description:
                "Estudo das operações com matrizes, cálculo de determinantes e a aplicação desses conceitos na resolução de sistemas lineares.",
              link: "/aulas/matematica/matrizes-e-determinantes",
            },
          ],
        };
      case "redacao":
        return {
          title: "Redação",
          description:
            "Aprenda a estruturar seus textos, desenvolver argumentos sólidos e conquistar a nota máxima com técnicas práticas e exemplos de redações nota 1000.",
          cards: [
            {
              title: "Estrutura da Redação",
              description:
                "Compreenda como organizar uma redação, com foco em introdução, desenvolvimento e conclusão de forma coesa e clara.",
              link: "/aulas/redacao/estrutura-da-redacao",
            },
            {
              title: "Argumentação e Coerência",
              description:
                "Desenvolva argumentos convincentes e aprenda a construir uma linha de raciocínio lógica em seus textos.",
              link: "/aulas/redacao/argumentacao-e-coerencia",
            },
            {
              title: "Técnicas de Revisão",
              description:
                "Melhore suas habilidades de revisão para identificar e corrigir erros gramaticais, ortográficos e de pontuação.",
              link: "/aulas/redacao/tecnicas-de-revisao",
            },
          ],
        };
      case "portugues":
        return {
          title: "Português",
          description:
            "Desvende os segredos da língua portuguesa, desde interpretação de textos até gramática, e melhore suas chances de sucesso no vestibular com conteúdos didáticos e dinâmicos.",
          cards: [
            {
              title: "Gramática",
              description:
                "Revisão dos principais tópicos de gramática, incluindo sintaxe, morfologia e concordância verbal e nominal.",
              link: "/aulas/portugues/gramatica",
            },
            {
              title: "Interpretação de Textos",
              description:
                "Estratégias para compreender e interpretar textos, identificando ideias principais, implícitas e explícitas.",
              link: "/aulas/portugues/interpretacao-de-textos",
            },
            {
              title: "Ortografia e Pontuação",
              description:
                "Regras de ortografia e uso correto da pontuação para melhorar a clareza e a precisão na escrita.",
              link: "/aulas/portugues/ortografia-e-pontuacao",
            },
            {
              title: "Literatura Brasileira",
              description:
                "Estudo dos principais autores e obras da literatura brasileira, com foco em movimentos literários e suas características.",
              link: "/aulas/portugues/literatura-brasileira",
            },
            {
              title: "Figuras de Linguagem",
              description:
                "Análise das figuras de linguagem mais usadas na língua portuguesa e suas aplicações em diferentes contextos.",
              link: "/aulas/portugues/figuras-de-linguagem",
            },
            {
              title: "Variações Linguísticas",
              description:
                "Exploração das variações linguísticas no Brasil, desde sotaques até gírias e diferenças regionais.",
              link: "/aulas/portugues/variacoes-linguisticas",
            },
            {
              title: "Concordância Verbal e Nominal",
              description:
                "Regras de concordância para melhorar a precisão e correção gramatical em diferentes contextos.",
              link: "/aulas/portugues/concordancia-verbal-e-nominal",
            },
            {
              title: "Redação Oficial",
              description:
                "Técnicas para a elaboração de textos formais, como cartas, ofícios e e-mails, seguindo normas e regras adequadas.",
              link: "/aulas/portugues/redacao-oficial",
            },
            {
              title: "Semântica",
              description:
                "Estudo do significado das palavras e expressões, análise de sinônimos, antônimos e polissemia.",
              link: "/aulas/portugues/semantica",
            },
            {
              title: "Análise Sintática",
              description:
                "Compreensão dos elementos que compõem uma oração e suas funções sintáticas no contexto das frases.",
              link: "/aulas/portugues/analise-sintatica",
            },
          ],
        };
      case "ciencias-da-natureza":
        return {
          title: "Ciências da Natureza",
          description:
            "Explore os conceitos fundamentais de biologia, física e química com materiais práticos e claros que facilitam a compreensão e aplicação nas provas.",
          cards: [
            {
              title: "Biologia Celular",
              description:
                "Estudo das células, seus componentes e processos vitais como respiração, fotossíntese e divisão celular.",
              link: "/aulas/ciencias-da-natureza/biologia-celular",
            },
            {
              title: "Física Clássica",
              description:
                "Conceitos fundamentais da física, incluindo leis de Newton, trabalho, energia e movimento.",
              link: "/aulas/ciencias-da-natureza/fisica-classica",
            },
            {
              title: "Química Geral",
              description:
                "Introdução à química, abordando a tabela periódica, ligações químicas e reações químicas.",
              link: "/aulas/ciencias-da-natureza/quimica-geral",
            },
            {
              title: "Ecologia e Meio Ambiente",
              description:
                "Análise dos ecossistemas, suas interações, ciclos biogeoquímicos e o impacto das atividades humanas.",
              link: "/aulas/ciencias-da-natureza/ecologia-e-meio-ambiente",
            },
            {
              title: "Física Moderna",
              description:
                "Estudo de teorias modernas, como relatividade e física quântica, e suas implicações.",
              link: "/aulas/ciencias-da-natureza/fisica-moderna",
            },
            {
              title: "Química Orgânica",
              description:
                "Exploração dos compostos orgânicos, suas estruturas, propriedades e reações importantes, como hidrocarbonetos e grupos funcionais.",
              link: "/aulas/ciencias-da-natureza/quimica-organica",
            },
            {
              title: "Genética e Evolução",
              description:
                "Estudo dos princípios de hereditariedade, genética mendeliana, e os processos que levam à evolução das espécies.",
              link: "/aulas/ciencias-da-natureza/genetica-e-evolucao",
            },
            {
              title: "Termodinâmica",
              description:
                "Conceitos de calor, trabalho, energia térmica e as leis da termodinâmica aplicadas a processos físicos.",
              link: "/aulas/ciencias-da-natureza/termodinamica",
            },
            {
              title: "Óptica e Ondas",
              description:
                "Estudo dos fenômenos relacionados à luz e ondas, incluindo reflexão, refração e o comportamento das ondas em diferentes meios.",
              link: "/aulas/ciencias-da-natureza/optica-e-ondas",
            },
            {
              title: "Química Analítica",
              description:
                "Técnicas de análise química, métodos de quantificação e identificação de substâncias em amostras.",
              link: "/aulas/ciencias-da-natureza/quimica-analitica",
            },
          ],
        };
      case "ciencias-humanas":
        return {
          title: "Ciências Humanas",
          description:
            "Aprofunde-se nos temas de história, geografia, filosofia e sociologia com análises críticas e conteúdos atualizados para desenvolver seu pensamento crítico e interpretativo.",
          cards: [
            {
              title: "História do Brasil",
              description:
                "Estudo dos principais acontecimentos históricos do Brasil, desde a colonização até a era contemporânea.",
              link: "/aulas/ciencias-humanas/historia-do-brasil",
            },
            {
              title: "Geografia Física",
              description:
                "Análise das características físicas do planeta, incluindo relevo, clima, vegetação e recursos hídricos.",
              link: "/aulas/ciencias-humanas/geografia-fisica",
            },
            {
              title: "Filosofia Clássica",
              description:
                "Introdução aos filósofos e pensamentos da Grécia Antiga, como Sócrates, Platão e Aristóteles.",
              link: "/aulas/ciencias-humanas/filosofia-classica",
            },
            {
              title: "Sociologia Contemporânea",
              description:
                "Estudo das teorias sociológicas modernas e sua aplicação na compreensão das sociedades atuais.",
              link: "/aulas/ciencias-humanas/sociologia-contemporanea",
            },
            {
              title: "História Mundial",
              description:
                "Exploração dos eventos históricos globais que moldaram o mundo atual, como guerras, revoluções e tratados.",
              link: "/aulas/ciencias-humanas/historia-mundial",
            },
            {
              title: "Geopolítica",
              description:
                "Análise das relações de poder entre as nações, incluindo conflitos, alianças e a dinâmica econômica global.",
              link: "/aulas/ciencias-humanas/geopolitica",
            },
            {
              title: "Ética e Moral",
              description:
                "Discussão sobre os conceitos de ética e moral, suas diferenças e como influenciam as decisões humanas.",
              link: "/aulas/ciencias-humanas/etica-e-moral",
            },
            {
              title: "Movimentos Sociais",
              description:
                "Estudo dos movimentos sociais ao longo da história, suas causas, desenvolvimento e impacto nas mudanças sociais.",
              link: "/aulas/ciencias-humanas/movimentos-sociais",
            },
            {
              title: "História da Arte",
              description:
                "Análise dos principais movimentos artísticos e suas influências culturais e históricas.",
              link: "/aulas/ciencias-humanas/historia-da-arte",
            },
            {
              title: "Geografia Humana",
              description:
                "Estudo das interações humanas com o meio ambiente e a distribuição das populações pelo globo.",
              link: "/aulas/ciencias-humanas/geografia-humana",
            },
          ],
        };
      default:
        return {
          title: "",
          description: "",
          cards: [],
        };
    }
  };

  const { title, description, cards } = getMateria(materia || "");

  return (
    <div className="flex flex-col items-center justify-center gap-24">
      <div className="flex flex-col gap-2 items-center mt-32 relative">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-center bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
          <span className="font-bold">{title}</span>
        </h1>
        <p className="w-[80%] sm:w-[75%] md:w-[55%] lg:w-[40%] text-xs text-center text-neutral-600">
          {description}
        </p>
      </div>
      <div className="w-3/5 h-px bg-neutral-200"></div>
      <div className="flex justify-between gap-y-2 w-full px-4 lg:px-10 xl:px-20 2xl:px-60 pb-20 flex-wrap">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="sm:w-[49.3%] lg:w-[33%] flex flex-col justify-between "
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center">
              <Link
                to={card.link}
                className="bg-primary px-4 py-2 rounded-lg flex items-center gap-2 text-background"
              >
                Estudar agora <ChevronRight size={18} />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
