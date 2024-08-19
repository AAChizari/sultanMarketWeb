import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Testimonials />
      <Contact />      
      <Footer />      
    </>
  );
}
