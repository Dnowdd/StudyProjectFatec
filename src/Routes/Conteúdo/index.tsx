import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getConteudo } from "./conteudos";
import { marked } from "marked";

interface Conteudo {
  title: string;
  description: string;
  contents?: { title: string; description: string }[];
  video?: string;
}
export default function Conteúdo() {
  const params = useParams();
  const { materia, aula } = params;

  const [conteudo, setConteudo] = useState<Conteudo>({
    title: "",
    description: "",
    contents: [],
    video: "",
  });

  useEffect(() => {
    setConteudo(getConteudo(aula || ""));
  }, [aula]);

  return (
    <div className="flex flex-col gap-2 w-[98%] sm:w-[90%] lg:w-[80%] xl:w-3/4 mx-auto mt-4 mb-16">
      <div>
        <Link to={`/aulas/${materia}`} className="underline">
          Voltar à lista de aulas
        </Link>
      </div>
      <div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {conteudo.title}
            </CardTitle>
            <CardDescription>{conteudo.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {conteudo.contents?.map((content, index) => (
              <section className="prose max-w-none" key={index}>
                <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: marked(
                      content.description.replace(/\n/g, "<br />")
                    ),
                  }}
                ></p>
              </section>
            ))}

            {conteudo.video && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Vídeo Explicativo
                </h2>
                <div className="w-full md:w-2/3 xl:w-1/2 mx-auto aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src={`https://www.youtube.com/embed/${conteudo.video}`}
                    title="Vídeo sobre o conteúdo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
