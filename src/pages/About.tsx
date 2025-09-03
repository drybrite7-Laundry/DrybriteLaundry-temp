import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          About Drybrite Laundry
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          Your trusted partner for professional laundry services in IIIT Jhalwa, Prayagraj. Quality care, convenience, and excellence delivered to your doorstep.
        </p>
      </section>

      {/* About Content with Moving Images */}
      <section className="container px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Story & Mission
          </h2>
          <p className="text-lg text-foreground/70 max-w-4xl mx-auto mb-8">
            Founded with a vision to revolutionize laundry services in Prayagraj, Drybrite Laundry combines traditional care with modern convenience. We understand the busy lifestyle of students and professionals, which is why we bring premium laundry services directly to your doorstep.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Why Choose Us?</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Professional cleaning with eco-friendly detergents</li>
                <li>• Free pickup and delivery at your convenience</li>
                <li>• Express service for urgent requirements</li>
                <li>• Specialized care for delicate fabrics</li>
                <li>• Affordable pricing with transparent costs</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Our Commitment</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• 100% satisfaction guarantee</li>
                <li>• Safe handling of your precious garments</li>
                <li>• Timely delivery as promised</li>
                <li>• Excellent customer service support</li>
                <li>• Building long-term trust in our community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;