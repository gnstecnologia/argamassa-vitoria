import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

import argamassaAci from "@/assets/products/Files/ac1.png";
import argamassaAcii from "@/assets/products/Files/argamassa ac2.png";
import argamassaAciii from "@/assets/products/Files/argamssa ac3 fachadas.png";
import argamassaAciiiBranca from "@/assets/products/Files/argamassa ac3 branca.png";
import porcelanatoInterno from "@/assets/products/Files/argamassa_porcelanato.png";
import porcelanatoExterno from "@/assets/products/Files/porcelanto externo.png";
import pisoSobrePiso from "@/assets/products/Files/piso_sobre_piso.png";
import rejuntamento from "@/assets/products/Files/rejnte_flexivel.png";

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
    image: rejuntamento,
    name: "Rejunte Colorido",
    description: "Disponível em diversas cores: preto, grafite, cinza, bege, azul, branco e mais.",
    whatsappMessage: "Olá! Gostaria de saber mais sobre o Rejunte Colorido.",
  },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.6;

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
    <section id="product-carousel" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-muted/50">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Produtos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Linha Completa de Produtos
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça nossa linha completa de argamassas, rejuntes e mais. Clique para solicitar orçamento via WhatsApp.
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden cursor-pointer"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.name}-${index}`}
            className="flex-shrink-0 w-[300px] md:w-[350px] bg-card rounded-2xl shadow-card overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative h-64 bg-muted overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <Button variant="whatsapp" size="sm" className="w-full" asChild>
                <a
                  href={`https://wa.me/5577999120875?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Pedir Orçamento
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mt-12">
        <div className="text-center">
          <Button variant="catalog" size="lg" asChild>
            <a
              href="https://wa.me/5577999120875?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20cat%C3%A1logo%20completo%20de%20produtos."
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Ver Catálogo Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
