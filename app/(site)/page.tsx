import { Chapter1Stop } from "@/03_Engineering_System/site/sections/Chapter1Stop";
import { Chapter2Problem } from "@/03_Engineering_System/site/sections/Chapter2Problem";
import { Chapter3Philosophy } from "@/03_Engineering_System/site/sections/Chapter3Philosophy";
import { Chapter4Process } from "@/03_Engineering_System/site/sections/Chapter4Process";
import { Chapter5Stories } from "@/03_Engineering_System/site/sections/Chapter5Stories";
import { Chapter6Founder } from "@/03_Engineering_System/site/sections/Chapter6Founder";
import { Chapter7Invitation } from "@/03_Engineering_System/site/sections/Chapter7Invitation";

export default function Home() {
  return (
    <main>
      <Chapter1Stop />
      <Chapter2Problem />
      <Chapter3Philosophy />
      <Chapter4Process />
      <Chapter5Stories />
      <Chapter6Founder />
      <Chapter7Invitation />
    </main>
  );
}
