import { ProjectCategory } from "@prisma/client";

export type GalleryProject = {
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  featured: boolean;
  sortOrder: number;
};

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    title: "Διαμέρισμα — Υπνοδωμάτιο",
    description:
      "Ηλεκτρολογική εγκατάσταση φωτισμού, θέσεων και παροχών σε σύγχρονο υπνοδωμάτιο.",
    category: ProjectCategory.APARTMENTS,
    imageUrl: "/images/apartment-01-bedroom.jpg",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Διαμέρισμα — Φωτισμός σκάλας LED",
    description:
      "Ενσωματωμένος φωτισμός βαθμίδων με LED για ασφάλεια και αρχιτεκτονικό αποτέλεσμα.",
    category: ProjectCategory.APARTMENTS,
    imageUrl: "/images/apartment-02-stairs-led.jpg",
    featured: true,
    sortOrder: 2,
  },
  {
    title: "Διαμέρισμα — Οροφοφωτισμός",
    description: "Πολυεπίπεδη οροφή με κρυφό φωτισμό, spots και γραμμικά φωτιστικά.",
    category: ProjectCategory.APARTMENTS,
    imageUrl: "/images/apartment-03-ceiling-lighting.jpg",
    featured: true,
    sortOrder: 3,
  },
  {
    title: "Διαμέρισμα — Φωτιστικά σκάλας",
    description: "Κυκλικά επιτοίχια φωτιστικά κατά μήκος σύγχρονης εσωτερικής σκάλας.",
    category: ProjectCategory.APARTMENTS,
    imageUrl: "/images/apartment-04-stairs-wall-lights.jpg",
    featured: true,
    sortOrder: 4,
  },
  {
    title: "Διαμέρισμα — Κουζίνα",
    description:
      "Ηλεκτρολογικές παροχές και φωτισμός σε σύγχρονη κουζίνα υψηλών προδιαγραφών.",
    category: ProjectCategory.APARTMENTS,
    imageUrl: "/images/apartment-05-kitchen.jpg",
    featured: true,
    sortOrder: 5,
  },
  {
    title: "Διαμέρισμα — Σαλόνι & τραπεζαρία",
    description:
      "Ολοκληρωμένη ηλεκτρολογική εγκατάσταση φωτισμού σε ανοιχτό χώρο διημέρευσης.",
    category: ProjectCategory.APARTMENTS,
    imageUrl: "/images/apartment-06-living-dining.jpg",
    featured: true,
    sortOrder: 6,
  },
  {
    title: "Μέση / Υψηλή Τάση — Καλωδιώσεις",
    description: "Οργανωμένη εγκατάσταση βιομηχανικών καλωδιώσεων σε μεταλλικές διαδρομές.",
    category: ProjectCategory.HIGH_VOLTAGE,
    imageUrl: "/images/voltage-01-cable-corridor.jpg",
    featured: true,
    sortOrder: 7,
  },
  {
    title: "Μέση / Υψηλή Τάση — Μετασχηματιστής",
    description: "Εγκατάσταση dry-type μετασχηματιστή με επαγγελματικές τερματώσεις καλωδίων.",
    category: ProjectCategory.HIGH_VOLTAGE,
    imageUrl: "/images/voltage-02-resin-transformer.jpg",
    featured: true,
    sortOrder: 8,
  },
  {
    title: "Μέση / Υψηλή Τάση — Υποσταθμός",
    description: "Ολοκληρωμένος χώρος μετασχηματιστών με πίνακες ελέγχου και γειώσεις.",
    category: ProjectCategory.HIGH_VOLTAGE,
    imageUrl: "/images/voltage-03-transformer-room.jpg",
    featured: true,
    sortOrder: 9,
  },
  {
    title: "Μέση / Υψηλή Τάση — Πίνακας SM6",
    description: "Εγκατάσταση πίνακα διανομής μέσης τάσης Schneider Electric SM6.",
    category: ProjectCategory.HIGH_VOLTAGE,
    imageUrl: "/images/voltage-04-sm6-switchgear.jpg",
    featured: true,
    sortOrder: 10,
  },
  {
    title: "Μέση / Υψηλή Τάση — Σειρά πινάκων",
    description: "Γραμμή switchgear μέσης τάσης με χάλκινες ζυγώσεις και μόνωση υψηλής αντοχής.",
    category: ProjectCategory.HIGH_VOLTAGE,
    imageUrl: "/images/voltage-05-switchgear-lineup.jpg",
    featured: true,
    sortOrder: 11,
  },
];
