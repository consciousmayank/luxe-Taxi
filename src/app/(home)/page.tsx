// import ContactUsContent from "./_components/Contact-us-content";
import ContactUsForm from "./_components/Contact-us-form";
import ImageSlider from "./_components/Image-Slider";
import TaxiShowcase from "@/app/_components/TaxiShowcase";
import AboutSection from "@/app/_components/AboutSection";
import TourPackages from "@/app/_components/TourPackages";
import StatsCounter from "@/app/_components/StatsCounter";
import Features from "@/app/_components/Features";
import OneWayTaxiLinks from "@/app/_components/OneWayTaxiLinks";

// Import Swiper styles

export default function Home() {
  return (
    <>
      <ImageSlider />
      <TaxiShowcase />
      <AboutSection />
      <TourPackages />
      <StatsCounter />
      <Features />
      <OneWayTaxiLinks />
      <ContactUsForm />
      {/* <ContactUsContent /> */}

    </>
  );
}
