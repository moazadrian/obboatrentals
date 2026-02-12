// ═══════════════════════════════════════════
// Clean SVG icon set — replaces all emojis
// Each icon is 24×24, stroke-based, consistent weight
// ═══════════════════════════════════════════

type IconProps = { className?: string; size?: number };

const defaults = { size: 24, className: "" };

function I({ children, className, size }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size ?? defaults.size}
      height={size ?? defaults.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? defaults.className}
    >
      {children}
    </svg>
  );
}

// ── Why Us icons ──

export function RestroomIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 2v6m0 0a3 3 0 013 3v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5a3 3 0 013-3z" />
      <circle cx="12" cy="4" r="2" />
    </I>
  );
}

export function AnchorIcon(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v14" />
      <path d="M5 12H2a10 10 0 0020 0h-3" />
    </I>
  );
}

export function SeatIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M4 18v-5a8 8 0 0116 0v5" />
      <path d="M4 18h16" />
      <path d="M6 18v3m12-3v3" />
      <path d="M7.5 13h9" />
    </I>
  );
}

export function SpeakerIcon(p: IconProps) {
  return (
    <I {...p}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="none" />
      <path d="M15.54 8.46a5 5 0 010 7.07" />
      <path d="M19.07 4.93a10 10 0 010 14.14" />
    </I>
  );
}

export function ShieldIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </I>
  );
}

export function UtensilsIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </I>
  );
}

// ── UI icons ──

export function ClockIcon(p: IconProps) {
  return (
    <I {...p}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </I>
  );
}

export function UsersIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </I>
  );
}

export function ChevronRightIcon(p: IconProps) {
  return (
    <I {...p}>
      <polyline points="9 18 15 12 9 6" />
    </I>
  );
}

export function MapPinIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </I>
  );
}

export function CalendarIcon(p: IconProps) {
  return (
    <I {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 2v4M16 2v4M3 10h18" />
    </I>
  );
}

export function XIcon(p: IconProps) {
  return (
    <I {...p}>
      <path d="M18 6L6 18M6 6l12 12" />
    </I>
  );
}

export function StarIcon({ className, size }: IconProps) {
  return (
    <svg
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path d="M10 1l2.39 6.26H19l-5.19 3.99L16.2 17.5 10 13.27 3.8 17.5l2.39-6.25L1 7.26h6.61z" />
    </svg>
  );
}

export function FacebookIcon(p: IconProps) {
  return (
    <svg width={p.size ?? 16} height={p.size ?? 16} fill="currentColor" viewBox="0 0 24 24" className={p.className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

// ── Mapping for WhyUs section ──

export const WHY_US_ICONS: Record<string, React.FC<IconProps>> = {
  restroom: RestroomIcon,
  stable: AnchorIcon,
  seating: SeatIcon,
  stereo: SpeakerIcon,
  safety: ShieldIcon,
  dining: UtensilsIcon,
};