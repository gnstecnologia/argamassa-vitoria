import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import productsShowcase from "@/assets/products-showcase.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const productCategories = [
  {
    title: "Argamassas",
    items: [
      { name: "ACI", desc: "Área interna, pisos comuns" },
      { name: "ACII", desc: "Área externa, cozinha e banheiro" },
      { name: "ACIII Cinza", desc: "Fachadas e porcelanatos grandes", featured: true },
      { name: "ACIII Branca", desc: "Mármores e pedras naturais", featured: true },
      { name: "Piso sobre Piso", desc: "Assentar sobre piso existente" },
      { name: "Porcelanato", desc: "Versões interno e externo" },
    ],
  },
  {
    title: "Rejuntes e Acabamentos",
    items: [
      { name: "Rejunte Colorido", desc: "Diversas cores disponíveis" },
      { name: "Cal Refinado", desc: "Especial para pintura" },
      { name: "Tinta em Pó", desc: "Alta durabilidade" },
      { name: "Corante Hidracor", desc: "Múltiplas cores" },
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-primary/10">
      {/* Background decorative */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Nossas Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Completas em{" "}
            <span className="text-primary">Argamassas</span> e Rejuntes
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada produto é desenvolvido para atender necessidades específicas, garantindo qualidade e durabilidade em sua obra.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Showcase Image */}
          <div 
            className="order-2 lg:order-1 rounded-2xl shadow-2xl bg-cover bg-center bg-no-repeat aspect-[4/3] w-full"
            style={{ backgroundImage: `url(${productsShowcase})` }}
            role="img"
            aria-label="Linha de produtos Argamassa Vitória"
          />

          {/* Product Categories */}
          <div className="order-1 lg:order-2 space-y-8">
            {productCategories.map((category) => (
              <div key={category.title} className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={`https://wa.me/5577999120875?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${item.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-primary/10 group ${
                        item.featured ? "bg-primary/5 border border-primary/20" : "hover:border-primary/20"
                      }`}
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground text-sm">{item.name}</span>
                          {item.featured && (
                            <span className="text-[10px] bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded font-medium">
                              TOP
                            </span>
                          )}
                        </div>
                        <span className="text-muted-foreground text-xs">{item.desc}</span>
                      </div>
                      <WhatsAppIcon className="w-4 h-4 text-[hsl(142,70%,49%)] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a href="https://wa.me/5577999120875?text=Olá! Gostaria de conhecer todos os produtos." target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Fale com um Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;