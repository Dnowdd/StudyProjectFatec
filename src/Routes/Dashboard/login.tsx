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
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import bcrypt from "bcryptjs";
import { supabase } from "@/config/supabaseClient";
import Spinner20 from "@/components/loaders/Spinner20";

interface ILogin {
  children: React.ReactNode;
}

export default function Login({ children }: ILogin) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveUserToLocalStorage = (user: any) => {
    // Obter a data atual
    const loginDate = new Date().toISOString();

    // Criar um objeto que inclui o usuário e a data de login
    const userData = {
      ...user, // Desestrutura o objeto de usuário
      loggedInAt: loginDate, // Adiciona a data de login
    };

    // Salvar o objeto no localStorage como uma string JSON
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  const loginUser = async () => {
    setIsLoading(true);

    // Verificar se os campos obrigatórios estão preenchidos
    if (!email || !password) {
      setIsLoading(false);
      toast({
        title: "Campos obrigatórios",
        description:
          "Ocorreu um erro ao tentar fazer login. Todos os campos são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Buscar o usuário pelo e-mail
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single(); // Retorna apenas um usuário

    // Verifica se houve um erro ou se o usuário não foi encontrado
    if (error || !users) {
      setIsLoading(false);
      toast({
        title: "Erro ao fazer login",
        description: "E-mail ou senha inválidos.",
        variant: "destructive",
      });
      return;
    }

    // Combinar a senha fornecida com a chave secreta
    const passwordWithSecret = password + import.meta.env.VITE_HASH_SECRET;

    // Verificar se a senha fornecida corresponde à senha hash armazenada
    const isPasswordValid = await bcrypt.compare(
      passwordWithSecret,
      users.password
    );

    if (!isPasswordValid) {
      setIsLoading(false);
      toast({
        title: "Erro ao fazer login",
        description: "E-mail ou senha inválidos.",
        variant: "destructive",
      });
    } else {
      setIsOpen(false);
      toast({
        title: "Login bem-sucedido",
        description: "Seja bem-vindo de volta!",
      });
      saveUserToLocalStorage(users);
    }

    setIsLoading(false);
    window.location.reload();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col gap-10 box-content px-10 py-14">
        <DialogHeader>
          <DialogTitle>Bem-vindo de volta!</DialogTitle>
          <DialogDescription>
            Estamos prontos para continuar com você. Faça login para acessar
            todos os seus conteúdos e atualizações.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email">E-mail:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="email"
              id="email"
              placeholder="Digite seu endereço de e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="password">Senha:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="password"
              id="password"
              placeholder="Insira sua senha de acesso"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" disabled />
            <Label htmlFor="remember">Lembre-se de mim</Label>
          </div>
        </div>
        <DialogFooter className="px-4 md:px-0">
          <Button
            onClick={loginUser}
            className="flex gap-2"
            disabled={isLoading}
          >
            {isLoading && (
              <Spinner20 className="w-[16px] h-[16px] !border-4 !border-background" />
            )}
            Entrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
