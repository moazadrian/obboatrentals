import Hero from "@/components/sections/Hero";
import Experiences from "@/components/sections/Experiences";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import StickyCTA from "@/components/ui/StickyCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experiences />
      <WhyUs />
      <Gallery />
      <Reviews />
      <Location />
      <StickyCTA />
    </>
  );
}