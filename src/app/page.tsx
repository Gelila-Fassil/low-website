import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import About from "../components/sections/About";
import PracticeAreas from "../components/sections/PracticeAreas";
import Stats from "../components/sections/Stats";
import Method from "../components/sections/Method";
import CaseStudies from "../components/sections/CaseStudies";
import Team from "../components/sections/Team";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PracticeAreas />
        <Stats />
        <Method />
        <CaseStudies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
