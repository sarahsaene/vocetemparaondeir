import { Share2, Megaphone, MapPin, Mail } from "lucide-react";

interface VolunteerSectionProps {
  onInteractAction: (actionTitle: string) => void;
  onToast?: (msg: string) => void;
}

export default function VolunteerSection({ onInteractAction, onToast }: VolunteerSectionProps) {
  const volunteerActions = [
    {
      id: "action-share",
      icon: <Share2 className="w-5 h-5 text-brand-pink" />,
      text: "Compartilhe nas redes sociais"
    },
    {
      id: "action-megaphone",
      icon: <Megaphone className="w-5 h-5 text-brand-pink" />,
      text: "Divulgue o número 180"
    },
    {
      id: "action-poster",
      icon: <MapPin className="w-5 h-5 text-brand-pink" />,
      text: "Afixe cartazes no seu bairro"
    },
    {
      id: "action-message",
      icon: <Mail className="w-5 h-5 text-brand-pink" />,
      text: "Envie por e-mail e WhatsApp"
    }
  ];

  return (
    <section id="seja-voluntaria" className="bg-brand-indigo text-white py-20 sm:py-24 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-1/2 w-[450px] h-[450px] bg-brand-pink/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column Content - Full Width Adjusted */}
          <div className="lg:col-span-12">
            <span className="text-brand-pink font-sans text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
              FAÇA PARTE
            </span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-4.5xl font-semibold tracking-tight leading-tight mb-6">
              Seja voluntária dessa campanha
            </h2>

            <div className="space-y-4 font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              <p>
                Quanto mais vítimas souberem de seus direitos, maiores são as chances de que encontrem apoio e segurança quando precisarem.
              </p>
              <p>
                Você pode contribuir imprimindo e distribuindo os cartazes desta campanha em seu bairro, local de trabalho, escola, unidade de saúde ou outros espaços de circulação.
              </p>
              <p className="font-semibold text-white/95">
                Compartilhe nas redes sociais, envie por WhatsApp e utilize os murais da sua comunidade. Um cartaz pode ser o acesso à informação que alguém precisava para pedir ajuda.
              </p>
            </div>

            {/* Grid 2x2 of micro-activities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" id="volunteer-actions-grid">
              {volunteerActions.map((act) => (
                <button
                  key={act.id}
                  onClick={() => onInteractAction(act.text)}
                  className="bg-white/5 border border-white/10 hover:border-brand-pink/40 hover:bg-white/10 p-4.5 rounded-xl flex items-center gap-4 text-left transition-all group focus:outline-none cursor-pointer"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-pink/20 transition-colors">
                    {act.icon}
                  </div>
                  <span className="font-sans text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                    {act.text}
                  </span>
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
