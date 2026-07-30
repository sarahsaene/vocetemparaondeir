interface CampaignLogoProps {
  className?: string;
  color?: string;
}

export default function CampaignLogo({ className = "h-14 w-auto", color = "currentColor" }: CampaignLogoProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Você Tem Para Onde Ir"
    >
      {/* Chimney - Outline */}
      <path d="M 62 58 L 62 29 H 78 L 78 44" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="56" y="24" width="28" height="6" rx="1.5" stroke={color} strokeWidth="3" fill="none" />

      {/* House Silhouette (Roof) - Outline */}
      <polygon points="160 12, 30 102, 290 102" stroke={color} strokeWidth="3.5" strokeLinejoin="round" fill="none" />

      {/* Window - Outline (4 panes) */}
      <rect x="138" y="55" width="20" height="20" rx="2" stroke={color} strokeWidth="3" fill="none" />
      <rect x="162" y="55" width="20" height="20" rx="2" stroke={color} strokeWidth="3" fill="none" />
      <rect x="138" y="79" width="20" height="20" rx="2" stroke={color} strokeWidth="3" fill="none" />
      <rect x="162" y="79" width="20" height="20" rx="2" stroke={color} strokeWidth="3" fill="none" />

      {/* VOCÊ TEM - Outline Text */}
      <text
        x="160"
        y="145"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fontFamily='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        fontSize="34"
        fontWeight="900"
        letterSpacing="3"
        textAnchor="middle"
      >
        VOCÊ TEM
      </text>

      {/* PARA - Outline Text */}
      <text
        x="130"
        y="195"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fontFamily='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        fontSize="34"
        fontWeight="900"
        letterSpacing="3"
        textAnchor="end"
      >
        PARA
      </text>

      {/* Female Symbol nested as the O in ONDE - Outline styled */}
      <circle cx="160" cy="180" r="14" stroke={color} strokeWidth="3.8" fill="none" />
      <path d="M 160 194 L 160 215" stroke={color} strokeWidth="3.8" strokeLinecap="square" />
      <path d="M 149 204 L 171 204" stroke={color} strokeWidth="3.8" strokeLinecap="square" />

      {/* NDE IR - Outline Text */}
      <text
        x="190"
        y="195"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fontFamily='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        fontSize="34"
        fontWeight="900"
        letterSpacing="3"
        textAnchor="start"
      >
        NDE IR
      </text>
    </svg>
  );
}
