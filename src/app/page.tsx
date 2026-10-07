import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Partners } from "@/components/sections/Partners";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getHomeData() {
  const [services, projects, certifications, settings] = await Promise.all([
    prisma.service.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.project.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.certification.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.siteSettings.findUnique({ where: { id: "default" } }),
  ]);

  return { services, projects, certifications, settings };
}

export default async function HomePage() {
  const { services, projects, certifications, settings } = await getHomeData();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services services={services} />
        <About />
        <Projects projects={projects} />
        <Certifications items={certifications} />
        <Partners />
        <CTABanner />
        <Contact phone={settings?.phone} email={settings?.email} />
      </main>
      <Footer />
    </>
  );
}
