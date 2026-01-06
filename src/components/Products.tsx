import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import productMortar from "@/assets/product-mortar.jpg";
import productGrout from "@/assets/product-grout.jpg";

const products = [
  {
    category: "Argamassas",
    image: productMortar,
    items: [
      {
        name: "Argamassa ACI",
        description: "Para assentamento de cerâmica em área interna. Ideal para pisos comuns.",
      },
      {
        name: "Argamassa ACII",
        description: "Para área externa, revestimento de cozinha e banheiro. Alta aderência.",
      },
      {
        name: "Argamassa ACIII Cinza",
        description: "Para fachadas, áreas de grande fluxo e porcelanatos grandes (80x80+).",
        featured: true,
      },
      {
        name: "Argamassa ACIII Branca",
        description: "Para pastilhas de vidro, mármores e pedras naturais. Acabamento premium.",
        featured: true,
      },
      {
        name: "Piso sobre Piso",
        description: "Específica para assentar um novo piso sobre outro existente.",
      },
      {
        name: "Porcelanato Interno/Externo",
        description: "Versões específicas para porcelanato em ambientes internos ou externos.",
      },
    ],
  },
  {
    category: "Rejuntes",
    image: productGrout,
    items: [
      {
        name: "Rejunte Colorido",
        description: "Disponível em diversas cores: preto, marrom, grafite, cinza, bege, verde, azul e mais.",
      },
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Categorias
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Completas em Argamassas e Rejuntes
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada produto é desenvolvido para atender necessidades específicas, garantindo qualidade e durabilidade em sua obra.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((category, idx) => (
            <div key={category.category} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="font-display text-3xl font-bold text-primary-foreground">
                      {category.category}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Products List */}
              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="grid gap-4">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={`https://wa.me/5577999120875?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${item.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-card group ${
                        item.featured
                          ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                          : "bg-card border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-display font-semibold text-foreground">
                              {item.name}
                            </h4>
                            {item.featured && (
                              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium">
                                Destaque
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </div>
                        <MessageCircle className="w-5 h-5 text-[hsl(142,70%,49%)] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Precisa de ajuda para escolher o produto ideal para sua obra?
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5577999120875" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fale com um Especialista
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
