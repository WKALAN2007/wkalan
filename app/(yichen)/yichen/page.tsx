import { YichenOpening } from "@/03_Engineering_System/yichen/sections/YichenOpening";
import { YichenManifesto } from "@/03_Engineering_System/yichen/sections/YichenManifesto";
import { YichenJourney } from "@/03_Engineering_System/yichen/sections/YichenJourney";
import { YichenStories } from "@/03_Engineering_System/yichen/sections/YichenStories";
import { YichenProcess } from "@/03_Engineering_System/yichen/sections/YichenProcess";
import { YichenBehind } from "@/03_Engineering_System/yichen/sections/YichenBehind";

import { YichenInvitation } from "@/03_Engineering_System/yichen/sections/YichenInvitation";

export default function YichenPage() {
  return (
    <main>
      <YichenOpening />
      <YichenManifesto />
      <YichenJourney />
      <YichenStories />
      <YichenProcess />
      <YichenBehind />

      <YichenInvitation />
    </main>
  );
}
