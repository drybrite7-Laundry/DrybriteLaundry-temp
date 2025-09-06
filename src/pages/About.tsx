import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
const About = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          About Drybrite Laundry
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">At Drybrite Laundry, we're dedicated to making your life easier with our expert laundry and cleaning services. We offer a full range of solutions, from gentle dry cleaning to convenient bulk laundry, and even specialized care for your shoes, bags, and home furnishings. Our mission is to provide professional, reliable, and affordable cleaning, ensuring your clothes and home are always fresh and bright.</p>
      </section>

      {/* About Content with Moving Images */}
      <section className="container px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Story & Mission
          </h2>
          <p className="text-lg text-foreground/70 max-w-4xl mx-auto mb-8">
            <p class="text-lg text-foreground/70 max-w-4xl mx-auto mb-8">
  **Our Mission:** At Drybrite Laundry, our mission is to redefine convenience and quality in the cleaning industry. We are dedicated to providing exceptional, reliable, and affordable laundry and cleaning services...
</p>

<p class="text-lg text-foreground/70 max-w-4xl mx-auto mb-8">
  **Our Vision:** Our vision is to become the leading and most trusted name in laundry and fabric care, not just in our local area but as a benchmark for quality and service...
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
    </div>;
};
export default About;
