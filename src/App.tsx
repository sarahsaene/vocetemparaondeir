import { useState } from "react";
import { 
  X, Share2, Copy, Check, MessageSquare, 
  ShieldCheck, AlertCircle, Info, HeartHandshake, Settings, ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HelplineCards from "./components/HelplineCards";
import AboutSection from "./components/AboutSection";
import ViolenceTypes from "./components/ViolenceTypes";
import HouseFinder from "./components/HouseFinder";
import VolunteerSection from "./components/VolunteerSection";
import CampaignDownloads from "./components/CampaignDownloads";
import Footer from "./components/Footer";

export default function App() {
  // Share materials state
  const [activeShareTitle, setActiveShareTitle] = useState<string | null>(null);

  // Cookie manager state
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    performance: true,
    social: false
  });

  // Toasts state
  const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);

  // Function to show custom toast
  const addToast = (message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Simple scroll element helper
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handles copying share link to clipboard
  const copyShareLink = (title: string) => {
    navigator.clipboard.writeText("https://vocetemparaondeir.vercel.app/");
    addToast(`Link copiado com sucesso!`);
    setActiveShareTitle(null);
  };

  return (
    <div className="relative min-h-screen bg-brand-lightBg selection:bg-brand-pink/20 selection:text-brand-pink font-sans">
      
      {/* 1. Header (Navbar) */}
      <Header 
        onNavClick={handleScrollToSection} 
      />

      {/* Spacer matching fixed Header height */}
      <div className="h-[60px] sm:h-[70px] bg-brand-indigo" />

      {/* 2. Hero Header Block */}
      <Hero onFindShelterClick={() => handleScrollToSection("encontre-casa")} />

      {/* 3. Helpline Guides Grid (Canais de Denúncia) */}
      <HelplineCards />

      {/* 4. "O que é uma casa abrigo?" info section */}
      <AboutSection />

      {/* 5. "Tipos de Violência" detailed cards */}
      <ViolenceTypes />

      {/* 6. "Encontre uma casa abrigo" search form */}
      <HouseFinder />

      {/* 7. "Seja Voluntária" layout details */}
      <VolunteerSection 
        onInteractAction={(title) => {
          addToast(`Obrigado pelo seu interesse! Ação registrada para: "${title}"`);
          setActiveShareTitle(title);
        }} 
        onToast={addToast}
      />

      {/* 8. Downloadable Campaign Posters */}
      <CampaignDownloads />

      {/* 9. Footer layout and directory links */}
      <Footer onNavClick={handleScrollToSection} />


      {/* ========================================================
          INTERACTIVE SHARING SOCIAL MODAL WINDOW
         ======================================================== */}
      <AnimatePresence>
        {activeShareTitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            id="share-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6.5 w-full max-w-md border border-gray-100 shadow-2xl text-left text-gray-900"
            >
              <div className="flex justify-between items-start mb-5.5">
                <div>
                  <span className="text-xs font-black tracking-widest text-brand-purple uppercase">
                    DIVULGAR E SALVAR VIDAS
                  </span>
                  <h3 className="font-sans text-xl font-extrabold text-gray-950 mt-1">
                    Compartilhar campanha
                  </h3>
                </div>
                <button
                  onClick={() => setActiveShareTitle(null)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
                  aria-label="Fechar"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              <blockquote className="border-l-4 border-brand-pink pl-3.5 italic text-gray-650 my-4 text-sm font-medium leading-relaxed bg-brand-lightBg p-3 rounded-r-xl">
                Ajude-nos a ampliar o alcance da Rede Abrigo. "{activeShareTitle}"
              </blockquote>

              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mt-5 mb-3.5">
                Escolha o Canal de Disseminação
              </span>

              {/* Social button links */}
              <div className="grid grid-cols-2 gap-3 mb-6" id="social-share-pad">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `Você tem para onde ir? Conheça canais de apoio e a rede de casas abrigo. Saiba mais em: https://vocetemparaondeir.vercel.app/`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    addToast("Abrindo WhatsApp...");
                    setActiveShareTitle(null);
                  }}
                  className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/50 p-3 rounded-xl flex items-center justify-center gap-2.5 text-emerald-800 text-sm font-bold transition-colors"
                >
                  <span>🟢 WhatsApp</span>
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `Você tem para onde ir? Conheça a rede de casas abrigo e canais de apoio no Brasil. #VocêTemParaOndeIr https://vocetemparaondeir.vercel.app/`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    addToast("Abrindo Twitter...");
                    setActiveShareTitle(null);
                  }}
                  className="bg-sky-50 hover:bg-sky-100 border border-sky-250/50 p-3 rounded-xl flex items-center justify-center gap-2.5 text-sky-800 text-sm font-bold transition-colors"
                >
                  <span>🔵 Twitter / X</span>
                </a>
              </div>

              {/* Alternative Copy Link bar */}
              <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex items-center justify-between gap-2.5">
                <span className="font-mono text-xs text-gray-500 break-all select-all font-medium truncate flex-1 pl-1">
                  https://vocetemparaondeir.vercel.app/
                </span>
                <button
                  onClick={() => copyShareLink(activeShareTitle)}
                  className="bg-brand-purple hover:bg-brand-purple/95 px-3.5 py-1.5 rounded-lg text-white font-sans text-xs font-bold flex items-center gap-1 shrink-0 shadow-sm transition-colors focus:outline-none"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Link</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ========================================================
          STABLE FLOATING COOKIE PRIVACY BADGE (As seen in print)
         ======================================================== */}
      <button
        onClick={() => setIsCookieOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-white/95 hover:bg-white text-gray-700 hover:text-gray-950 font-sans text-[11px] sm:text-xs font-bold leading-normal px-4 py-2 rounded-full shadow-lg hover:shadow-xl border border-gray-100 hover:-translate-y-0.5 active:scale-98 transition-all flex items-center gap-2 cursor-pointer focus:outline-none"
        id="persistent-cookies-manager-btn"
      >
        <span className="text-sm">🍪</span>
        <span>Gerenciar cookies ou desativar</span>
      </button>


      {/* ========================================================
          COOKIE CONSENT MANAGEMENT SIDE PANELS / MODALS
         ======================================================== */}
      <AnimatePresence>
        {isCookieOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            id="cookie-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-7 w-full max-w-lg border border-gray-100 shadow-2xl text-left text-gray-900"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-black tracking-widest text-brand-purple uppercase">
                    CENTRAL DE COMPLIANCE & PRIVACIDADE
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-gray-950 mt-1">
                    Gerenciar cookies de utilidade
                  </h3>
                </div>
                <button
                  onClick={() => setIsCookieOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
                  aria-label="Fechar"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                Utilizamos cookies de telemetria institucional para acompanhar estatísticas agregadas de buscas regionais, ajudando a aprimorar as localizações de pontos CRAM indicados. Suas preferências podem ser ajustadas em tempo real.
              </p>

              {/* Toggles items block space */}
              <div className="space-y-4 mb-8" id="compliance-switches-group">
                {/* Switch 1: Essential */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-left pr-4">
                    <span className="block font-sans text-sm font-bold text-gray-900 leading-normal">
                      Cookies estritamente necessários
                    </span>
                    <span className="block font-sans text-xs text-gray-500 mt-1 leading-normal">
                      Essenciais para habilitar consultas no HouseFinder e carregar bases normativas. Não podem ser desabilitados.
                    </span>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <div className="text-emerald-600 text-xs font-bold uppercase py-1 px-2.5 bg-emerald-100 rounded-full">
                      Ativo
                    </div>
                  </div>
                </div>

                {/* Switch 2: Analytics Performance */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-left pr-4">
                    <span className="block font-sans text-sm font-bold text-gray-900 leading-normal">
                      Métricas agregadas e desempenho
                    </span>
                    <span className="block font-sans text-xs text-gray-500 mt-1">
                      Medições de acessos em painéis regionais. Nenhum dado de identidade individual ou histórico de navegação é armazenado.
                    </span>
                  </div>
                  <button
                    onClick={() => setCookieSettings({ ...cookieSettings, performance: !cookieSettings.performance })}
                    className={`w-12 h-6.5 rounded-full p-1 transition-colors duration-150 relative ${
                      cookieSettings.performance ? "bg-brand-purple" : "bg-gray-300"
                    }`}
                  >
                    <div className={`w-4.5 h-4.5 rounded-full bg-white shadow-md transition-transform duration-150 absolute top-1 ${
                      cookieSettings.performance ? "right-1" : "left-1"
                    }`} />
                  </button>
                </div>

                {/* Switch 3: Social & Integrations */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-left pr-4">
                    <span className="block font-sans text-sm font-bold text-gray-900 leading-normal">
                      Integrações de mídias compartilhadas
                    </span>
                    <span className="block font-sans text-xs text-gray-500 mt-1">
                      Habilita redirecionamento rápido de WhatsApp e mídias sociais para os materiais da campanha.
                    </span>
                  </div>
                  <button
                    onClick={() => setCookieSettings({ ...cookieSettings, social: !cookieSettings.social })}
                    className={`w-12 h-6.5 rounded-full p-1 transition-colors duration-150 relative ${
                      cookieSettings.social ? "bg-brand-purple" : "bg-gray-300"
                    }`}
                  >
                    <div className={`w-4.5 h-4.5 rounded-full bg-white shadow-md transition-transform duration-150 absolute top-1 ${
                      cookieSettings.social ? "right-1" : "left-1"
                    }`} />
                  </button>
                </div>
              </div>

              {/* Action buttons footer inside compliant manager */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => {
                    setCookieSettings({ essential: true, performance: false, social: false });
                    addToast("Preferências salvas: Apenas cookies essenciais permitidos.");
                    setIsCookieOpen(false);
                  }}
                  className="px-4.5 py-3 rounded-lg hover:bg-gray-100 text-gray-600 font-sans text-xs font-bold transition-all focus:outline-none"
                >
                  Negar Opcionais
                </button>

                <button
                  onClick={() => {
                    addToast("Preferências de privacidade configuradas com sucesso.");
                    setIsCookieOpen(false);
                  }}
                  className="bg-brand-indigo hover:bg-brand-indigo/95 px-6 py-3 rounded-xl text-white font-sans text-xs font-bold shadow-md transition-colors focus:outline-none"
                >
                  Salvar Preferências
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ========================================================
          GLOBAL TOAST CONTAINER (Corner notifications)
         ======================================================== */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none" id="toasts-portal">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="bg-gray-900 border border-white/5 shadow-2xl rounded-2xl p-4 flex gap-3 text-left items-center pointer-events-auto"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-semibold text-white">
                {toast.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
