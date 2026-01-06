import { Phone, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Slogan */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Argamassa Vitória" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <span className="font-display font-bold text-lg text-primary-foreground">Argamassa </span>
                <span className="font-display font-bold text-lg text-secondary">Vitória</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              Há mais de 20 anos ajudando a construir sonhos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Início
              </a>
              <a href="#products" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Produtos
              </a>
              <a href="#benefits" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Vantagens
              </a>
              <a href="#about" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Sobre Nós
              </a>
              <a href="#contact" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:7734208084" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                (77) 3420-8084
              </a>
              <a href="https://wa.me/5577999120875" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                <WhatsAppIcon className="w-4 h-4" />
                (77) 9.9912-0875
              </a>
              <a href="mailto:argamassavitoria@hotmail.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                argamassavitoria@hotmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {currentYear} Argamassa Vitória. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
