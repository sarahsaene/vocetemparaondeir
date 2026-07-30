import { useState, useMemo, FormEvent } from "react";
import { Search, MapPin, Phone, Mail, Check, AlertTriangle, HelpCircle, ArrowRight } from "lucide-react";
import { STATES, CITIES } from "../data";
import { CityData } from "../types";
import { motion, AnimatePresence } from "motion/react";

const REGIONS = [
  "Centro-Oeste",
  "Norte",
  "Nordeste",
  "Sudeste",
  "Sul",
];

const STATE_REGIONS: Record<string, string> = {
  "AC": "Norte",
  "AL": "Nordeste",
  "AP": "Norte",
  "AM": "Norte",
  "BA": "Nordeste",
  "CE": "Nordeste",
  "DF": "Centro-Oeste",
  "ES": "Sudeste",
  "GO": "Centro-Oeste",
  "MA": "Nordeste",
  "MT": "Centro-Oeste",
  "MS": "Centro-Oeste",
  "MG": "Sudeste",
  "PA": "Norte",
  "PB": "Nordeste",
  "PR": "Sul",
  "PE": "Nordeste",
  "PI": "Nordeste",
  "RJ": "Sudeste",
  "RN": "Nordeste",
  "RS": "Sul",
  "RO": "Norte",
  "RR": "Norte",
  "SC": "Sul",
  "SP": "Sudeste",
  "SE": "Nordeste",
  "TO": "Norte",
};

