import { Shield, Clock, Award, ThumbsUp, Truck, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Nossos produtos passam por rigoroso controle de qualidade para garantir a melhor performance.",
  },
  {
    icon: Clock,
    title: "Durabilidade",
    description: "Argamassas que seguram o revestimento por décadas, evitando problemas como pisos soltos.",
  },
  {
    icon: Award,
    title: "+20 Anos de Experiência",
    description: "Duas décadas ajudando a construir sonhos com produtos confiáveis e testados.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Agilidade no atendimento e entrega para sua obra não parar.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Tratamos cada cliente de forma única, entendendo suas necessidades específicas.",
  },
  {
    icon: ThumbsUp,
    title: "Confiança do Mercado",
    description: "Reconhecidos pela qualidade, somos referência para lojas e construtoras da região.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-24 bg-gradient-to-b from-muted via-background to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-secondary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vantagens de Ser Nosso Cliente
          </h2>
          <p className="text-muted-foreground text-lg">
            Entendemos que você precisa de um produto confiável para não ter dor de cabeça no futuro.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
