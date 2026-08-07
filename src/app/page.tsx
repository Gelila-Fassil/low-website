import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import PracticeAreas from "../components/sections/PracticeAreas";
import Stats from "../components/sections/Stats";
import Method from "../components/sections/Method";
import CaseStudies from "../components/sections/CaseStudies";
import Testimonials from "../components/sections/Testimonials";
import Team from "../components/sections/Team";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Stats />
        <Method />
        {/* <CaseStudies /> */}
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
