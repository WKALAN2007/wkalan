import { CinematicHero } from "@/03_Engineering_System/yichen-cinematic/sections/CinematicHero";
import { CinematicManifesto } from "@/03_Engineering_System/yichen-cinematic/sections/CinematicManifesto";
import { CinematicStories } from "@/03_Engineering_System/yichen-cinematic/sections/CinematicStories";
import { CinematicProcess } from "@/03_Engineering_System/yichen-cinematic/sections/CinematicProcess";
import { CinematicPhilosophy } from "@/03_Engineering_System/yichen-cinematic/sections/CinematicPhilosophy";
import { CinematicInvitation } from "@/03_Engineering_System/yichen-cinematic/sections/CinematicInvitation";

export default function YichenCinematicPage() {
  return (
    <main>
      <CinematicHero />
      <CinematicManifesto />
      <CinematicStories />
      <CinematicProcess />
      <CinematicPhilosophy />
      <CinematicInvitation />
    </main>
  );
}
