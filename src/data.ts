import { HelplineCard, ViolenceType, StateData, CityData, CampaignPoster } from "./types";

export const HELPLINE_CARDS: HelplineCard[] = [
  {
    id: "180",
    number: "180",
    title: "Central de Atendimento à Mulher",
    text: "Denúncias, informações e encaminhamentos. Disponível 24h, gratuito e sigiloso.",
    isPrimary: true,
  },
  {
    id: "100",
    number: "100",
    title: "Direitos Humanos",
    text: "Violações de direitos humanos, incluindo violência doméstica e familiar.",
  },
  {
    id: "190",
    number: "190",
    title: "Polícia Militar",
    text: "Emergências e situações de risco imediato.",
  },
  {
    id: "192",
    number: "192",
    title: "SAMU",
    text: "Urgências e emergências médicas.",
  },
  {
    id: "188",
    number: "188",
    title: "CVV — Valorização da Vida",
    text: "Apoio emocional em situações de crise. 24h, gratuito.",
  },
  {
    id: "197",
    number: "197",
    title: "Polícia Civil",
    text: "Registro de boletim de ocorrência e investigações criminais.",
  },
];

export const VIOLENCE_TYPES: ViolenceType[] = [
  {
    id: "fisica",
    title: "Física",
    text: "Qualquer conduta que ofenda a integridade ou saúde corporal: tapas, empurrões, socos, queimaduras e outras formas de agressão direta.",
    iconName: "Física",
  },
  {
    id: "psicologica",
    title: "Psicológica",
    text: "Ações que causam dano emocional ou controlam comportamentos: ameaças, humilhações, isolamento, vigilância e manipulação.",
    iconName: "Psicológica",
  },
  {
    id: "patrimonial",
    title: "Patrimonial",
    text: "Retenção, destruição ou subtração de bens, documentos, recursos financeiros e direitos econômicos.",
    iconName: "Patrimonial",
  },
  {
    id: "sexual",
    title: "Sexual",
    text: "Qualquer conduta que constranja a participar ou presenciar situação sexual sem consentimento.",
    iconName: "Sexual",
  },
  {
    id: "moral",
    title: "Moral",
    text: "Calúnia, difamação ou injúria: falas e ações que afetam a honra, a reputação e a imagem da mulher.",
    iconName: "Moral",
  },
  {
    id: "digital",
    title: "Digital",
    text: "Exposição não consentida de imagens íntimas, assédio online, monitoramento por dispositivos e controle via redes sociais.",
    iconName: "Digital",
  },
  {
    id: "vicaria",
    title: "Vicária",
    text: "Violência cometida contra filhos, familiares ou pessoas queridas da mulher com o objetivo de causar sofrimento e prejuízo psicológico à mãe.",
    iconName: "Vicária",
  },
];

export const STATES: StateData[] = [
  { id: "ac", name: "Acre", uf: "AC" },
  { id: "al", name: "Alagoas", uf: "AL" },
  { id: "ap", name: "Amapá", uf: "AP" },
  { id: "am", name: "Amazonas", uf: "AM" },
  { id: "ba", name: "Bahia", uf: "BA" },
  { id: "ce", name: "Ceará", uf: "CE" },
  { id: "df", name: "Distrito Federal", uf: "DF" },
  { id: "es", name: "Espírito Santo", uf: "ES" },
  { id: "go", name: "Goiás", uf: "GO" },
  { id: "ma", name: "Maranhão", uf: "MA" },
  { id: "mt", name: "Mato Grosso", uf: "MT" },
  { id: "ms", name: "Mato Grosso do Sul", uf: "MS" },
  { id: "mg", name: "Minas Gerais", uf: "MG" },
  { id: "pa", name: "Pará", uf: "PA" },
  { id: "pb", name: "Paraíba", uf: "PB" },
  { id: "pr", name: "Paraná", uf: "PR" },
  { id: "pe", name: "Pernambuco", uf: "PE" },
  { id: "pi", name: "Piauí", uf: "PI" },
  { id: "rj", name: "Rio de Janeiro", uf: "RJ" },
  { id: "rn", name: "Rio Grande do Norte", uf: "RN" },
  { id: "rs", name: "Rio Grande do Sul", uf: "RS" },
  { id: "ro", name: "Rondônia", uf: "RO" },
  { id: "rr", name: "Roraima", uf: "RR" },
  { id: "sc", name: "Santa Catarina", uf: "SC" },
  { id: "sp", name: "São Paulo", uf: "SP" },
  { id: "se", name: "Sergipe", uf: "SE" },
  { id: "to", name: "Tocantins", uf: "TO" },
];

