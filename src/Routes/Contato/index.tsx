import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contato() {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    const error = {
      message: "Erro ao enviar mensagem",
    };

    if (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description:
          "Ocorreu um erro ao tentar enviar sua mensagem de contato. " +
          error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Mensagem enviada com sucesso",
        description:
          "Sua mensagem foi enviada com sucesso. Em breve entraremos em contato com você por e-mail.",
      });
    }

    setIsSubmitting(false);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex flex-col gap-2 items-center mt-16 relative">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-center bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-transparent ">
          Entre em <span className="font-bold">Contato</span>
        </h1>
        <p className="w-[80%] sm:w-[75%] md:w-[55%] lg:w-[40%] text-xs text-center text-neutral-600">
          Tem alguma dúvida ou precisa de mais informações? Estamos aqui para
          ajudar! Entre em contato conosco e fale diretamente com nossa equipe,
          que está pronta para esclarecer todas as suas perguntas e orientar
          você na sua jornada de estudos.
        </p>
      </div>
      <div className="w-3/5 h-px bg-neutral-200"></div>

      <div className="flex justify-center w-full mb-20">
        <form onSubmit={handleSubmit} className="space-y-2 w-1/3">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Sua mensagem"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[200px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      </div>
    </div>
  );
}
