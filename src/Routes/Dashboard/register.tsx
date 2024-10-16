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

interface IRegister {
  children: React.ReactNode;
}

export default function Register({ children }: IRegister) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-10 gap-10 box-content px-10 py-14">
        <DialogHeader>
          <DialogTitle>Junte-se à gente!</DialogTitle>
          <DialogDescription>
            Crie sua conta em poucos passos e desbloqueie uma nova experiência.
            Estamos animados para ter você com a gente!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="username">Usuário:</Label>
              <Input
                className="caret-primary !ring-primary"
                type="text"
                id="username"
                placeholder="Digite seu nome de usuário"
              />
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="name">Nome:</Label>
              <Input
                className="caret-primary !ring-primary"
                type="text"
                id="name"
                placeholder="Digite seu nome verdadeiro"
              />
            </div>
          </div>
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
              placeholder="Insira sua senha para o acesso"
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="repeatPassword">Repita sua senha:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="password"
              id="repeatPassword"
              placeholder="Repita sua senha para o acesso"
            />
          </div>
        </div>
        <DialogFooter>
          <Button>Criar nova conta</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
