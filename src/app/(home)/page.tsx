import AboutUs from "./_components/About-us";
import ContactUs from "./_components/Contact-us";
import ImageSlider from "./_components/Image-Slider";
import TaxiDetails from "./_components/Taxi-Details";

// Import Swiper styles

export default function Home() {
  return (
    <>
      <ImageSlider />
      <TaxiDetails />
      <AboutUs /> 
      <ContactUs />
    </>
  );
}
