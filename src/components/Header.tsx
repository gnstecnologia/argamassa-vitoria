import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#products", label: "Produtos" },
    { href: "#benefits", label: "Vantagens" },
    { href: "#about", label: "Sobre" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Argamassa Vitória" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-foreground">Argamassa</span>
              <span className="font-display font-bold text-xl text-secondary ml-1">Vitória</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:7734208084" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(77) 3420-8084</span>
            </a>
            <Button variant="hero" asChild>
              <a href="https://wa.me/5577999120875" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-4" asChild>
                <a href="https://wa.me/5577999120875" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
