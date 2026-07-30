import { Download } from "lucide-react";

export default function CampaignDownloads() {
  const posters = [
    {
      id: "cartaz-1",
      title: "Cartaz 1: Direito ao Acolhimento e Proteção",
      description: "Informações essenciais sobre o funcionamento de Casas Abrigo e canais de acolhimento no Brasil.",
      fileName: "Cartaz1.jpg",
      filePath: "/Cartaz1.jpg",
    },
    {
      id: "cartaz-2",
      title: "Cartaz 2: Tipos de Violência contra a Mulher",
      description: "Guia informativo classificando as formas de violência e orientando sobre a Lei Maria da Penha.",
      fileName: "Cartaz2.jpg",
      filePath: "/Cartaz2.jpg",
    }
  ];

  return (
    <section id="downloads-cartazes" className="bg-[#fcfbfc] py-20 sm:py-24 relative overflow-hidden border-t border-slate-100">
      {/* Background elegant accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3c174d]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {posters.map((poster) => (
            <div 
              key={poster.id}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Poster Display Box */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100/80 flex items-center justify-center p-2 sm:p-4 h-[440px] sm:h-[540px] shadow-inner">
                  <img
                    src={poster.filePath}
                    alt={poster.title}
                    className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle hover accent overlay */}
                  <div className="absolute inset-0 bg-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>


              </div>

              {/* Download Button */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href={poster.filePath}
                  download={poster.fileName}
                  className="w-full bg-brand-pink hover:bg-brand-pink/95 text-white font-sans text-sm sm:text-base font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md shadow-brand-pink/15 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                  id={`btn-download-${poster.id}`}
                >
                  <Download className="w-5 h-5 shrink-0" />
                  <span>Baixar cartaz</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
