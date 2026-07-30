import { Heart, Lock, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="casa-abrigo" className="bg-white py-20 sm:py-24 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Information */}
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            <span className="text-brand-purple font-sans text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
              ENTENDA
            </span>
            <h2 className="text-gray-900 font-serif text-3xl sm:text-4xl md:text-4.5xl font-semibold tracking-tight leading-tight mb-6">
              O que é uma casa abrigo?
            </h2>

            {/* Paragraph Block */}
            <div className="space-y-5 text-gray-700 font-sans text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Casas abrigo são locais de acolhimento temporário para mulheres em situação de risco de vida por violência doméstica e familiar. Elas oferecem proteção, atendimento psicossocial, jurídico e orientação para a reconstrução de uma vida segura.
              </p>
              <p className="font-semibold text-gray-800">
                O serviço é gratuito e os endereços são mantidos em sigilo absoluto — uma medida de segurança para as mulheres acolhidas e suas filhas e filhos.
              </p>
              <p>
                O encaminhamento para uma casa abrigo é feito pelas Delegacias de Defesa da Mulher (DDM), Centros de Referência de Atendimento à Mulher (CRAM) ou pela Central 180.
              </p>
            </div>

            {/* Badges / Checklist footer */}
            <div className="flex flex-wrap gap-4" id="badges-row">
              <div className="inline-flex items-center gap-2.5 bg-brand-purple/5 border border-brand-purple/15 text-brand-purple px-4.5 py-3 rounded-full font-sans text-sm sm:text-base font-semibold shadow-sm">
                <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/10" />
                <span>Atendimento gratuito</span>
              </div>

              <div className="inline-flex items-center gap-2.5 bg-brand-purple/5 border border-brand-purple/15 text-brand-purple px-4.5 py-3 rounded-full font-sans text-sm sm:text-base font-semibold shadow-sm">
                <Lock className="w-5 h-5 text-brand-purple" />
                <span>Endereço sigiloso</span>
              </div>
            </div>
          </div>

          {/* Right Column - Statistics Panel */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-brand-indigo rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-white/5 mx-auto max-w-md lg:max-w-none text-left"
              id="house-stats-panel"
            >
              {/* Soft decorative blur background */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-pink/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-brand-purple/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <span className="block font-sans text-xs font-black text-brand-pink tracking-widest uppercase mb-4">
                  RECONHECIMENTO NACIONAL
                </span>

                <div className="font-sans text-6xl sm:text-7xl font-black tracking-tight mb-2 text-white">
                  241
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mb-4 text-white">
                  casas abrigo ativas no Brasil*
                </h3>

                <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                  Dispostas de forma estratégica para garantir o acolhimento emergencial, orientação jurídica e acompanhamento psicológico sob absoluto sigilo.
                </p>

                <div className="font-sans text-[10px] text-white/50 italic uppercase tracking-wider border-t border-white/10 pt-4">
                  *Fonte: MMFDH / Dados 2023
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
