import { NorthOpening } from "@/03_Engineering_System/north/sections/NorthOpening";
import { NorthWhy } from "@/03_Engineering_System/north/sections/NorthWhy";
import { NorthStory } from "@/03_Engineering_System/north/sections/NorthStory";
import { NorthProblem } from "@/03_Engineering_System/north/sections/NorthProblem";
import { NorthThinking } from "@/03_Engineering_System/north/sections/NorthThinking";
import { NorthProduct } from "@/03_Engineering_System/north/sections/NorthProduct";
import { NorthBehind } from "@/03_Engineering_System/north/sections/NorthBehind";
import { NorthVision } from "@/03_Engineering_System/north/sections/NorthVision";
import { NorthCTA } from "@/03_Engineering_System/north/sections/NorthCTA";

export default function NorthPage() {
  return (
    <main>
      <NorthOpening />
      <NorthWhy />
      <NorthStory />
      <NorthProblem />
      <NorthThinking />
      <NorthProduct />
      <NorthBehind />
      <NorthVision />
      <NorthCTA />
    </main>
  );
}
