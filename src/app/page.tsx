import Hero from "@/components/sections/Hero";
import PracticeAreas from "@/components/sections/PracticeAreas";
import About from "@/components/sections/About";
import TenantFeature from "@/components/sections/TenantFeature";
import AttorneySpotlight from "@/components/sections/AttorneySpotlight";
import Testimonials from "@/components/sections/Testimonials";
import OfficeLocations from "@/components/sections/OfficeLocations";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <About />
      <TenantFeature />
      <AttorneySpotlight />
      <Testimonials />
      <OfficeLocations />
      <Contact />
    </main>
  );
}
