import { PrismaClient, ProjectCategory } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
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
];

async function main() {
  const info = await prisma.$queryRawUnsafe<Array<{ current_database: string }>>(
    `SELECT current_database()`,
  );
  console.log("Connected to:", info[0]?.current_database);

  const enums = await prisma.$queryRawUnsafe<Array<{ enumlabel: string }>>(
    `SELECT enumlabel FROM pg_enum e JOIN pg_type t ON e.enumtypid=t.oid WHERE t.typname='ProjectCategory' ORDER BY enumsortorder`,
  );
  console.log(
    "Enum values:",
    enums.map((e) => e.enumlabel).join(", "),
  );

  await prisma.project.deleteMany();

  for (const project of projects) {
    await prisma.$executeRawUnsafe(
      `INSERT INTO "Project" (id, title, description, category, "imageUrl", featured, "sortOrder", "createdAt", "updatedAt")
       VALUES (gen_random_uuid()::text, $1, $2, $3::"ProjectCategory", $4, $5, $6, NOW(), NOW())`,
      project.title,
      project.description,
      project.category,
      project.imageUrl,
      project.featured,
      project.sortOrder,
    );
  }

  const count = await prisma.project.count();
  console.log(`Replaced projects. Total: ${count}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
