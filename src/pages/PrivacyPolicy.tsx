import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Drybrite Laundry collects, uses, and protects your personal information.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass glass-hover rounded-xl p-8 space-y-8">
            
            {/* Information Collection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Book our laundry services through our Google Forms</li>
                  <li>Contact us via WhatsApp or phone</li>
                  <li>Provide pickup and delivery addresses</li>
                  <li>Share special instructions for your garments</li>
                </ul>
                <p>
                  This may include your name, contact number, address, and service preferences.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              <div className="space-y-4 text-foreground/80">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our laundry services</li>
                  <li>Schedule pickups and deliveries</li>
                  <li>Communicate with you about your orders</li>
                  <li>Send service updates and confirmations</li>
                  <li>Process payments and maintain records</li>
                  <li>Respond to your questions and requests</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Data Protection & Security
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure storage of customer information</li>
                  <li>Limited access to personal data on need-to-know basis</li>
                  <li>Regular deletion of outdated customer records</li>
                  <li>Encrypted communication channels where possible</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
              <div className="space-y-4 text-foreground/80">
                <p>We use the following third-party services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Forms:</strong> For service bookings and customer requests</li>
                  <li><strong>Google Maps:</strong> For location services and directions</li>
                  <li><strong>WhatsApp:</strong> For customer communication</li>
                </ul>
                <p>
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              <div className="space-y-4 text-foreground/80">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Withdraw consent for data processing</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <div className="space-y-4 text-foreground/80">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>IIIT Jhalwa, Prayagraj</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>WhatsApp Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-primary/20">
              <p className="text-sm text-foreground/60">
                Last updated: {new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;