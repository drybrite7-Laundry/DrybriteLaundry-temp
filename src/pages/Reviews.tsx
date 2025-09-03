import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Customer Reviews
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          Hear what our satisfied customers have to say about our professional laundry services in IIIT Jhalwa, Prayagraj.
        </p>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Reviews;