export interface HelplineCard {
  id: string;
  number: string;
  title: string;
  text: string;
  isPrimary?: boolean;
}

export interface ViolenceType {
  id: string;
  title: string;
  text: string;
  iconName: "Física" | "Psicológica" | "Patrimonial" | "Sexual" | "Moral" | "Digital" | "Vicária";
}

export interface StateData {
  id: string;
  name: string;
  uf: string;
}

export interface CityData {
  id: string;
  stateUf: string;
  name: string;
  phone?: string;
  email?: string;
  region?: string;
}

export interface CampaignPoster {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
}
