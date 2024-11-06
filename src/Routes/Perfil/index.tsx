import UserImage from "@/assets/user.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Mail, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/config/supabaseClient";
import { useToast } from "@/hooks/use-toast";

export default function Perfil() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [loggedInAt, setLoggedInAt] = useState("");

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem("loggedInUser");
      if (user) {
        const userParsed = JSON.parse(user);

        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", userParsed.id);

        if (error || !data) {
          toast({
            title: "Erro ao buscar dados.",
            description:
              "Ocorreu um erro ao tentar buscar os dados da sua conta. " +
              error.message,
            variant: "destructive",
          });
          return;
        }

        setId(data[0].id);
        setName(data[0].name);
        setEditName(data[0].name);
        setUsername(data[0].username);
        setEmail(data[0].email);
        setEditEmail(data[0].email);
        setCreatedAt(data[0].created_at);
        setLoggedInAt(userParsed.loggedInAt);
      }
    };

    fetchData();
  }, []);

  const formattedLoggedInAt = loggedInAt
    ? format(new Date(loggedInAt), "HH:mm - dd/MM/yy")
    : "";
  const formattedCreatedAt = createdAt
    ? format(new Date(createdAt), "HH:mm - dd/MM/yy")
    : "";

  const handleSaveChanges = async () => {
    const { error } = await supabase
      .from("users")
      .update({
        name: editName,
        email: editEmail,
      })
      .eq("id", id);

    if (error) {
      toast({
        title: "Erro ao atualizar dados.",
        description:
          "Ocorreu um erro ao tentar atualizar os dados da sua conta. " +
          error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Dados atualizados com sucesso!",
        description:
          "Os dados da sua conta foram atualizados no banco de dados com sucesso.",
      });

      window.location.reload();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-5xl mx-auto border-transparent shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage src={UserImage} />
              <AvatarFallback>QV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-between py-2">
              <div>
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-muted-foreground">{username}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{email}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-2">
                <Dialog>
                  <DialogTrigger>
                    <Button>
                      <Pencil /> Editar perfil
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar perfil</DialogTitle>
                      <DialogDescription>
                        Ao clicar em salvar alterações, os seus dados serão
                        alterados em nossos bancos de dados.
                      </DialogDescription>
                      <div className="py-6 flex flex-col gap-6">
                        <div className="grid w-full items-center gap-1">
                          <Label htmlFor="name">Nome</Label>
                          <Input
                            type="text"
                            id="name"
                            placeholder="Nome"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                          />
                        </div>
                        <div className="grid w-full items-center gap-1">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                          />
                        </div>

                        <Button onClick={handleSaveChanges}>
                          Salvar alterações
                        </Button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Dados:</h2>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">
                    {formattedLoggedInAt}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Último acesso</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">
                    {formattedCreatedAt}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Data de criação da conta
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
