import { About } from "./_components/about";
import { Header } from "./_components/header";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Projects />
      <About />
    </main>
  );
}
