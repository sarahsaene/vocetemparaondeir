import { HeartHandshake, Phone, ShieldCheck, Instagram } from "lucide-react";

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const navLinks = [
    { name: "Início", id: "inicio" },
    { name: "Denúncia", id: "denuncia" },
    { name: "Casa Abrigo", id: "casa-abrigo" },
    { name: "Tipos de Violência", id: "tipos-violencia" },
    { name: "Encontre uma Casa", id: "encontre-casa" },
    { name: "Seja Voluntária", id: "seja-voluntaria" }
  ];

  const emergencyContacts = [
    { number: "180", name: "Central de Atendimento à Mulher" },
    { number: "100", name: "Direitos Humanos" },
    { number: "190", name: "Polícia Militar" },
    { number: "192", name: "SAMU" }
  ];

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 pt-16 pb-8 text-left" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/5">
          
          {/* Column 1 - Logo & pitch */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/logo white voce tem para onde ir.png"
                className="h-14 sm:h-16 w-auto object-contain"
                alt="Logo Você Tem Para Onde Ir"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="font-sans text-white/70 text-sm max-w-sm leading-relaxed">
              Campanha de comunicação para divulgar a rede de casas abrigo do Brasil, conscientizar a sociedade sobre os canais de apoio e proteger vidas.
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/vocetemparaondeir/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-sans text-sm font-semibold transition-colors group"
                id="footer-instagram-link"
              >
                <Instagram className="w-5 h-5 text-brand-pink group-hover:scale-110 transition-transform duration-200" />
                <span>@vocetemparaondeir</span>
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation Header Links */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold tracking-widest text-white/50 uppercase mb-4.5">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 font-sans text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-white/70 hover:text-white transition-colors py-0.5 block hover:translate-x-1 duration-150 text-left cursor-pointer focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Emergency Links */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs font-bold tracking-widest text-white/50 uppercase mb-4.5">
              EM EMERGÊNCIA
            </h4>
            <ul className="space-y-3.5 font-sans text-sm">
              {emergencyContacts.map((contact) => (
                <li key={contact.number} className="flex gap-3 items-center">
                  <span className="font-mono text-brand-pink font-black text-sm shrink-0">
                    {contact.number}
                  </span>
                  <div>
                    <span className="text-white/80 font-semibold leading-snug text-sm block">
                      {contact.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer bottom metadata row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/40">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-white/20" />
            <span>Endereços de casas abrigo são sigilosos por razões de segurança.</span>
          </div>
          <div>
            <span>Campanha de utilidade pública — 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
