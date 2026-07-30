import { Phone, ShieldAlert, Heart, Calendar, HelpCircle, Activity, Star } from "lucide-react";
import { HELPLINE_CARDS } from "../data";
import { HelplineCard } from "../types";
import { motion } from "motion/react";

export default function HelplineCards() {
  // Return different lucide icons based on standard numbers for extra fidelity
  const getIcon = (number: string, isPrimary?: boolean) => {
    switch (number) {
      case "180":
        return <Phone className={`w-6 h-6 ${isPrimary ? "text-white" : "text-brand-pink"}`} />;
      case "100":
        return <HelpCircle className="w-6 h-6 text-indigo-300" />;
      case "190":
        return <ShieldAlert className="w-6 h-6 text-indigo-300" />;
      case "192":
        return <Activity className="w-6 h-6 text-indigo-300" />;
      case "188":
        return <Heart className="w-6 h-6 text-indigo-300" />;
      default:
        return <Calendar className="w-6 h-6 text-indigo-300" />;
    }
  };

  return (
    <section id="denuncia" className="bg-brand-indigo py-20 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Group */}
        <div className="max-w-2xl text-left mb-12 sm:mb-16">
          <span className="text-brand-pink font-sans text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            CANAIS DE DENÚNCIA
          </span>
          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-4.5xl font-semibold tracking-tight leading-tight mb-4">
            Denuncie
          </h2>
          <p className="text-white/70 font-sans text-base sm:text-lg leading-relaxed">
            Todos os canais abaixo são gratuitos e garantem sigilo.
          </p>
        </div>

        {/* Helpline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="helplines-grid">
          {HELPLINE_CARDS.map((card, index) => {
            const isPrimary = card.isPrimary;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`cursor-default relative rounded-2xl p-6 border text-left ${
                  isPrimary
                    ? "bg-brand-pink border-brand-pink text-white shadow-xl shadow-brand-pink/10"
                    : "bg-brand-dark/50 border-white/5 text-white"
                }`}
                id={`card-${card.number}`}
              >
                <div className="flex flex-col h-full justify-between gap-5 relative z-10">
                  <div className="flex gap-5">
                    {/* Left Icon Panel */}
                    <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                      isPrimary ? "bg-white/15" : "bg-white/5"
                    }`}>
                      {getIcon(card.number, isPrimary)}
                    </div>

                    {/* Right Content */}
                    <div>
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight">
                          {card.number}
                        </span>
                      </div>

                      <h3 className={`font-sans text-base font-bold mb-2.5 mt-1 leading-snug ${
                        isPrimary ? "text-white" : "text-white/95"
                      }`}>
                        {card.title}
                      </h3>

                      <p className={`font-sans text-sm leading-relaxed ${
                        isPrimary ? "text-white/90" : "text-white/70"
                      }`}>
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Warning */}
        <p className="text-white/45 font-sans italic text-sm text-center max-w-4xl mx-auto border-t border-white/5 pt-6 leading-relaxed">
          Endereços de casas abrigo são sigilosos para garantir a segurança das mulheres acolhidas.
        </p>
      </div>
    </section>
  );
}
