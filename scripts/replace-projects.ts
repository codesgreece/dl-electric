import { PrismaClient } from "@prisma/client";
import { GALLERY_PROJECTS } from "../src/lib/project-gallery";

const prisma = new PrismaClient();

async function main() {
  const info = await prisma.$queryRawUnsafe<Array<{ current_database: string }>>(
    `SELECT current_database()`,
  );
  console.log("Connected to:", info[0]?.current_database);

  await prisma.project.deleteMany();

  for (const project of GALLERY_PROJECTS) {
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
