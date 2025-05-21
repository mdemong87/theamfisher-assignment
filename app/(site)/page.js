import BlogSection from "../componnent/BlogSection";
import ContactSection from "../componnent/ContactSection";
import Header from "../componnent/Header";
import Hero from "../componnent/Hero";
import PortfolioSection from "../componnent/PortfolioSection";
import PricingSection from "../componnent/PricingSection";
import ResumeSection from "../componnent/ResumeSection";
import SkillsSection from "../componnent/SkillsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ResumeSection />
      <SkillsSection />
      <PortfolioSection />
      <BlogSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
