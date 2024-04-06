import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
    <Features />
        <Faq />
        <Pricing />
        <Cta />
        <Footer />
    </div>
    </>
  );
}
