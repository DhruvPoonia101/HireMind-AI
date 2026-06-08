import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import FloatingOrbs from "../components/FloatingOrbs";
import StatsSection from "../components/StatsSection";
import WhyHireMind from "../components/WhyHireMind";
import DashboardPreview from "../components/DashboardPreview";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[180px] opacity-20" />

      
      <FloatingOrbs />
      <Navbar />
      <Hero />
      <FeatureCards />
      <WhyHireMind />
      <DashboardPreview />
      <CTASection />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default Home;