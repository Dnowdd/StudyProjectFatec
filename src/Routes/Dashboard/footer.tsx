import { Link } from "react-router-dom";
import Logo from "@/assets/3.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#5e9aff] w-full flex flex-col gap-10 md:gap-0 justify-center relative z-10">
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between px-[15%] py-4">
        <div>
          <img src={Logo} alt="Logo" className="h-[200px]" />
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-extrabold md:font-bold text-background">
              MATÉRIAS
            </h1>
            <Link
              to="/aulas/redacao"
              className="text-neutral-200 hover:underline"
            >
              Redação
            </Link>
            <Link
              to="/aulas/matematica"
              className="text-neutral-200 hover:underline"
            >
              Matemática
            </Link>
            <Link
              to="/aulas/linguagens"
              className="text-neutral-200 hover:underline"
            >
              Linguagens
            </Link>
            <Link
              to="/aulas/ciencias-da-natureza"
              className="text-neutral-200 hover:underline"
            >
              Ciências da Natureza
            </Link>
            <Link
              to="/aulas/ciencias-humanas"
              className="text-neutral-200 hover:underline"
            >
              Ciências Humanas
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-extrabold md:font-bold text-background">
              ROTAS
            </h1>
            <Link to="/" className="text-neutral-200 hover:underline">
              Página Inicial
            </Link>
            <Link to="/aulas" className="text-neutral-200 hover:underline">
              Aulas
            </Link>
            <Link to="/enem" className="text-neutral-200 hover:underline">
              Enem
            </Link>
            <Link to="/contato" className="text-neutral-200 hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center py-2 text-background px-10">
        Copyright © {year} Quest Vest. All Rights Reserved.
      </p>
    </div>
  );
}
