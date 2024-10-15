import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [actualPath, setActualPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsHome(location.pathname === "/");

    setActualPath(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const pages = [
    {
      label: "Aulas",
      path: "/aulas",
    },
    {
      label: "Enem",
      path: "/enem",
    },
  ];

  return (
    <>
      <header
        className={`w-full h-[90px] flex items-center justify-between px-10 lg:px-20 fixed top-0 left-0 z-50 ${
          hasScrolled && "bg-black/15"
        }`}
      >
        <div className="xl:text-center max-xl:w-full">
          <Link to="/" className="text-2xl text-primary">
            Quest<strong>Vest</strong>
          </Link>
        </div>
        <div className="md:hidden h-full w-1/4 flex items-center justify-center">
          <Menu size={34} />
        </div>
        {!isHome ? (
          <div className="flex gap-4 max-md:hidden">
            {pages.map((page) => (
              <Link
                to={page.path}
                className={`text-primary text-lg ${
                  `/${actualPath}` == page.path ? "font-semibold" : "opacity-90"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex gap-4 max-md:hidden">
            <Button className="hover:bg-primary-hover">Entrar</Button>
            <Button
              variant="outline"
              className="text-primary hover:text-primary-hover bg-transparent border-primary hover:border-primary-hover"
            >
              Criar uma nova conta
            </Button>
          </div>
        )}
      </header>
      <div className="w-full h-[90px]"></div>
    </>
  );
}
