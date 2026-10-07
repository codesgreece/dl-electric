import { auth } from "@/lib/auth";
import { Providers } from "@/components/admin/Providers";

export default async function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return <Providers session={session}>{children}</Providers>;
}
