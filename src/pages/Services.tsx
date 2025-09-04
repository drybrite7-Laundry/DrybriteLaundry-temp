import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import ServicesList from "@/components/ServicesList";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          Professional laundry and dry cleaning services designed for your convenience and fabric care needs.
        </p>
      </section>

      {/* Services List */}
      <ServicesList />

      {/* Features Section */}
      <div className="bg-background">
        <FeaturesSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;