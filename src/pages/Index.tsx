import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import MachineLineup from '@/components/MachineLineup';
import ProductShowcase from '@/components/ProductShowcase';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MachineLineup />
        <FeaturesSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
