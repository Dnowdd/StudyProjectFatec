import Spinner20 from "@/components/loaders/Spinner20";
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
import { supabase } from "@/config/supabaseClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import bcrypt from "bcryptjs";

interface IRegister {
  children: React.ReactNode;
}

// Obtenha a chave secreta do ambiente Vite
const HASH_SECRET = import.meta.env.VITE_HASH_SECRET;

export default function Register({ children }: IRegister) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const addUser = async () => {
    setIsLoading(true);

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!username || !name || !email || !password || !confirmPassword) {
      setIsLoading(false);
      toast({
        title: "Campos obrigatórios",
        description:
          "Ocorreu um erro ao tentar criar sua conta. Todos os campos são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      setIsLoading(false);
      toast({
        title: "As senhas não coincidem",
        description:
          "Ocorreu um erro ao tentar criar sua conta. As senhas preenchidas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    // Combinar a senha com a chave secreta e hash
    const passwordWithSecret = password + HASH_SECRET; // Combina a senha com a chave secreta
    const hashedPassword = await bcrypt.hash(passwordWithSecret, 10); // Hash da senha combinada

    // Inserir o usuário diretamente na tabela 'users'
    const { error } = await supabase.from("users").insert([
      {
        username,
        name,
        email,
        password: hashedPassword, // Armazena a senha hash
      },
    ]);

    if (error) {
      toast({
        title: "Erro ao criar conta",
        description:
          "Ocorreu um erro ao tentar criar sua conta. " + error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Conta criada com sucesso",
        description:
          "Sua conta foi criada com sucesso. Faça login para acessar o painel.",
      });
    }

    setIsLoading(false);
  };

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
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="username">Usuário:</Label>
              <Input
                className="caret-primary !ring-primary"
                type="text"
                id="username"
                placeholder="Digite seu nome de usuário"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="name">Nome:</Label>
              <Input
                className="caret-primary !ring-primary"
                type="text"
                id="name"
                placeholder="Digite seu nome verdadeiro"
                onChange={(e) => setName(e.target.value)}
                value={name}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="password">Senha:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="password"
              id="password"
              placeholder="Insira sua senha para o acesso"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="repeatPassword">Repita sua senha:</Label>
            <Input
              className="caret-primary !ring-primary"
              type="password"
              id="repeatPassword"
              placeholder="Repita sua senha para o acesso"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>
        <DialogFooter className="px-4 md:px-0">
          <Button onClick={addUser} className="flex gap-2" disabled={isLoading}>
            {isLoading && (
              <Spinner20 className="w-[16px] h-[16px] !border-4 !border-background" />
            )}
            Criar nova conta
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
