import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/config/services";
import { Check, ArrowRight } from "lucide-react";

// Pricing data for each service
const pricingData = {
  "dry-cleaning": {
    basePrice: "₹150",
    items: [
      { item: "Shirts/Blouses", price: "₹80" },
      { item: "Trousers/Pants", price: "₹100" },
      { item: "Suits", price: "₹250" },
      { item: "Dresses", price: "₹150" },
      { item: "Coats/Jackets", price: "₹200" }
    ]
  },
  "premium-laundry": {
    basePrice: "₹120",
    items: [
      { item: "Shirt/T-shirt", price: "₹50" },
      { item: "Trousers", price: "₹70" },
      { item: "Bedsheets", price: "₹80" },
      { item: "Towels", price: "₹40" },
      { item: "Delicate Items", price: "₹100" }
    ]
  },
  "laundry-by-kg": {
    basePrice: "₹60/kg",
    items: [
      { item: "Regular Clothes", price: "₹60/kg" },
      { item: "Heavy Items", price: "₹80/kg" },
      { item: "Minimum Order", price: "3kg" },
      { item: "Express Service", price: "+₹20/kg" }
    ]
  },
  "steam-ironing": {
    basePrice: "₹30",
    items: [
      { item: "Shirts", price: "₹25" },
      { item: "Trousers", price: "₹35" },
      { item: "Dresses", price: "₹40" },
      { item: "Sarees", price: "₹50" },
      { item: "Bed Linens", price: "₹30" }
    ]
  },
  "shoe-cleaning": {
    basePrice: "₹200",
    items: [
      { item: "Casual Shoes", price: "₹150" },
      { item: "Formal Shoes", price: "₹200" },
      { item: "Sports Shoes", price: "₹180" },
      { item: "Boots", price: "₹250" },
      { item: "Leather Care", price: "+₹50" }
    ]
  },
  "bag-cleaning": {
    basePrice: "₹300",
    items: [
      { item: "Handbags", price: "₹250" },
      { item: "Backpacks", price: "₹200" },
      { item: "Laptop Bags", price: "₹300" },
      { item: "Travel Bags", price: "₹400" },
      { item: "Leather Bags", price: "₹350" }
    ]
  },
  "sofa-cleaning": {
    basePrice: "₹1,500",
    items: [
      { item: "2-Seater Sofa", price: "₹1,200" },
      { item: "3-Seater Sofa", price: "₹1,500" },
      { item: "5-Seater Sofa", price: "₹2,000" },
      { item: "Recliner", price: "₹800" },
      { item: "Cushion Cleaning", price: "₹100/piece" }
    ]
  },
  "carpet-cleaning": {
    basePrice: "₹80/sqft",
    items: [
      { item: "Regular Carpet", price: "₹80/sqft" },
      { item: "Persian Rugs", price: "₹120/sqft" },
      { item: "Minimum Charge", price: "₹500" },
      { item: "Stain Treatment", price: "+₹50/stain" },
      { item: "Deodorizing", price: "+₹100" }
    ]
  },
  "curtain-cleaning": {
    basePrice: "₹150/panel",
    items: [
      { item: "Light Curtains", price: "₹100/panel" },
      { item: "Heavy Curtains", price: "₹150/panel" },
      { item: "Silk Curtains", price: "₹200/panel" },
      { item: "Blackout Curtains", price: "₹180/panel" },
      { item: "Installation", price: "₹50/panel" }
    ]
  }
};

const Pricing = () => {
  const handleBookNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=dialog",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Service Pricing
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Transparent and affordable pricing for all your laundry and cleaning needs in IIIT Jhalwa, Prayagraj.
          </p>
          <Badge variant="secondary" className="mt-4 px-4 py-2 text-sm">
            Free Pickup & Delivery for orders above ₹200
          </Badge>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="container px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const pricing = pricingData[service.id as keyof typeof pricingData];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass h-full hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/70">
                      {service.subtitle}
                    </CardDescription>
                    <div className="text-3xl font-bold text-primary mt-4">
                      {pricing.basePrice}
                    </div>
                    <p className="text-sm text-foreground/60">Starting from</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pricing.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-foreground/80">{item.item}</span>
                          </div>
                          <span className="font-medium text-foreground">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={handleBookNow}
                      className="w-full button-gradient"
                    >
                      Book {service.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="container px-4 py-20 bg-gradient-to-r from-primary/5 to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What's Included in Every Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass rounded-lg p-6">
              <Check className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Quality Guarantee</h3>
              <p className="text-foreground/70 text-sm">
                100% satisfaction guarantee on all our services
              </p>
            </div>
            <div className="glass rounded-lg p-6">
              <Check className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Eco-Friendly</h3>
              <p className="text-foreground/70 text-sm">
                Safe, biodegradable cleaning solutions
              </p>
            </div>
            <div className="glass rounded-lg p-6">
              <Check className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">Express Service</h3>
              <p className="text-foreground/70 text-sm">
                24-hour standard, 12-hour FastTrack available
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book any service today and experience professional care with convenient doorstep pickup and delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={handleBookNow} size="lg" className="button-gradient px-8 py-6 text-lg">
              Book Service Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Call: +91-XXXXX-XXXXX
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;