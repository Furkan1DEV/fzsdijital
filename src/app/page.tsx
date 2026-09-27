import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import Proof from "@/components/proof";
import Packages from "@/components/packages";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import RevealObserver from "@/components/reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Proof />
        <Packages />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