export const CITIES: CityData[] = [
  // Centro-Oeste
  {
    id: "co-go-1",
    region: "Centro-Oeste",
    stateUf: "GO",
    name: "CEVAM - Centro de Valorização da Mulher",
    phone: "62 9144-5948"
  },
  {
    id: "co-go-2",
    region: "Centro-Oeste",
    stateUf: "GO",
    name: "Secretaria Municipal de Políticas para as Mulheres (SMPM)",
    phone: "(62) 3524-2933"
  },
  {
    id: "co-mt-1",
    region: "Centro-Oeste",
    stateUf: "MT",
    name: "Espaço De Acolhimento da Mulher - HMC (Hospital Municipal de Cuiabá)",
    phone: "(65) 3318-4818"
  },
  {
    id: "co-ms-1",
    region: "Centro-Oeste",
    stateUf: "MS",
    name: "Casa da Mulher Brasileira de Campo Grande",
    phone: "(67) 2020-1300"
  },
  {
    id: "co-ms-2",
    region: "Centro-Oeste",
    stateUf: "MS",
    name: "Centro de Atendimento a Mulher em Situação de Violência",
    phone: "(67) 3361-7519"
  },
  {
    id: "co-df-1",
    region: "Centro-Oeste",
    stateUf: "DF",
    name: "Casa Flor Unidade de Acolhimento para Mulheres",
    phone: "(61) 3773-7610"
  },

  // Norte
  {
    id: "no-ac-1",
    region: "Norte",
    stateUf: "AC",
    name: "Casa Rosa Mulher",
    phone: "(68) 3224-5117"
  },
  {
    id: "no-ap-1",
    region: "Norte",
    stateUf: "AP",
    name: "Casa da Mulher Brasileira Amapá"
  },
  {
    id: "no-am-1",
    region: "Norte",
    stateUf: "AM",
    name: "Serviço de Apoio Emergencial à Mulher – SAPEM CENTRO SUL",
    phone: "98483-5974"
  },
  {
    id: "no-am-2",
    region: "Norte",
    stateUf: "AM",
    name: "Serviço de Apoio Emergencial à Mulher – SAPEM SUL",
    phone: "98484-1012"
  },
  {
    id: "no-am-3",
    region: "Norte",
    stateUf: "AM",
    name: "Serviço de Apoio Emergencial à Mulher – SAPEM OESTE",
    phone: "98402-8631"
  },
  {
    id: "no-am-4",
    region: "Norte",
    stateUf: "AM",
    name: "Serviço de Apoio Emergencial à Mulher – SAPEM ZONA NORTE",
    phone: "98483-5052"
  },
  {
    id: "no-am-5",
    region: "Norte",
    stateUf: "AM",
    name: "Serviço de Apoio Emergencial à Mulher – SAPEM LESTE",
    phone: "98500-6400"
  },
  {
    id: "no-am-6",
    region: "Norte",
    stateUf: "AM",
    name: "Serviço de Apoio Emergencial à Mulher – SAPEM CENTRO-OESTE",
    phone: "98466-7282"
  },
  {
    id: "no-pa-1",
    region: "Norte",
    stateUf: "PA",
    name: "Casa da Mulher Brasileira Pará"
  },
  {
    id: "no-pa-2",
    region: "Norte",
    stateUf: "PA",
    name: "Casa da Mainha",
    phone: "94 9219-8118"
  },
  {
    id: "no-ro-1",
    region: "Norte",
    stateUf: "RO",
    name: "Casa Noeli (Endereço Anônimo)",
    email: "ouvidoria@mpro.mp.br",
    phone: "(69) 99977-0127"
  },
  {
    id: "no-rr-1",
    region: "Norte",
    stateUf: "RR",
    name: "Casa da Mulher Brasileira",
    email: "cmb.boavista.rr@gmail.com",
    phone: "(95) 98102-2480"
  },
  {
    id: "no-to-1",
    region: "Norte",
    stateUf: "TO",
    name: "Centro de Referência da Mulher – Flor de Lis",
    email: "crmulhernat@hotmail.com",
    phone: "(63) 3372-1866; (63) 3212-7246"
  },

  // Sudeste - Espírito Santo
  {
    id: "se-es-1",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Afonso Cláudio e Municípios Adjacentes (Encaminha para Abrigo Sigiloso)",
    email: "nucleoafonsoclaudio@mulheres.es.gov.br",
    phone: "(27) 3442-4192; (27) 99522-1500"
  },
  {
    id: "se-es-2",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Alegre e Municípios Adjacentes (Encaminha para Abrigo Sigiloso)",
    email: "nucleoalegre@mulheres.es.gov.br",
    phone: "(28) 3300-0999; (28) 99284-7579"
  },
  {
    id: "se-es-3",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Anchieta e Municípios Adjacentes (Encaminha para Abrigo Sigiloso)",
    email: "nucleoanchieta@mulheres.es.gov.br",
    phone: "(28) 99284-8220"
  },
  {
    id: "se-es-4",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Cachoeiro de Itapemirim e Municípios Adjacentes",
    email: "centrocachoeiro@mulheres.es.gov.br",
    phone: "(27) 99271-6110"
  },
  {
    id: "se-es-5",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Cariacica e Municípios Adjacentes",
    email: "centrocariacica@mulheres.es.gov.br",
    phone: "(27) 3098-9299; (27) 99705-3139"
  },
  {
    id: "se-es-6",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Colatina e Municípios Adjacentes",
    email: "nucleocolatina@mulheres.es.gov.br",
    phone: "(27) 99966-4497"
  },
  {
    id: "se-es-7",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Linhares e Municípios Adjacentes",
    email: "centrolinhares@mulheres.es.gov.br",
    phone: "(27) 3153-5888; (27) 99848-2733"
  },
  {
    id: "se-es-8",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Nova Venécia e Municípios Adjacentes",
    email: "nucleonovavenecia@mulheres.es.gov.br",
    phone: "(27) 99284-8425; (27) 99859-0313"
  },
  {
    id: "se-es-9",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro Santa Maria de Jetibá e Municípios Adjacentes",
    email: "nucleosantamariadejetiba@mulheres.es.gov.br",
    phone: "(27) 99998-2263"
  },
  {
    id: "se-es-10",
    region: "Sudeste",
    stateUf: "ES",
    name: "Centro São Mateus e Municípios Adjacentes",
    email: "centrosaomateus@mulheres.es.gov.br",
    phone: "(27) 3600-3878; (27) 99262-2452"
  },

  // Sudeste - Rio de Janeiro
  {
    id: "se-rj-1",
    region: "Sudeste",
    stateUf: "RJ",
    name: "Casa Viva Mulher Cora Coralina",
    phone: "(21) 2517-2726; (21) 98555-2151"
  },

  // Sudeste - São Paulo
  {
    id: "se-sp-1",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa Abrigo Gravelina Terezina Lemes - São Carlos",
    phone: "(16) 3307-7799"
  },
  {
    id: "se-sp-2",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa Abrigo Condemat (Atende os municípios de Mogi das Cruzes, Ferraz de Vasconcelos, Poá, Arujá e Guararema)",
    phone: "9922-4739"
  },
  {
    id: "se-sp-3",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher Brasileira - São Paulo",
    email: "cmb@prefeitura.sp.gov.br",
    phone: "(11) 3275-8000"
  },
  {
    id: "se-sp-4",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - Brasilândia",
    email: "smdhccrcmbrasilandia@prefeitura.sp.gov.br",
    phone: "(11) 2476-0170"
  },
  {
    id: "se-sp-5",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - Perus",
    email: "smdhccrcmperus@prefeitura.sp.gov.br",
    phone: "(11) 3917-5955"
  },
  {
    id: "se-sp-6",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - Cachoeirinha",
    email: "smdhccrcmcachoeirinha@prefeitura.sp.gov.br",
    phone: "(11) 2361-5551"
  },
  {
    id: "se-sp-7",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa e de Convivência da Mulher (CDCM) - Casa Mariás",
    email: "smdhccdcmcasamarias@prefeitura.sp.gov.br",
    phone: "(11) 3294-0066"
  },
  {
    id: "se-sp-8",
    region: "Sudeste",
    stateUf: "SP",
    name: "CDCM Centro de Integração Social da Mulher - CISM II",
    email: "smdhccdcmcismii@prefeitura.sp.gov.br",
    phone: "(11) 3858-8279"
  },
  {
    id: "se-sp-9",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher Eliane de Grammont",
    email: "smdhccrcmcasaeliane@prefeitura.sp.gov.br",
    phone: "(11) 5549-9339"
  },
  {
    id: "se-sp-10",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher Maria de Lourdes Rodrigues",
    email: "smdhccrcmmlr@prefeitura.sp.gov.br",
    phone: "(11) 5524-4782"
  },
  {
    id: "se-sp-11",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - CRCM de Parelheiros",
    email: "smdhccrcmparelheiros@prefeitura.sp.gov.br",
    phone: "(11) 5921-3665"
  },
  {
    id: "se-sp-12",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - CRCM da Capela do Socorro",
    email: "smdhccrcmcapeladosocorro@prefeitura.sp.gov.br",
    phone: "(11) 2941-4158"
  },
  {
    id: "se-sp-13",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - CRCM de Santo Amaro",
    email: "smdhccrcmsantoamaro@prefeitura.sp.gov.br",
    phone: "(11) 5521-6626"
  },
  {
    id: "se-sp-14",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa e de Convivência das Mulheres - Mulheres Vivas",
    email: "smdhccdcmmulheresvivas@prefeitura.sp.gov.br",
    phone: "(11) 4113-2105"
  },
  {
    id: "se-sp-15",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa e de Convivência das Mulheres - Casa da Mulher Crê-Ser",
    email: "smdhccdcmcasamulhercreser@prefeitura.sp.gov.br",
    phone: "(11) 3539-8163"
  },
  {
    id: "se-sp-16",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa e de Convivência das Mulheres - Sonia Maria Batista",
    email: "smdhccdcmsoniamariabatista@prefeitura.sp.gov.br",
    phone: "(11) 3473-5569"
  },
  {
    id: "se-sp-17",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa e de Convivência das Mulheres - Casa Sofia",
    email: "smdhccdcmcasasofia@prefeitura.sp.gov.br",
    phone: "(11) 5834-6487"
  },
  {
    id: "se-sp-18",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Atendimento Integral às Mulheres em Situação de Violência - Libras",
    email: "cmb@prefeitura.sp.gov.br",
    phone: "(11) 3275-8000"
  },
  {
    id: "se-sp-19",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa e de Convivência das Mulheres - Francisca Franco",
    email: "smdhccdcmfranciscafranco@prefeitura.sp.gov.br",
    phone: "(11) 3106-1013"
  },
  {
    id: "se-sp-20",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - CRCM Itaquera",
    email: "smdhccrcmitaquera@prefeitura.sp.gov.br",
    phone: "(11) 2073-4863"
  },
  {
    id: "se-sp-21",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher - CRCM Onóris Ferreira Dias (São Miguel)",
    email: "smdhccrcmsaomiguel@prefeitura.sp.gov.br",
    phone: "(11) 2058-2800"
  },
  {
    id: "se-sp-22",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Casa Cidinha Kopcak",
    email: "smdhccdcmcasacidinhakopcak@prefeitura.sp.gov.br",
    phone: "(11) 2015-5722"
  },
  {
    id: "se-sp-23",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defense Convivência da Mulher - Casa Zizi",
    email: "smdhccdcmcasazizi@prefeitura.sp.gov.br",
    phone: "(11) 2216-7346"
  },
  {
    id: "se-sp-24",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Casa Naná Serafim",
    email: "smdhccdcmnanaserafim@prefeitura.sp.gov.br",
    phone: "(11) 2562-2719"
  },
  {
    id: "se-sp-25",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Casa Anastácia",
    email: "smdhccdcmcasaanastacia@prefeitura.sp.gov.br",
    phone: "(11) 2282-4706"
  },
  {
    id: "se-sp-26",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Casa Viviane dos Santos",
    email: "smdhccdcmcasavivianedossantos@prefeitura.sp.gov.br",
    phone: "(11) 2553-2424"
  },
  {
    id: "se-sp-27",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Marielle Franco",
    email: "smdhccdcmmariellefranco@prefeitura.sp.gov.br",
    phone: "(11) 5050-1437"
  },
  {
    id: "se-sp-28",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Margarida Maria Alves",
    email: "smdhccdcmmargaridamariaalves@prefeitura.sp.gov.br",
    phone: "(11) 2935-7324"
  },
  {
    id: "se-sp-29",
    region: "Sudeste",
    stateUf: "SP",
    name: "Casa da Mulher 25 de Março",
    email: "smdhccrcm25marco@prefeitura.sp.gov.br",
    phone: "(11) 3106-1100"
  },
  {
    id: "se-sp-30",
    region: "Sudeste",
    stateUf: "SP",
    name: "Centro de Defesa Convivência da Mulher - Casa Marcia Martins",
    email: "smdhccdcmcasamarciamartins@prefeitura.sp.gov.br",
    phone: "(11) 3507-5856"
  },

  // Sul - Paraná
  {
    id: "su-pr-1",
    region: "Sul",
    stateUf: "PR",
    name: "Unidade de Acolhimento Institucional (UAI) - Abrigo Institucional para Mulheres em Curitiba",
    email: "casadasmulheres@curitiba.pr.gov.br",
    phone: "(41) 3323-3705"
  },
  {
    id: "su-pr-2",
    region: "Sul",
    stateUf: "PR",
    name: "Casa da Mulher Brasileira de Curitiba",
    email: "cmb@curitiba.pr.gov.br",
    phone: "(41) 3221-2701; (41) 3221-2710"
  },
  {
    id: "su-pr-3",
    region: "Sul",
    stateUf: "PR",
    name: "Pousada de Maria",
    email: "uaipousadademaria@curitiba.pr.gov.br"
  },

  // Sul - Santa Catarina
  {
    id: "su-sc-1",
    region: "Sul",
    stateUf: "SC",
    name: "Casa Abrigo Viva Rosa",
    email: "abrigovivarosa@joinville.sc.gov.br",
    phone: "(47) 3436-3534; (47) 3434-5718"
  },

  // Sul - Rio Grande do Sul
  {
    id: "su-rs-1",
    region: "Sul",
    stateUf: "RS",
    name: "Centro Estadual de Referência da Mulher Vânia Araújo Machado"
  },

  // Nordeste - Sergipe
  {
    id: "ne-se-1",
    region: "Nordeste",
    stateUf: "SE",
    name: "Casa Abrigo Estadual - Professora Neuzice Barreto",
    phone: "(79) 3179-7676"
  },

  // Nordeste - Maranhão
  {
    id: "ne-ma-1",
    region: "Nordeste",
    stateUf: "MA",
    name: "Casa da Mulher Brasileira - Maranhão",
    phone: "(98) 9100-6166"
  },

  // Nordeste - Piauí
  {
    id: "ne-pi-1",
    region: "Nordeste",
    stateUf: "PI",
    name: "Casa Abrigo Mulher Viva"
  },
  {
    id: "ne-pi-2",
    region: "Nordeste",
    stateUf: "PI",
    name: "Casa da Mulher Brasileira - Teresina",
    phone: "(86) 99412-2719"
  },
  {
    id: "ne-pi-3",
    region: "Nordeste",
    stateUf: "PI",
    name: "Centro de Referência a Mulher Francisca Trindade",
    phone: "(86) 99433-0809"
  },

  // Nordeste - Ceará
  {
    id: "ne-ce-1",
    region: "Nordeste",
    stateUf: "CE",
    name: "Casa da Mulher Cearense - Juazeiro do Norte",
    email: "casadamulhercearense.cariri@mulheres.ce.gov.br",
    phone: "(88) 98128-8071; (85) 3106-3145"
  },
  {
    id: "ne-ce-2",
    region: "Nordeste",
    stateUf: "CE",
    name: "Casa da Mulher Cearense - Quixadá",
    email: "casadamulhercearense.quixada@mulheres.ce.gov.br",
    phone: "(88) 98957-2422; (85) 3106-3202"
  },
  {
    id: "ne-ce-3",
    region: "Nordeste",
    stateUf: "CE",
    name: "Casa da Mulher Cearense - Sobral",
    email: "casadamulhercearensesobral@gmail.com",
    phone: "(88) 98959-7453; (85) 3106-3185"
  },
  {
    id: "ne-ce-4",
    region: "Nordeste",
    stateUf: "CE",
    name: "Casa da Mulher Cearense - Tauá",
    phone: "(85) 3106-3164"
  },
  {
    id: "ne-ce-5",
    region: "Nordeste",
    stateUf: "CE",
    name: "Casa da Mulher Brasileira - Fortaleza",
    email: "casadamulherbrasileiradoceara@mulheres.ce.gov.br",
    phone: "(85) 31082999; 31082998; 31082997"
  },
  {
    id: "ne-ce-6",
    region: "Nordeste",
    stateUf: "CE",
    name: "Centro de Referência da Mulher Francisca Clotilde",
    email: "crm.franciscaclotilde@sdhds.fortaleza.ce.gov.br"
  },

  // Nordeste - Paraíba
  {
    id: "ne-pb-1",
    region: "Nordeste",
    stateUf: "PB",
    name: "Centro de Referência da Mulher Ednalva Bezerra - João Pessoa",
    phone: "8695-3549; (83) 3213-7359"
  },
  {
    id: "ne-pb-2",
    region: "Nordeste",
    stateUf: "PB",
    name: "Casa Abrigo Aryane Thaís - João Pessoa",
    phone: "(83) 3218-7298; 3224-9919"
  },
  {
    id: "ne-pb-3",
    region: "Nordeste",
    stateUf: "PB",
    name: "Centro Estadual de Referência da Mulher Fátima Lopes - Campina Grande",
    phone: "(83) 3342-9129; (83) 98826-8834"
  },
  {
    id: "ne-pb-4",
    region: "Nordeste",
    stateUf: "PB",
    name: "Centro de Referência de Atendimento à Mulher Professora Ana Luiza Mendes Leite - Campina Grande",
    phone: "(83) 3310-6279"
  },
  {
    id: "ne-pb-5",
    region: "Nordeste",
    stateUf: "PB",
    name: "Centro de Referência da Mulher Susane Alves da Silva - Cajazeiras",
    phone: "(83) 9354-4247"
  },
  {
    id: "ne-pb-6",
    region: "Nordeste",
    stateUf: "PB",
    name: "Centro de Referência de Atenção à Mulher - Santa Luzia",
    phone: "(83) 3461-3489"
  },
  {
    id: "ne-pb-7",
    region: "Nordeste",
    stateUf: "PB",
    name: "Centro de Referência de Atendimento à Mulher - Patos",
    email: "sepmulheres@patos.pb.gov.br",
    phone: "(83) 3461-2299"
  },

  // Nordeste - Pernambuco
  {
    id: "ne-pe-1",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher Clarisse Lispector - Recife",
    phone: "(81) 99488-6138"
  },
  {
    id: "ne-pe-2",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher Márcia Dangremon - Olinda",
    phone: "(81) 99188-3825"
  },
  {
    id: "ne-pe-3",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher Maristela Just - Jaboatão dos Guararapes",
    phone: "(81) 34682485; 81 994646253"
  },
  {
    id: "ne-pe-4",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher - Camaragibe",
    phone: "(81) 3456-5542; (81) 99945-5769; (81) 99945-1677"
  },
  {
    id: "ne-pe-5",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher Maria Purcina - Cabo de S. Agostinho"
  },
  {
    id: "ne-pe-6",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher Dona Amarina - Ipojuca",
    phone: "9462-2067"
  },
  {
    id: "ne-pe-7",
    region: "Nordeste",
    stateUf: "PE",
    name: "Centro Especializado de Atendimento à Mulher Aqualtune - Paulista",
    phone: "9912-0337"
  },

  // Nordeste - Alagoas
  {
    id: "ne-al-1",
    region: "Nordeste",
    stateUf: "AL",
    name: "Casa Abrigo de Maceió - Viva a Vida (Encaminhamento através do SEMDES)",
    phone: "(82) 3312-5900"
  },
  {
    id: "ne-al-2",
    region: "Nordeste",
    stateUf: "AL",
    name: "Centro Especializado de Atendimento à Mulher em Situação de Violência – CEAM- Jarede Viana",
    phone: "(82) 3315-1740; (82) 98867-6434"
  },
  {
    id: "ne-al-3",
    region: "Nordeste",
    stateUf: "AL",
    name: "Centro Especializado de Atendimento à Mulher em Situação de Violência – CEAM – São Miguel dos Campos/AL",
    phone: "(82) 99829-0614; (82) 99159-4602"
  },
  {
    id: "ne-al-4",
    region: "Nordeste",
    stateUf: "AL",
    name: "Casa da Mulher Alagoana",
    phone: "(82) 2126-9650"
  },
  {
    id: "ne-al-5",
    region: "Nordeste",
    stateUf: "AL",
    name: "Centro de Referência e Atendimento à Mulher em Situação de Violência – CRAMSV – Arapiraca/AL",
    email: "cramsvarapiraca@gmail.com",
    phone: "(82) 99991-2443"
  },
  {
    id: "ne-al-6",
    region: "Nordeste",
    stateUf: "AL",
    name: "Centro de Referência de Atendimento à Mulher – Maria das Graças Lopes Ferreira – União dos Palmares/AL",
    phone: "(82) 99352-0514"
  },

  // Nordeste - Sergipe
  {
    id: "ne-se-2",
    region: "Nordeste",
    stateUf: "SE",
    name: "Centro de Referência de Atendimento à Mulher em Situação de Violência (Cram) Maria Otávia Gonçalves Miranda",
    email: "cram.sermulher@aracaju.se.gov.br",
    phone: "79 98138-6034"
  },
  {
    id: "ne-se-3",
    region: "Nordeste",
    stateUf: "SE",
    name: "Centro de Referência de Atendimento à Mulher - Nossa Senhora do Socorro",
    email: "cramsocorro@gmail.com",
    phone: "(79)99603-8068"
  },
  {
    id: "ne-se-4",
    region: "Nordeste",
    stateUf: "SE",
    name: "Centro de Referência de Atendimento à Mulher Edilene Maria dos Santos - Lagarto",
    email: "cram@lagarto.se.gov.br"
  },
  {
    id: "ne-se-5",
    region: "Nordeste",
    stateUf: "SE",
    name: "Centro de Referência de Atendimento à Mulher - Itabaiana",
    email: "cmppmitabaiana@gmail.com",
    phone: "(79) 99112-0030"
  },

  // Nordeste - Bahia
  {
    id: "ne-ba-1",
    region: "Nordeste",
    stateUf: "BA",
    name: "Casa da Mulher Brasileira - Salvador",
    phone: "(71) 3202-7390"
  },
  {
    id: "ne-ba-2",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Atendimento à Mulher Soteropolitana Irmã Dulce - Salvador",
    phone: "(71) 3202-7399; (71) 3611-6581"
  },
  {
    id: "ne-ba-3",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência Especializado de Atendimento à Mulher Arlete Magalhães - Salvador",
    phone: "(71) 3202-7380; (71) 3611-5305"
  },
  {
    id: "ne-ba-4",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Lélia Gonzalez - Lauro de Freitas",
    phone: "(71) 3289-1032; (71) 3369-6598"
  },
  {
    id: "ne-ba-5",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher Mãe Sulinha - Senhor do Bonfim",
    phone: "(74) 3542-1880; (74) 99116-9133"
  },
  {
    id: "ne-ba-6",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Professora Donga - Conceição do Coité",
    phone: "(75) 98153-7296"
  },
  {
    id: "ne-ba-7",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência Yolanda Pires - Camaçari",
    phone: "(71) 3627-2481"
  },
  {
    id: "ne-ba-8",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Maura Cardoso de Castro - Alagoinhas",
    phone: "(75) 99807-8521"
  },
  {
    id: "ne-ba-9",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Isabela Nascimento Seara - Itabuna",
    phone: "(73) 99949-9280"
  },
  {
    id: "ne-ba-10",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Porto Seguro",
    phone: "(73) 3288-5576; (73) 99860-1534"
  },
  {
    id: "ne-ba-11",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Verônika Lind - Teixeira de Freitas",
    phone: "(73) 99865-5371"
  },
  {
    id: "ne-ba-12",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro Regional de Referência da Mulher Maria Joaquina - Cruz das Almas",
    phone: "(75) 3621-3252"
  },
  {
    id: "ne-ba-13",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher Albertina Vasconcelos - Vitória da Conquista",
    phone: "(77) 3424-5325; (77) 98856-5171; (77) 99206-5602"
  },
  {
    id: "ne-ba-14",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher Ana Joaquina de Castro Dourado - Irecê",
    phone: "(74) 3641-2766; (74) 99805-0002; (74) 99963-1552"
  },
  {
    id: "ne-ba-15",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher Eudócia Antunes de Assis - Paulo Afonso",
    phone: "(75) 3281-1828"
  },
  {
    id: "ne-ba-16",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher Roseane Silva Rodrigues - Abaíra",
    phone: "(77) 99162-5296; (77) 98140-2294"
  },
  {
    id: "ne-ba-17",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher - Valença",
    phone: "(75) 3643-1601; (75) 98876-5079"
  },
  {
    id: "ne-ba-18",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência Especializado de Atendimento à Mulher Maria Quitéria - Feira de Santana",
    phone: "(75) 99968-4321"
  },
  {
    id: "ne-ba-19",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro Integrado de Atendimento à Mulher (CIAM) - Juazeiro",
    phone: "(74) 3614-2028; (74) 98856-3393; (74) 98809-5753"
  },
  {
    id: "ne-ba-20",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Camacã",
    phone: "(73) 99168-1896"
  },
  {
    id: "ne-ba-21",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Barreiras",
    phone: "(77) 3611-0264; (77) 8140-0845"
  },
  {
    id: "ne-ba-22",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Isabel Ramos Miranda - Itaberaba",
    phone: "(75) 99254-6157"
  },
  {
    id: "ne-ba-23",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Candeias",
    phone: "(71) 3601-3739"
  },
  {
    id: "ne-ba-24",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Atendimento à Mulher Zilda Paim - Santo Amaro",
    phone: "(75) 98369-5220"
  },
  {
    id: "ne-ba-25",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher - Serrinha",
    phone: "(75) 99117-2088; (75) 99922-6548"
  },
  {
    id: "ne-ba-26",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de atendimento à Mulher Maria Felipa dos Santos - São Francisco do Conde",
    phone: "(71) 98107-1575"
  },
  {
    id: "ne-ba-27",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Mariene Soares - Jacobina",
    phone: "(74) 3622-3488"
  },
  {
    id: "ne-ba-28",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher Bem me Quer - Santa Cruz Cabrália",
    phone: "(73) 99805-1059"
  },
  {
    id: "ne-ba-29",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Simões Filho",
    phone: "(71) 998546-5591"
  },
  {
    id: "ne-ba-30",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher Vanusi Pinho de Matos - Araci",
    phone: "(75) 99184-7647; (75) 98135-6199"
  },
  {
    id: "ne-ba-31",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Cachoeira",
    phone: "(71) 99284-1063"
  },
  {
    id: "ne-ba-32",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Guanambi",
    phone: "(77) 99818-5120"
  },
  {
    id: "ne-ba-33",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência da Mulher - Itapetinga",
    phone: "(77) 3261-1951"
  },
  {
    id: "ne-ba-34",
    region: "Nordeste",
    stateUf: "BA",
    name: "Centro de Referência de Atendimento à Mulher - Ilhéus",
    phone: "8861-9069"
  },

  // Sudeste - Minas Gerais
  {
    id: "se-mg-1",
    region: "Sudeste",
    stateUf: "MG",
    name: "Benvinda (Centro de Apoio à Mulher)",
    phone: "(31) 3277-4379"
  },
  {
    id: "se-mg-2",
    region: "Sudeste",
    stateUf: "MG",
    name: "Centro de Apoio às Vítimas de Violência Intrafamiliar de Belo Horizonte (CAVIV)",
    email: "caviv@pbh.gov.br",
    phone: "(31) 3277-9761"
  },
  {
    id: "se-mg-3",
    region: "Sudeste",
    stateUf: "MG",
    name: "Casa da Mulher - Barbacena",
    phone: "(32) 99946-4707"
  }
];

export const CAMPAIGN_POSTERS: CampaignPoster[] = [
  {
    id: "arte-1",
    title: "Acolhimento e Proteção (43% sem informação)",
    description: "Você tem direito ao acolhimento e à proteção. Estatísticas do DataSenado 2025 ressaltando a relevância da informação e canais de ajuda.",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=640&auto=format&fit=crop",
    gradientFrom: "from-purple-900",
    gradientTo: "to-indigo-950",
  },
  {
    id: "arte-2",
    title: "Cartaz da Campanha — Arte 2",
    description: "A violência doméstica e digital deixa marcas. Baixe o folheto informativo com diretrizes de apoio eletrônico e físico.",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=640&auto=format&fit=crop",
    gradientFrom: "from-pink-600",
    gradientTo: "to-violet-600",
  },
];
