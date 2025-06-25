import { LogoTicker } from "@/sections/LogoTicker";
import { Navbar } from "../sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return <>
    <Navbar />
    <Hero />
    <LogoTicker />
    <ProductShowcase /> 
    <Services />
    <Testimonials />
    
    
  </>;
}
