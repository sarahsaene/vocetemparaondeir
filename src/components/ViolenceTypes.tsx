import { useState } from "react";
import { Activity, Eye, Landmark, Ban, MessageSquare, Smartphone, Info, Brain, Hand, Phone } from "lucide-react";
import { VIOLENCE_TYPES } from "../data";
import { ViolenceType } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function ViolenceTypes() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Helper mapping string to Lucide React component
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Física":
        return <Activity className="w-6 h-6 text-brand-purple" />;
      case "Psicológica":
        return <Brain className="w-6 h-6 text-brand-purple" />;
      case "Patrimonial":
        return <Landmark className="w-6 h-6 text-brand-purple" />;
      case "Sexual":
        return <Ban className="w-6 h-6 text-brand-purple" />;
      case "Moral":
        return <MessageSquare className="w-6 h-6 text-brand-purple" />;
      case "Digital":
        return <Smartphone className="w-6 h-6 text-brand-purple" />;
      case "Vicária":
        return <Hand className="w-6 h-6 text-brand-purple" />;
      default:
        return <Info className="w-6 h-6 text-brand-purple" />;
    }
  };

  const getDetailTips = (id: string) => {
    switch (id) {
      case "fisica":
        return "Medidas urgentes: Se houver ferimentos, dirija-se ao SAMU (192) ou procure atendimento em UPA/Hospital. Registre as marcas de agressão por foto e busque uma Delegacia de Defesa da Mulher (DDM) para solicitar Medida Protetiva de Urgência.";
      case "psicologica":
        return "Medidas recomendadas: Reúna prints de mensagens agressivas, anote datas de episódios de humilhação ou perseguição. Agressão verbal intensa e controle obsessivo são crimes previstos em lei. Busque apoio em CRAMs ou conselhos municipais.";
      case "patrimonial":
        return "Medidas recomendadas: Não entregue seus documentos originais ou cartões para o agressor. Se possível, mantenha cópia digital de certidões, escrituras e comprovantes de rendimento salvos em e-mail seguro.";
      case "sexual":
        return "Medidas urgentes: Em caso de estupro recente, procure atendimento de saúde especializado em até 72 horas para receber a profilaxia pós-exposição (PEP) e contracepção de emergência. O acolhimento é sigiloso e não exige B.O. prévio.";
      case "moral":
        return "Medidas recomendadas: Salve todas as mensagens, áudios e postagens que contenham mentiras ou ofensas graves contra você. Isso serve como prova jurídica de injúria ou difamação ao registrar a denúncia.";
      case "digital":
        return "Medidas recomendadas: Tire capturas de tela completas (com data, hora e URLs visibles), bloqueie o perfil ofensivo e não apague as provas originais. A divulgação não autorizada de fotos íntimas é crime federal.";
      case "vicaria":
        return "Medidas recomendadas: Proteja a integridade física e emocional de seus filhos, familiares ou pessoas queridas. Guarde ameaças direcionadas a eles, registros de chantagens emocionais ou tentativas de intimidação por meio de terceiros.";
      default:
        return "";
    }
  };

  return (
    <section id="tipos-violencia" className="bg-[#f0edf7] py-20 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Title Block */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16">
          <span className="text-brand-purple font-sans text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            RECONHEÇA
          </span>
          <h2 className="text-gray-900 font-serif text-3xl sm:text-4xl md:text-4.5xl font-semibold tracking-tight leading-tight mb-4 text-left">
            Tipos de violência contra a mulher
          </h2>
          <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed max-w-3xl text-left">
            A violência doméstica não se resume a agressões físicas. A Lei Maria da Penha reconhece cinco formas, e o direito brasileiro tem avançado para incluir novas manifestações, como a violência digital e a violência vicária, ampliando a proteção às vítimas e o enfrentamento dessas práticas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="violence-grid">
          {VIOLENCE_TYPES.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
              className={`p-6 sm:p-7 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative ${
                selectedType === type.id
                  ? "bg-white border-brand-purple shadow-xl shadow-brand-purple/10"
                  : "bg-white/90 hover:bg-white border-transparent hover:border-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/5"
              }`}
              id={`violence-${type.id}`}
            >
              {/* Highlight Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-purple/8 flex items-center justify-center">
                  {renderIcon(type.iconName)}
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase font-sans text-brand-purple/60 group-hover:text-brand-purple flex items-center gap-0.5">
                  <span>Saiba Mais</span>
                </div>
              </div>

              <h3 className="font-sans text-lg font-bold text-gray-900 mb-2.5">
                {type.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed mb-1">
                {type.text}
              </p>

              {/* Collapsed interactive section detailing legal procedures */}
              <AnimatePresence>
                {selectedType === type.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-gray-100"
                  >
                    <span className="block font-sans text-xs font-bold text-brand-purple uppercase tracking-wider mb-2">
                      Orientações de Segurança
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-brand-purple/90 leading-relaxed bg-brand-purple/5 rounded-xl p-3.5">
                      {getDetailTips(type.id)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Protection Warning Banner - Interactive block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-indigo rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden"
          id="protection-banner"
        >
          {/* Subtle logo pattern in background */}
          <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

          <div className="flex gap-4 items-start text-left max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
              <Info className="w-5 h-5 text-brand-pink" />
            </div>
            <div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white mb-1.5">
                Informação protege.
              </h4>
              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                Se você reconhece qualquer uma dessas situações na sua vida ou na de alguém próximo, procure ajuda. Disque 180 para obter orientação gratuita, sigilosa e disponível 24 horas.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
