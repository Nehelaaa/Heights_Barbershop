type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  showText?: boolean;
};

function PoleGraphic({ id }: { id: string }) {
  const clipId = `${id}-pole-clip`;
  return (
    <g filter={`url(#${id}-shadow)`}>
      <ellipse cx="20" cy="6" rx="9" ry="3.5" fill="#243B5C" />
      <ellipse cx="20" cy="54" rx="9" ry="3.5" fill="#243B5C" />
      <rect x="11" y="6" width="18" height="48" rx="9" fill="#1A2D47" />
      <g clipPath={`url(#${clipId})`}>
        <path d="M2 6 L38 6 L28 54 L-8 54 Z" fill="#F4EFE6" />
        <path d="M-6 6 L34 6 L24 54 L-16 54 Z" fill="#C7323E" />
        <path d="M10 6 L50 6 L40 54 L0 54 Z" fill="#2E4A73" />
        <path d="M18 6 L58 6 L48 54 L8 54 Z" fill="#F4EFE6" />
        <path d="M26 6 L66 6 L56 54 L16 54 Z" fill="#C7323E" />
      </g>
      <rect x="13" y="10" width="3" height="40" rx="1.5" fill="white" opacity="0.12" />
    </g>
  );
}

function PoleDefs({ id }: { id: string }) {
  return (
    <>
      <filter id={`${id}-shadow`} x="-30%" y="-20%" width="160%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
      </filter>
      <clipPath id={`${id}-pole-clip`}>
        <rect x="11" y="6" width="18" height="48" rx="9" />
      </clipPath>
    </>
  );
}

/** Full wordmark lockup */
function LogoWordmark({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 268 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Heights Barber Shop"
    >
      <defs>
        <PoleDefs id="wordmark" />
        <linearGradient id="wordmark-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#962530" />
          <stop offset="45%" stopColor="#C7323E" />
          <stop offset="55%" stopColor="#D43845" />
          <stop offset="100%" stopColor="#962530" />
        </linearGradient>
        <linearGradient id="wordmark-title" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFCF7" />
          <stop offset="100%" stopColor="#D9CDB8" />
        </linearGradient>
      </defs>

      <g transform="translate(0, 2)">
        <PoleGraphic id="wordmark" />
      </g>

      {/* Flourishes */}
      <g strokeLinecap="round" opacity="0.5">
        <path d="M48 29 H56" stroke="#C7323E" strokeWidth="1" />
        <path d="M212 29 H220" stroke="#C7323E" strokeWidth="1" />
        <circle cx="52" cy="29" r="1" fill="#E8DCC8" opacity="0.6" />
        <circle cx="216" cy="29" r="1" fill="#E8DCC8" opacity="0.6" />
      </g>

      <text
        x="68"
        y="33"
        fill="url(#wordmark-title)"
        fontFamily="'Libre Baskerville', Georgia, serif"
        fontSize="27"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Heights
      </text>

      {/* Ribbon badge */}
      <path
        d="M64 38.5 L66 36.5 H200 L202 36.5 L204 38.5 V49.5 L202 51.5 H66 L64 49.5 Z"
        fill="url(#wordmark-ribbon)"
      />
      <path
        d="M64 38.5 L66 36.5 M204 38.5 L202 36.5"
        stroke="#7A1822"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <text
        x="134"
        y="47.5"
        textAnchor="middle"
        fill="#FFFCF7"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="8"
        fontWeight="700"
        letterSpacing="0.38em"
      >
        BARBER SHOP
      </text>

      <rect x="68" y="55" width="56" height="1.5" rx="0.75" fill="#E8DCC8" opacity="0.45" />
      <rect x="68" y="55" width="136" height="1.5" rx="0.75" fill="#C7323E" opacity="0.25" />
    </svg>
  );
}

function LogoMark({ className = "h-10 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Heights Barber Shop"
    >
      <defs>
        <PoleDefs id="mark" />
      </defs>
      <g transform="translate(0, 1)">
        <PoleGraphic id="mark" />
      </g>
    </svg>
  );
}

export function Logo({ className = "", variant = "full", showText = true }: LogoProps) {
  if (variant === "mark" || !showText) {
    return <LogoMark className={`h-10 w-8 ${className}`} />;
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <LogoWordmark className="h-11 sm:h-[3.25rem] w-auto max-w-[min(100%,280px)]" />
    </span>
  );
}
