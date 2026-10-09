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
  {
    title: "Κατάστημα — Αρχιτεκτονικός φωτισμός",
    description: "Εγκατάσταση φωτισμού σε εμπορικό χώρο με γραμμικά και κυκλικά φωτιστικά.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-01-boutique-interior.jpg",
    featured: true,
    sortOrder: 12,
  },
  {
    title: "Κατάστημα — Οροφοφωτισμός χώρου",
    description: "Παροχές φωτισμού και καλωδιοφόροι σε μεγάλο εμπορικό χώρο υπό κατασκευή.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-02-ceiling-lighting.jpg",
    featured: true,
    sortOrder: 13,
  },
  {
    title: "Κατάστημα — Πίνακας & καλωδιώσεις",
    description: "Εγκατάσταση πίνακα και οργανωμένων μεταλλικών διαδρομών καλωδίων.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-03-panel-cable-trays.jpg",
    featured: true,
    sortOrder: 14,
  },
  {
    title: "Κατάστημα — Φωτισμός εστιατορίου",
    description: "Διακοσμητικός και λειτουργικός φωτισμός σε χώρο εστίασης.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-04-restaurant-lighting.jpg",
    featured: true,
    sortOrder: 15,
  },
  {
    title: "Κατάστημα — Ηλεκτρολογικός εξοπλισμός",
    description: "Τοποθέτηση πίνακα και κατακόρυφων καλωδιοφόρων σε εμπορικό έργο.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-05-cabinet-wiring.jpg",
    featured: true,
    sortOrder: 16,
  },
  {
    title: "Κατάστημα — Φωτεινή πρόσοψη",
    description: "Εγκατάσταση φωτισμού πρόσοψης, spots και εσωτερικού φωτισμού καταστήματος.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-06-storefront-xana.jpg",
    featured: true,
    sortOrder: 17,
  },
  {
    title: "Κατάστημα — Πίνακας διανομής",
    description: "Ολοκληρωμένος πίνακας διανομής με αυτόματες ασφάλειες για εμπορική χρήση.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-07-distribution-panel.jpg",
    featured: true,
    sortOrder: 18,
  },
  {
    title: "Κατάστημα — Εσωτερική καλωδίωση πίνακα",
    description: "Ακριβής καλωδίωση πίνακα με οργανωμένες γραμμές και τερματισμούς.",
    category: ProjectCategory.SHOPS,
    imageUrl: "/images/shop-08-panel-wiring.jpg",
    featured: true,
    sortOrder: 19,
  },
];
