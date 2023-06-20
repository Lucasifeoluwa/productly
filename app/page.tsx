"use client";
import Features from "@/components/Features";
import Hero from "@/components/HeroSections";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="pages">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}
