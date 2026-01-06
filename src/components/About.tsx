import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Fabricação própria com controle de qualidade",
  "Atendimento para lojas de material de construção",
  "Fornecimento para construtoras",
  "Variedade de produtos para cada necessidade",
  "Equipe técnica especializada",
  "Compromisso com prazos de entrega",
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-background via-primary/5 to-primary/30 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-secondary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              É da Nossa Terra
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A <strong className="text-foreground">Argamassa Vitória</strong> nasceu com o propósito de fornecer 
              produtos de qualidade para o mercado da construção civil. Há mais de 20 anos, 
              ajudamos a construir sonhos através de argamassas e rejuntes que você pode confiar.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Nosso compromisso é com a satisfação do cliente, oferecendo produtos que garantem 
              durabilidade e segurança. Não vendemos apenas argamassa, vendemos a tranquilidade 
              de saber que seu revestimento está seguro.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
                <span className="font-display text-3xl font-bold text-secondary-foreground">20+</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Anos Construindo Confiança
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-8">
                "Há mais de 20 anos ajudando a construir sonhos"
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary-foreground/20">
                <div>
                  <p className="font-display text-3xl font-bold text-secondary">Qualidade</p>
                  <p className="text-primary-foreground/60">Garantida</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-secondary">Confiança</p>
                  <p className="text-primary-foreground/60">Comprovada</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
