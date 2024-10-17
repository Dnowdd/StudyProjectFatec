import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  LifeBuoy,
  Link as LinkIcon,
  LogOut,
  Menu,
  Settings,
  User,
  UserPlus,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./login";
import Register from "./register";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [actualPath, setActualPath] = useState("");
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      setHasScrolled(false);
      return;
    }

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenu]);

  useEffect(() => {
    setActualPath(location.pathname.split("/")[1]);
    setMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    // Check if user is logged
    setLogged(false);
  }, []);

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
          hasScrolled ? "bg-black/15" : "bg-background"
        }`}
      >
        <div className="xl:text-center max-xl:w-full">
          <Link to="/" className="text-2xl text-primary">
            Quest<strong>Vest</strong>
          </Link>
        </div>
        <div
          className="md:hidden h-full w-1/4 flex items-center justify-center"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X className="text-primary" size={34} />
          ) : (
            <Menu className="text-primary" size={34} />
          )}
        </div>
        {mobileMenu && (
          <div className="flex flex-col gap-5 items-center py-14 md:hidden w-full bg-background fixed top-0 right-0 h-full z-[-1] top-[90px]">
            {pages.map((page) => (
              <Link
                to={page.path}
                className={`text-primary text-2xl ${
                  `/${actualPath}` == page.path ? "font-semibold" : "opacity-90"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </div>
        )}
        <div className="flex gap-14 items-center">
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
          {logged ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-2 cursor-pointer select-none">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>QV</AvatarFallback>
                  </Avatar>
                  <ChevronDown size={20} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-[20px] mt-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Convidar usuários</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <LinkIcon className="mr-2 h-4 w-4" />
                          <span>Copiar link</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Suporte</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Desconectar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-4 max-md:hidden">
              <Login>
                <Button className="hover:bg-primary-hover">Entrar</Button>
              </Login>
              <Register>
                <Button
                  variant="outline"
                  className="text-primary hover:text-primary-hover bg-transparent border-primary hover:border-primary-hover"
                >
                  Criar uma nova conta
                </Button>
              </Register>
            </div>
          )}
        </div>
      </header>
      <div className="w-full h-[90px]"></div>
    </>
  );
}
