import { useState, useEffect } from "react";
import { Phone, Shield, Menu, X, HeartHandshake, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", id: "inicio" },
    { name: "Denúncia", id: "denuncia" },
    { name: "Casa Abrigo", id: "casa-abrigo" },
    { name: "Tipos de Violência", id: "tipos-violencia" },
    { name: "Encontre uma Casa", id: "encontre-casa" },
    { name: "Seja Voluntária", id: "seja-voluntaria" }
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-indigo/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
            : "bg-brand-indigo py-5"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick("inicio")}
              className="flex items-center text-white focus:outline-none hover:opacity-90 active:scale-95 transition-all"
              id="logo-btn"
              aria-label="Ir para o início"
            >
              <img
                src="/logo white voce tem para onde ir.png"
                className="h-10 sm:h-12 w-auto object-contain transition-all"
                alt="Logo Você Tem Para Onde Ir"
                referrerPolicy="no-referrer"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-white/80 hover:text-white font-sans text-sm font-medium transition-colors relative py-1 focus:outline-none group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Fast Action display */}
            <div className="hidden sm:flex items-center gap-5">
              <a
                href="https://www.instagram.com/vocetemparaondeir/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white flex items-center gap-2 font-sans text-sm font-medium transition-colors"
                id="header-instagram-link"
              >
                <Instagram className="w-4 h-4 text-brand-pink" />
                <span>@vocetemparaondeir</span>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white/90 hover:text-white p-1 focus:outline-none"
              aria-label="Abrir menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden bg-brand-indigo border-b border-white/10 shadow-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-5 transition-all py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-white/85 hover:text-white text-base font-medium py-2 border-b border-white/5 last:border-0 hover:pl-2 transition-all duration-150"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/vocetemparaondeir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-white/25 hover:border-white/40 text-white/90 hover:text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-center"
                  id="instagram-btn-mobile"
                >
                  <Instagram className="w-5 h-5 text-brand-pink" />
                  <span>@vocetemparaondeir</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
