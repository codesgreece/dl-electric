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

  const projectCount = await prisma.project.count();
  if (projectCount === 0) {
    await prisma.project.createMany({
      data: [
        {
          title: "Υποσταθμός Μέσης Τάσης",
          description: "Ολοκληρωμένη εγκατάσταση και συντήρηση υποσταθμού μέσης τάσης.",
          category: ProjectCategory.HIGH_VOLTAGE,
          imageUrl: "/images/project-voltage-1.jpg",
          featured: true,
          sortOrder: 1,
        },
        {
          title: "Έξυπνη Κατοικία Αθήνα",
          description: "Ολοκληρωμένο σύστημα smart home με αυτοματισμούς φωτισμού και ενέργειας.",
          category: ProjectCategory.SMART_HOME,
          imageUrl: "/images/project-smarthome-1.jpg",
          featured: true,
          sortOrder: 2,
        },
        {
          title: "Βιομηχανική Εγκατάσταση",
          description: "Ηλεκτρολογικές υποδομές για βιομηχανική μονάδα παραγωγής.",
          category: ProjectCategory.INDUSTRIAL,
          imageUrl: "/images/project-industrial-1.jpg",
          featured: true,
          sortOrder: 3,
        },
        {
          title: "Σύστημα CCTV Επιχείρησης",
          description: "Δίκτυο καμερών υψηλής ανάλυσης με απομακρυσμένη παρακολούθηση.",
          category: ProjectCategory.CCTV,
          imageUrl: "/images/project-cctv-1.jpg",
          featured: false,
          sortOrder: 4,
        },
        {
          title: "Υψηλή Τάση — Δίκτυο Διανομής",
          description: "Μελέτη και υλοποίηση δικτύου υψηλής τάσης.",
          category: ProjectCategory.HIGH_VOLTAGE,
          imageUrl: "/images/project-voltage-2.jpg",
          featured: false,
          sortOrder: 5,
        },
        {
          title: "Premium Smart Residence",
          description: "Εγκατάσταση έξυπνων συστημάτων σε πολυτελή κατοικία.",
          category: ProjectCategory.SMART_HOME,
          imageUrl: "/images/project-smarthome-2.jpg",
          featured: true,
          sortOrder: 6,
        },
      ],
    });
  }

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
