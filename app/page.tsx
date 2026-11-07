import Navbar from "@/app/components/Navbar";
import {
  About,
  Contact,
  CV,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
  Websites,
} from "@/app/components/PortfolioSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <div className="page-shell">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Websites />
          <CV />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
