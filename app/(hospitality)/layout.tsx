import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { HospitalityHeader } from "@/03_Engineering_System/hospitality/layout/HospitalityHeader";
import { HospitalityFooter } from "@/03_Engineering_System/hospitality/layout/HospitalityFooter";

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <HospitalityHeader />
      {children}
      <HospitalityFooter />
    </>
  );
}
