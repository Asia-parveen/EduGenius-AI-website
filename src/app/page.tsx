
import HeroSection from "./components/HeroSection";


import FeatureSection from "./components/FeatureSection";
import PerformanceGraph from "./components/PerformanceGraph";

 import TechnologiesSection from "./components/TechnologiesSection";
 import HowItWorks from "./components/HowItWorks";
 import PricingPlans from "./components/PricingPlans";
import ClientTestimonials from "./components/ClientTestimonials";
 import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <FeatureSection /> 
      <PerformanceGraph /> 
      <TechnologiesSection /> 
     <HowItWorks /> 
      <PricingPlans /> 
      <ClientTestimonials /> 
      <ContactUs /> 
     <Footer />
    </div>
  );
}

