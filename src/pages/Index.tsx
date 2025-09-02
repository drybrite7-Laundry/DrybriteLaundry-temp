import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 laundry-hero-bg"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium text-foreground">
            <Sparkles className="w-4 h-4 inline-block mr-2" />
            Premium laundry & dry cleaning service
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-foreground/80">
              <TextGenerateEffect words="Professional laundry &" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="dry cleaning at your doorstep" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl text-left"
          >
            Experience premium fabric care with 24-hour service, expert handling, and convenient pickup & delivery in IIIT Jhalwa, Prayagraj.{" "}
            <span className="text-foreground font-medium">Book your pickup in minutes.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Book Pickup Now
            </Button>
            <Button size="lg" variant="link" className="text-foreground">
              View Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="Drybrite Laundry Service Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Features Section */}
      <div id="features" className="bg-background">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-background">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-background">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section id="cta" className="container px-4 py-20 relative bg-background">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to experience premium laundry care?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in IIIT Jhalwa who trust Drybrite for their fabric care needs.
          </p>
          <Button size="lg" className="button-gradient">
            Schedule Pickup
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