export default function HouseFinder() {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedStateUf, setSelectedStateUf] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CityData[] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Dynamically filter states based on selected region
  const filteredStates = useMemo(() => {
    if (!selectedRegion) return STATES;
    return STATES.filter((state) => STATE_REGIONS[state.uf] === selectedRegion);
  }, [selectedRegion]);

  // Adjust inputs on filter changes
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    // Clear state selection if it's not compatible with the newly selected region
    if (region && selectedStateUf && STATE_REGIONS[selectedStateUf] !== region) {
      setSelectedStateUf("");
    }
    setSearchResult(null);
  };

  const handleStateChange = (uf: string) => {
    setSelectedStateUf(uf);
    // Align region selector with state's region
    if (uf && STATE_REGIONS[uf]) {
      setSelectedRegion(STATE_REGIONS[uf]);
    }
    setSearchResult(null);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    let results = CITIES;

    if (selectedRegion) {
      results = results.filter((city) => city.region === selectedRegion);
    }

    if (selectedStateUf) {
      results = results.filter((city) => city.stateUf === selectedStateUf);
    }

    // Sort alphabetically by name
    results = [...results].sort((a, b) => a.name.localeCompare(b.name));

    setSearchResult(results);
  };

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="encontre-casa" className="bg-white py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Title Group */}
        <div className="max-w-3xl text-left mb-12">
          <span className="text-brand-purple font-sans text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            REDE NACIONAL
          </span>
          <h2 className="text-gray-900 font-serif text-3xl sm:text-4xl md:text-4.5xl font-semibold tracking-tight leading-tight mb-4">
            Encontre uma casa abrigo
          </h2>
          <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
            Filtre por região e estado. Como os endereços são mantidos em sigilo para garantir a segurança das vítimas, entre em contato através do telefone ou e-mail indicados abaixo para receber orientações e encaminhamento seguro.
          </p>
        </div>

        {/* Dynamic Search Box Form */}
        <div className="bg-brand-lightBg rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-brand-purple/5 mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            
            {/* Region Input */}
            <div className="md:col-span-5 text-left">
              <label htmlFor="region-select" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2 font-sans">
                Região
              </label>
              <div className="relative">
                <select
                  id="region-select"
                  value={selectedRegion}
                  onChange={(e) => handleRegionChange(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 shadow-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all cursor-pointer appearance-none outline-none"
                >
                  <option value="">Todas as Regiões</option>
                  {REGIONS.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <span className="text-xs">▼</span>
                </div>
              </div>
            </div>

            {/* State Input */}
            <div className="md:col-span-5 text-left">
              <label htmlFor="state-select" className="block text-xs font-bold text-gray-700 tracking-wider uppercase mb-2 font-sans">
                Estado
              </label>
              <div className="relative">
                <select
                  id="state-select"
                  value={selectedStateUf}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 shadow-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all cursor-pointer appearance-none outline-none"
                >
                  <option value="">Selecione o estado...</option>
                  {filteredStates.map((state) => (
                    <option key={state.id} value={state.uf}>
                      {state.name} ({state.uf})
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <span className="text-xs">▼</span>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={!selectedRegion && !selectedStateUf}
                className="w-full bg-brand-indigo hover:bg-brand-indigo/95 disabled:bg-gray-300 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-brand-indigo/25 text-white font-sans text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all outline-none focus:outline-none cursor-pointer"
                id="search-address-btn"
              >
                <Search className="w-4.5 h-4.5" />
                <span>Buscar</span>
              </button>
            </div>

          </form>
        </div>

        {/* Attention salmon-colored banner */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8 flex gap-4 text-left shadow-sm">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5" id="alert-warning-icon">
            <AlertTriangle className="w-4 h-4 text-red-700" />
          </div>
          <div>
            <p className="font-sans text-sm sm:text-md text-red-800 leading-relaxed font-semibold">
              Atenção: por segurança, os endereços das casas abrigo não são divulgados publicamente. Entre em contato por telefone ou acione o 180 para ser encaminhada com segurança.
            </p>
          </div>
        </div>

        {/* Results Container */}
        <AnimatePresence mode="wait">
          {searchResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-8 space-y-4"
              id="search-results-panel"
            >
              <h3 className="font-sans text-md font-bold text-gray-800 uppercase tracking-widest mb-4">
                PONTOS DE ENCAMINHAMENTO DISPONÍVEIS ({searchResult.length})
              </h3>

              {searchResult.length === 0 ? (
                <div className="bg-[#fafafa] rounded-2xl p-10 border border-dashed border-gray-200 text-center">
                  <HelpCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="font-sans text-gray-600 font-medium">
                    Nenhum ponto local correspondente cadastrado. Ligue para a Central 180 para receber atendimento especializado em sua região.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {searchResult.map((result) => (
                    <motion.div
                      key={result.id}
                      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between text-left"
                      layoutId={result.id}
                    >
                      <div>
                        {/* Upper Header */}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-brand-purple" />
                            </div>
                            <span className="font-sans text-xs font-black tracking-widest text-brand-purple uppercase">
                              CRAM / CENTRO DE APOIO
                            </span>
                          </div>
                          <div className="flex gap-1.5 items-center">
                            {result.region && (
                              <span className="bg-brand-purple/10 text-brand-purple font-sans text-xs font-semibold px-2 py-0.5 rounded-full">
                                {result.region}
                              </span>
                            )}
                            <span className="bg-brand-indigo text-white font-mono text-xs font-bold px-2 py-0.5 rounded-full">
                              {result.stateUf}
                            </span>
                          </div>
                        </div>

                        {/* Title details */}
                        <h4 className="font-sans text-lg font-bold text-gray-950 mb-4 leading-snug">
                          {result.name}
                        </h4>

                        {/* Information Row contact details */}
                        <div className="space-y-3.5 mb-6">
                          {/* Telephone contact */}
                          {result.phone && (
                            <div className="flex gap-3 text-sm text-gray-700">
                              <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                              <div>
                                <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-none mb-1">
                                  Telefone de Atendimento
                                </span>
                                <span className="font-mono text-sm font-semibold text-gray-800 block">
                                  {result.phone}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Email contact */}
                          {result.email && (
                            <div className="flex gap-3 text-sm text-gray-700">
                              <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                              <div>
                                <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-none mb-1">
                                  E-mail Institucional
                                </span>
                                <span className="font-mono text-sm break-all font-medium text-gray-800">
                                  {result.email}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* CTA Action links */}
                      {result.email && (
                        <div className="flex gap-3 border-t border-gray-50 pt-4 mt-auto">
                          <button
                            onClick={() => handleCopyEmail(result.email!, result.id)}
                            className={`w-full font-sans text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all focus:outline-none ${
                              copiedId === result.id
                                ? "bg-emerald-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                            }`}
                          >
                            {copiedId === result.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Mail className="w-3.5 h-3.5" />
                                <span>Copiar E-mail</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
