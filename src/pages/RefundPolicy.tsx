import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RefreshCw, CheckCircle, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
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
          <RefreshCw className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Refund Policy
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            We stand behind the quality of our services. Here's our comprehensive refund and satisfaction guarantee policy.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass glass-hover rounded-xl p-8 space-y-8">
            
            {/* Our Guarantee */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Our Service Guarantee
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  At Drybrite Laundry, we are committed to providing exceptional service. If you're not completely satisfied with our work, we will make it right.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>100% satisfaction guarantee on all services</li>
                  <li>Free re-cleaning if you're not satisfied</li>
                  <li>Full refund for services not meeting our standards</li>
                  <li>Transparent pricing with no hidden charges</li>
                </ul>
              </div>
            </div>

            {/* Refund Eligibility */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Refund Eligibility</h2>
              <div className="space-y-4 text-foreground/80">
                <p>You may be eligible for a refund in the following situations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Items not cleaned to professional standards</li>
                  <li>Damage caused by our cleaning process</li>
                  <li>Failure to deliver within the promised timeframe</li>
                  <li>Loss of items while in our care</li>
                  <li>Service not performed as requested</li>
                </ul>
                <p className="mt-4">
                  <strong>Note:</strong> Issues must be reported within 24 hours of delivery for refund consideration.
                </p>
              </div>
            </div>

            {/* Refund Process */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">How to Request a Refund</h2>
              <div className="space-y-4 text-foreground/80">
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact us within 24 hours of delivery</li>
                  <li>Provide your order details and describe the issue</li>
                  <li>Allow us to inspect the items if necessary</li>
                  <li>We will offer re-cleaning or full refund based on the situation</li>
                  <li>Refunds are processed within 3-5 business days</li>
                </ol>
              </div>
            </div>

            {/* What We Cover */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">What We Cover</h2>
              <div className="space-y-4 text-foreground/80">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">✅ Covered Issues:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Poor cleaning quality</li>
                      <li>Damage due to improper handling</li>
                      <li>Color bleeding or fading</li>
                      <li>Shrinkage beyond normal limits</li>
                      <li>Lost items</li>
                      <li>Late delivery</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">❌ Not Covered:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Pre-existing damage</li>
                      <li>Items with "dry clean at own risk" labels</li>
                      <li>Natural wear and tear</li>
                      <li>Items left in pockets</li>
                      <li>Stains clearly marked as permanent</li>
                      <li>Delays due to weather or holidays</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Timeline */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Refund Timeline</h2>
              <div className="space-y-4 text-foreground/80">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-semibold text-foreground">Report Issue</h3>
                    <p className="text-sm mt-2">Within 24 hours of delivery</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-semibold text-foreground">Investigation</h3>
                    <p className="text-sm mt-2">1-2 business days</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-semibold text-foreground">Resolution</h3>
                    <p className="text-sm mt-2">3-5 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lost Items Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                Lost Items Compensation
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  In the rare event that an item is lost while in our care:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Compensation up to 10 times the cleaning cost</li>
                  <li>Maximum compensation of ₹5,000 per item</li>
                  <li>Proof of purchase may be required for expensive items</li>
                  <li>Compensation is based on current market value, not replacement cost</li>
                </ul>
              </div>
            </div>

            {/* Special Circumstances */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Special Circumstances</h2>
              <div className="space-y-4 text-foreground/80">
                <h3 className="font-semibold text-foreground">Express Service Guarantee:</h3>
                <p>
                  If express service is not delivered within the promised timeframe, you will receive a full refund for the express charges.
                </p>
                
                <h3 className="font-semibold text-foreground mt-4">First-Time Customer:</h3>
                <p>
                  If you're not satisfied with your first order, we'll re-clean your items for free or provide a full refund.
                </p>
              </div>
            </div>

            {/* Contact for Refunds */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Contact Us for Refunds</h2>
              <div className="space-y-4 text-foreground/80">
                <p>To request a refund or report an issue, contact us immediately:</p>
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
                <p className="mt-4 text-sm">
                  <strong>Business Hours:</strong> Monday to Saturday, 8:00 AM to 8:00 PM
                </p>
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

export default RefundPolicy;