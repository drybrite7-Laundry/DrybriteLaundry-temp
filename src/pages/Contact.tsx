import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const Contact = () => {
  const handleBookNow = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=dialog", "_blank");
  };
  return <div className="min-h-screen bg-background text-foreground">
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

      {/* Map and Contact Summary */}
      <section className="container px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Google Maps */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.1
        }} className="glass rounded-xl overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3689943425743!2d81.7627576723741!3d25.4259243728356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398533006ff54159%3A0x920d38a8e9cccd93!2sDrybrite%20Laundry!5e0!3m2!1sen!2sin!4v1756995185330!5m2!1sen!2sin" width="100%" height="400" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-96 lg:h-[400px]" />
          </motion.div>

          {/* Contact Summary */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Visit Our Location</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-foreground/70">IIIT Jhalwa, Prayagraj, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Hours</h3>
                  <p className="text-foreground/70">7 Days a Week, 8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Quick Contact</h3>
                  <p className="text-foreground/70">+91 74878 64406</p>
                </div>
              </div>
            </div>
            <Button onClick={handleBookNow} className="w-full mt-6 button-gradient">
              Schedule Pickup
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="glass rounded-xl p-6 text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
            <p className="text-foreground/70">
              IIIT Jhalwa<br />
              Prayagraj, Uttar Pradesh
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="glass rounded-xl p-6 text-center">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">+91 74878 64406
Call for immediate pickup</h3>
            <p className="text-foreground/70">
              +91 XXXXX XXXXX<br />
              Call for immediate pickup
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="glass rounded-xl p-6 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-foreground/70">
              +91 XXXXX XXXXX<br />
              Quick booking & updates
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="glass rounded-xl p-6 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">Service Hours</h3>
            <p className="text-foreground/70">
              7 Days a Week<br />
              8:00 AM - 8:00 PM
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Schedule Your Pickup?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your laundry pickup in minutes. Our team will collect, clean, and deliver your clothes within 24 hours.
          </p>
          <Button onClick={handleBookNow} size="lg" className="button-gradient">
            Book Pickup Now
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>;
};
export default Contact;