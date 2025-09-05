import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Shirt, Clock, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
const TermsOfService = () => {
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Please read these terms carefully before using our laundry and dry cleaning services.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass glass-hover rounded-xl p-8 space-y-8">
            
            {/* Service Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Shirt className="w-6 h-6 text-primary" />
                Our Services
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Drybrite Laundry provides professional laundry and dry cleaning services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Regular washing and drying services</li>
                  <li>Premium dry cleaning for delicate garments</li>
                  <li>Steam ironing and pressing</li>
                  <li>Shoe and bag cleaning services</li>
                  <li>Household items cleaning (sofas, carpets, curtains)</li>
                  <li>Express same-day service (subject to availability)</li>
                </ul>
              </div>
            </div>

            {/* Service Area */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Service Area</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Our services are currently available in IIIT Jhalwa, Prayagraj and surrounding areas. We provide doorstep pickup and delivery within our service radius.
                </p>
              </div>
            </div>

            {/* Booking and Orders */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Booking and Orders</h2>
              <div className="space-y-4 text-foreground/80">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Orders can be placed through our Google Forms or WhatsApp</li>
                  <li>Minimum order value may apply for delivery services</li>
                  <li>Pickup and delivery times are estimates and may vary</li>
                  <li>Special instructions should be communicated at the time of booking</li>
                  <li>We reserve the right to refuse service for heavily soiled or damaged items</li>
                </ul>
              </div>
            </div>

            {/* Pricing and Payment */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Pricing and Payment</h2>
              <div className="space-y-4 text-foreground/80">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prices are subject to change without prior notice</li>
                  <li>Payment is due upon delivery of cleaned items</li>
                  <li>We accept cash payments and digital transfers</li>
                  <li>Additional charges may apply for express services</li>
                  <li>Stain removal is attempted but not guaranteed</li>
                </ul>
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Customer Responsibilities</h2>
              <div className="space-y-4 text-foreground/80">
                <p>As a customer, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Check all pockets before submitting items for cleaning</li>
                  <li>Inform us of any stains, damage, or special care requirements</li>
                  <li>Collect your items within 30 days of completion</li>
                  <li>Report any issues within 24 hours of delivery</li>
                  <li>Provide accurate contact and address information</li>
                </ul>
              </div>
            </div>

            {/* Liability and Disclaimers */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Liability and Disclaimers</h2>
              <div className="space-y-4 text-foreground/80">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We are not liable for items left in pockets</li>
                  <li>Liability for lost or damaged items is limited to 10x the cleaning cost</li>
                  <li>Some stains may be permanent and cannot be guaranteed to be removed</li>
                  <li>Shrinkage or color bleeding may occur despite best efforts</li>
                  <li>Items not collected within 90 days will be donated to charity</li>
                </ul>
              </div>
            </div>

            {/* Service Availability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Service Availability
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Services are subject to availability and may be suspended due to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Equipment maintenance or technical issues</li>
                  <li>Extreme weather conditions</li>
                  <li>Public holidays and festivals</li>
                  <li>Force majeure events</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Termination</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  We reserve the right to terminate or suspend services to customers who:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate these terms of service</li>
                  <li>Provide false or misleading information</li>
                  <li>Engage in abusive or threatening behavior</li>
                  <li>Fail to pay for services</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              <div className="space-y-4 text-foreground/80">
                <p>For questions about these terms, please contact us:</p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>IIIT Jhalwa, Prayagraj</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+91 74878 64406</span>
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
    </div>;
};
export default TermsOfService;