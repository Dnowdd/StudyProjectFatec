import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ILogin {
  children: React.ReactNode;
}

export default function Login({ children }: ILogin) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-10 box-content px-10 py-14">
        <DialogHeader>
          <DialogTitle>Bem-vindo de volta!</DialogTitle>
          <DialogDescription>
            Estamos prontos para continuar com você. Faça login para acessar
            todos os seus conteúdos e atualizações.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email">E-mail:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="email"
              id="email"
              placeholder="Digite seu endereço de e-mail"
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="password">Senha:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="password"
              id="password"
              placeholder="Insira sua senha de acesso"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Lembre-se de mim</Label>
          </div>
        </div>
        <DialogFooter>
          <Button>Entrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
