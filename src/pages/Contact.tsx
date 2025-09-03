import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleBookNow = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=dialog", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          Get in touch with us for professional laundry services. We're here to help with all your fabric care needs.
        </p>
      </section>

      {/* Contact Information */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6 text-center"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
            <p className="text-foreground/70">
              IIIT Jhalwa<br />
              Prayagraj, Uttar Pradesh
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 text-center"
          >
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
            <p className="text-foreground/70">
              +91 XXXXX XXXXX<br />
              Call for immediate pickup
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 text-center"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-foreground/70">
              +91 XXXXX XXXXX<br />
              Quick booking & updates
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-6 text-center"
          >
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Service Hours</h3>
            <p className="text-foreground/70">
              7 Days a Week<br />
              8:00 AM - 8:00 PM
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Schedule Your Pickup?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your laundry pickup in minutes. Our team will collect, clean, and deliver your clothes within 24 hours.
          </p>
          <Button 
            onClick={handleBookNow}
            size="lg" 
            className="button-gradient"
          >
            Book Pickup Now
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;