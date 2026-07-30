import { ArrowRight, Info, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onFindShelterClick: () => void;
}

export default function Hero({ onFindShelterClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen bg-brand-indigo flex items-center pt-20 overflow-hidden"
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508847154043-be12a2a7fc10?q=80&w=1920&auto=format&fit=crop"
          alt="Mulheres unidas pelo apoio"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-indigo via-brand-indigo/90 to-brand-indigo/60 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-12 sm:py-24">
        <div className="max-w-3xl ml-0">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-pink font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 block text-left"
          >
            Você não está sozinha.
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.12] mb-6 sm:mb-8 text-left"
          >
            Você tem direito ao acolhimento e à proteção
          </motion.h1>

          {/* Action description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-sans text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl text-left"
          >
            Em todo o Brasil, há uma rede de casas abrigo pronta para receber você com segurança.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 text-left"
          >
            <button
              onClick={onFindShelterClick}
              className="bg-brand-purple hover:bg-brand-purple/90 active:scale-[0.99] text-white font-sans text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl flex items-center justify-center sm:justify-start gap-2.5 shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/30 transition-all duration-150 group cursor-pointer focus:outline-none"
              id="cta-shelter-btn"
            >
              <span>Encontre uma casa abrigo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#denuncia"
              className="px-6 py-3.5 text-center text-white/80 hover:text-white font-sans text-sm sm:text-base font-semibold hover:bg-white/5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Info className="w-5 h-5 text-brand-pink" />
              <span>Conhecer Canais de Ajuda</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
