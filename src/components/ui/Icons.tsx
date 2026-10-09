import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function IconLightning({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHome({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconCamera({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <rect x="3" y="8" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 11.5 21 8v9l-6-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="9" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconBlueprint({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPhone({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <path
        d="M7.5 3.5h3l1.2 4.2-1.8 1.2a12 12 0 0 0 5.2 5.2l1.2-1.8 4.2 1.2v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGlobe({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function IconShield({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <path
        d="M12 3 5 6v6c0 4.2 2.8 7.8 7 9 4.2-1.2 7-4.8 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m9.5 12 1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCertificate({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9.5 16.5-1 4.5 3.5-2 3.5 2-1-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDocument({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <path
        d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlay({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
    </svg>
  );
}

export function IconMenu({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} {...props}>
      <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconYears({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconProjects({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...props}>
      <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function getServiceIcon(icon: string) {
  switch (icon) {
    case "voltage":
      return IconLightning;
    case "smarthome":
      return IconHome;
    case "cctv":
      return IconCamera;
    case "blueprint":
      return IconBlueprint;
    case "certificate":
      return IconCertificate;
    case "document":
      return IconDocument;
    case "shield":
      return IconShield;
    case "globe":
      return IconGlobe;
    default:
      return IconLightning;
  }
}
