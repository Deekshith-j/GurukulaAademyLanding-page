import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Splash } from "@/components/Splash";
import { Header } from "@/components/Header";
import { Marquee } from "@/components/Marquee";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Results } from "@/components/sections/Results";
import { Vision } from "@/components/sections/Vision";
import { Gallery } from "@/components/sections/Gallery";
import { Branches } from "@/components/sections/Branches";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gurukula Academy | Smart Scholars Tuitions — MG Study Centre" },
      {
        name: "description",
        content:
          "Premium tuitions for Classes 7th–10th across State Board, CBSE & ICSE. Two branches, one philosophy: disciplined teaching, measurable results.",
      },
      { property: "og:title", content: "Gurukula Academy | Smart Scholars Tuitions" },
      { property: "og:description", content: "Premium tuitions for Classes 7th–10th — State Board, CBSE, ICSE." },
    ],
  }),
  component: Index,
});

function Index() {
  // smooth scroll to hash on load
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      <Splash />
      <Header />
      <Marquee />
      <main>
        <Hero />
        <About />
        <Results />
        <Vision />
        <Gallery />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
