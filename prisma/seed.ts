import { PrismaClient, ProjectCategory } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@dlelectric.gr";
  const password = process.env.ADMIN_PASSWORD || "DLElectric2026!";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: { passwordHash },
    create: {
      email,
      passwordHash,
      name: "Dimitris Lykos",
    },
  });

  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      companyName: "DL ELECTRIC",
      founderName: "Dimitris Lykos",
      phone: "694 8591717",
      email: "dimitrislikos85@gmail.com",
      experienceYears: 22,
      mainDescription:
        "22 χρόνια εμπειρίας στον χώρο της ηλεκτρολογίας, με γνώση, συνέπεια και πάθος για την τεχνολογία.",
    },
  });

  const serviceCount = await prisma.service.count();
  if (serviceCount === 0) {
    await prisma.service.createMany({
      data: [
        {
          title: "Μέση & Υψηλή Τάση",
          description: "Σύγχρονες εγκαταστάσεις, υποδομές και συντήρηση.",
          imageUrl: "/images/service-voltage.jpg",
          icon: "voltage",
          sortOrder: 1,
        },
        {
          title: "Smart Home",
          description: "Έξυπνες λύσεις για το σπίτι και τον επαγγελματικό χώρο.",
          imageUrl: "/images/service-smarthome.jpg",
          icon: "smarthome",
          sortOrder: 2,
        },
        {
          title: "CCTV & Ασφάλεια",
          description: "Υψηλή τεχνολογία για απόλυτη προστασία.",
          imageUrl: "/images/service-cctv.jpg",
          icon: "cctv",
          sortOrder: 3,
        },
        {
          title: "Ηλεκτρολογικές Μελέτες",
          description:
            "Πιστοποιήσεις, μελέτες και εγκαταστάσεις οικοδομών και βιομηχανικών έργων.",
          imageUrl: "/images/service-studies.jpg",
          icon: "blueprint",
          sortOrder: 4,
        },
      ],
    });
  }

  // Replace gallery with real project photos (no placeholder samples).
  await prisma.project.deleteMany();
  await prisma.project.createMany({
    data: [
      {
        title: "Διαμέρισμα — Υπνοδωμάτιο",
        description: "Ηλεκτρολογική εγκατάσταση φωτισμού, θέσεων και παροχών σε σύγχρονο υπνοδωμάτιο.",
        category: ProjectCategory.APARTMENTS,
        imageUrl: "/images/apartment-01-bedroom.jpg",
        featured: true,
        sortOrder: 1,
      },
      {
        title: "Διαμέρισμα — Φωτισμός σκάλας LED",
        description: "Ενσωματωμένος φωτισμός βαθμίδων με LED για ασφάλεια και αρχιτεκτονικό αποτέλεσμα.",
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
        description: "Ηλεκτρολογικές παροχές και φωτισμός σε σύγχρονη κουζίνα υψηλών προδιαγραφών.",
        category: ProjectCategory.APARTMENTS,
        imageUrl: "/images/apartment-05-kitchen.jpg",
        featured: true,
        sortOrder: 5,
      },
      {
        title: "Διαμέρισμα — Σαλόνι & τραπεζαρία",
        description: "Ολοκληρωμένη ηλεκτρολογική εγκατάσταση φωτισμού σε ανοιχτό χώρο διημέρευσης.",
        category: ProjectCategory.APARTMENTS,
        imageUrl: "/images/apartment-06-living-dining.jpg",
        featured: true,
        sortOrder: 6,
      },
    ],
  });

  const certCount = await prisma.certification.count();
  if (certCount === 0) {
    await prisma.certification.createMany({
      data: [
        {
          title: "Ηλεκτρολογικές Πιστοποιήσεις",
          description: "Επίσημες πιστοποιήσεις εγκαταστάσεων σύμφωνα με τα ισχύοντα πρότυπα.",
          icon: "certificate",
          sortOrder: 1,
        },
        {
          title: "Μελέτες & Τεκμηρίωση",
          description: "Πλήρεις ηλεκτρολογικές μελέτες για οικοδομές και βιομηχανικά έργα.",
          icon: "document",
          sortOrder: 2,
        },
        {
          title: "Ασφάλεια Εγκαταστάσεων",
          description: "Έλεγχοι, μετρήσεις και συμμόρφωση για ασφαλή λειτουργία.",
          icon: "shield",
          sortOrder: 3,
        },
        {
          title: "Διεθνή Πρότυπα",
          description: "Εφαρμογή σύγχρονων τεχνικών προτύπων σε κάθε έργο.",
          icon: "globe",
          sortOrder: 4,
        },
      ],
    });
  }

  console.log("Seed completed.");
  console.log(`Admin login: ${email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
