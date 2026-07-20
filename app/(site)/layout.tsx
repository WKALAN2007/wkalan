import { Header } from "@/03_Engineering_System/site/layout/Header";
import { ContactFooter } from "@/03_Engineering_System/site/layout/ContactFooter";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <ContactFooter />
    </>
  );
}
