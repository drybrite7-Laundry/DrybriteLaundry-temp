import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import ServicesList from "@/components/ServicesList";
const Services = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">Welcome to Drybrite Laundry, your one-stop solution for all your garment and home cleaning needs. We are a professional laundry and dry-cleaning service dedicated to providing superior care for your clothes and a healthier environment for your home.




Our team is committed to delivering exceptional quality with every service, from our gentle dry cleaning and premium laundry options to our specialized care for shoes, bags, and sofas. With our convenient pickup and delivery, we make it easier than ever to keep your belongings fresh and clean.

At Drybrite Laundry, we believe in preserving the quality of your garments while offering an affordable and hassle-free experience. Let us handle the cleaning, so you can focus on what matters most.</p>
      </section>

      {/* Services List */}
      <ServicesList />

      {/* Features Section */}
      <div className="bg-background">
        <FeaturesSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>;
};
export default Services;