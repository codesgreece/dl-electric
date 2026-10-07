import type { ProjectCategory, MessageStatus } from "@prisma/client";

export type { ProjectCategory, MessageStatus };

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  HIGH_VOLTAGE: "Μέση / Υψηλή Τάση",
  SMART_HOME: "Smart Home",
  INDUSTRIAL: "Βιομηχανικά Έργα",
  CCTV: "CCTV",
};

export const NAV_LINKS = [
  { href: "#home", label: "Αρχική" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#projects", label: "Έργα" },
  { href: "#about", label: "Για εμάς" },
  { href: "#certifications", label: "Πιστοποιήσεις" },
  { href: "#contact", label: "Επικοινωνία" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
