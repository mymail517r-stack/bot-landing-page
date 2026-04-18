import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Faqs } from "@/components/sections/Faqs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { siteConfig } from "@/config/site";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = `${siteConfig.bot.name} — ${siteConfig.bot.tagline}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", siteConfig.bot.description);
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <TeamShowcase />
      <Faqs />
      <CtaBanner />
    </>
  );
};

export default Index;
