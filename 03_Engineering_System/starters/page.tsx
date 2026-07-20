import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Contact } from "./sections/Contact";

/**
 * Client homepage.
 * Hero → About → Work → Contact
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
