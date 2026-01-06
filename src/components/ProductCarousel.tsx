import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

import argamassaAci from "@/assets/products/argamassa-aci.jpg";
import argamassaAcii from "@/assets/products/argamassa-acii.jpg";
import argamassaAciii from "@/assets/products/argamassa-aciii.jpg";
import argamassaAciiiBranca from "@/assets/products/argamassa-aciii-branca.png";
import porcelanatoInterno from "@/assets/products/porcelanato-interno.jpg";
import porcelanatoExterno from "@/assets/products/porcelanato-externo.jpg";
import pisoSobrePiso from "@/assets/products/piso-sobre-piso.jpg";
import calRefinado from "@/assets/products/cal-refinado.jpg";
import rejuntamento from "@/assets/products/rejuntamento.jpg";
import tintaEmPo from "@/assets/products/tinta-em-po.jpg";
import coranteHidracor from "@/assets/products/corante-hidracor.jpg";

const products = [
  {
    image: argamassaAci,
    name: "Argamassa ACI",
    description: "Para assentamento de cerâmica em área interna. Ideal para pisos comuns.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa ACI.",
  },
  {
    image: argamassaAcii,
    name: "Argamassa ACII",
    description: "Para área externa, revestimento de cozinha e banheiro. Alta aderência.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa ACII.",
  },
  {
    image: argamassaAciii,
    name: "Argamassa ACIII Cinza",
    description: "Para fachadas, áreas de grande fluxo e porcelanatos grandes (80x80+).",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa ACIII Cinza.",
  },
  {
    image: argamassaAciiiBranca,
    name: "Argamassa ACIII Branca",
    description: "Para pastilhas de vidro, mármores e pedras naturais. Acabamento premium.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa ACIII Branca.",
  },
  {
    image: porcelanatoInterno,
    name: "Porcelanato Interno",
    description: "Específica para assentar porcelanato em áreas internas com excelente aderência.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa Porcelanato Interno.",
  },
  {
    image: porcelanatoExterno,
    name: "Porcelanato Externo",
    description: "Para assentar porcelanato em áreas externas com resistência às intempéries.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa Porcelanato Externo.",
  },
  {
    image: pisoSobrePiso,
    name: "Piso sobre Piso",
    description: "Específica para assentar um novo piso sobre outro existente.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Argamassa Piso sobre Piso.",
  },
  {
    image: calRefinado,
    name: "Cal Refinado",
    description: "Cal super refinado especial para pintura. Embalagem de 5kg.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Cal Refinado.",
  },
  {
    image: rejuntamento,
    name: "Rejunte Colorido",
    description: "Disponível em diversas cores: preto, grafite, cinza, bege, azul, branco e mais.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Rejunte Colorido.",
  },
  {
    image: tintaEmPo,
    name: "Tinta em Pó",
    description: "Tinta em pó para exteriores e interiores. Lavável e de alta durabilidade.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Tinta em Pó.",
  },
  {
    image: coranteHidracor,
    name: "Corante Hidracor",
    description: "Corante líquido em diversas cores: amarelo, ocre, verde, azul, vermelho, violeta, preto e laranja.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Corante Hidracor.",
  },
];

import productsShowcase from "@/assets/products-showcase.png";

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      
      // Reset position for infinite loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate products for infinite scroll effect
  const duplicatedProducts = [...products, ...products];

  return (
    <section id="product-carousel" className="relative py-24 overflow-hidden">
      {/* Background with diagonal design */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-primary/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent transform skew-x-12 origin-top-right" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                Nossos Produtos
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Linha Completa de <span className="text-primary">Argamassas</span> e Rejuntes
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                Há mais de 20 anos fabricando produtos de qualidade. Conheça nossa linha completa e solicite seu orçamento via WhatsApp.
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href="https://wa.me/5577999120875?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20linha%20de%20produtos."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </Button>
            </div>
            
            {/* Showcase Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              <img
                src={productsShowcase}
                alt="Linha de produtos Argamassa Vitória"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              Explore Nossos Produtos
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>

        {/* Infinite Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-pointer pb-4"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedProducts.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden group hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <Button variant="whatsapp" size="sm" className="w-full" asChild>
                  <a
                    href={`https://wa.me/5577999120875?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir Orçamento
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="container mx-auto px-4 mt-12">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp e receba atendimento rápido e personalizado.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/5577999120875?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20cat%C3%A1logo%20completo%20de%20produtos."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Ver Catálogo Completo no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
