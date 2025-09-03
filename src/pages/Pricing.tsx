import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PricingSection } from "@/components/pricing/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Our Pricing
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          Transparent, affordable pricing for all your laundry and dry cleaning needs. Choose the plan that works best for you.
        </p>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;