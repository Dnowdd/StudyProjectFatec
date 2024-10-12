import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="w-full h-[90px] flex items-center justify-between px-10 lg:px-20 fixed top-0 left-0 z-50">
        <div className="xl:text-center max-xl:w-full">
          <h1 className="text-2xl text-primary">
            Quest<strong>Vest</strong>
          </h1>
        </div>
        <div className="md:hidden bg-red-200 h-full w-1/4 flex items-center justify-center">
          <Menu size={34} />
        </div>
        <div className="flex gap-4 max-md:hidden">
          <Button className="hover:bg-primary-hover">Entrar</Button>
          <Button
            variant="outline"
            className="text-primary hover:text-primary-hover bg-transparent border-primary hover:border-primary-hover"
          >
            Criar uma nova conta
          </Button>
        </div>
      </header>
      <div className="w-full h-[90px]"></div>
    </>
  );
}
