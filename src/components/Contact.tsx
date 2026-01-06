import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative gradient from above */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-primary to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Entre em contato conosco para solicitar um orçamento, tirar dúvidas sobre nossos produtos 
              ou conhecer melhor nossas soluções. Nossa equipe está pronta para atendê-lo!
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a 
                href="tel:7734208084" 
                className="flex items-center gap-4 text-primary-foreground hover:text-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-primary-foreground/70">(77) 3420-8084</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5577999120875" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground hover:text-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-primary-foreground/70">(77) 9.9912-0875</p>
                </div>
              </a>

              <a 
                href="mailto:argamassavitoria@hotmail.com"
                className="flex items-center gap-4 text-primary-foreground hover:text-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-primary-foreground/70">argamassavitoria@hotmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-primary-foreground/70">Bahia, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(142,70%,49%)]/20 mb-6">
                <MessageCircle className="w-8 h-8 text-[hsl(142,70%,49%)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Solicite um Orçamento
              </h3>
              <p className="text-muted-foreground mb-8">
                Clique no botão abaixo para falar diretamente com nossa equipe via WhatsApp. 
                Atendimento rápido e personalizado!
              </p>

              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a 
                  href="https://wa.me/5577999120875?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20argamassa." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </Button>

              <p className="text-muted-foreground text-sm mt-6">
                Atendimento de segunda a sexta, das 8h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
