import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import fotoProdutos from "@/assets/products/FOTO PRUDUTOS 01.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Fábrica de argamassa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Há mais de 20 anos no mercado
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
          animationDelay: "0.1s"
        }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up lg:text-5xl">
            Argamassa de Qualidade para
            <span className="block text-white mt-2">Construir Seus Sonhos</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Fabricamos argamassas e rejuntes com qualidade, confiança e durabilidade. 
            Produto confiável para assentamento de pisos, revestimentos e porcelanatos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5577999120875" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </Button>
            <Button variant="catalog" size="lg" asChild>
              <a href="#product-carousel">
                <Send className="w-5 h-5" />
                Ver Produtos
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Qualidade</p>
                <p className="text-primary-foreground/60 text-sm">Garantida</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Entrega</p>
                <p className="text-primary-foreground/60 text-sm">Rápida</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">+20 Anos</p>
                <p className="text-primary-foreground/60 text-sm">De Experiência</p>
              </div>
            </div>
          </div>
          </div>
          {/* Imagem dos produtos */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={fotoProdutos}
              alt="Argamassa Vitória - Interno ACI, Rejuntamento Flexível e ACIII Branca"
              className="max-h-[420px] w-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;