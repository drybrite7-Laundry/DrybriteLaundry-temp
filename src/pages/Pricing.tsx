import { useState } from 'react';
import { motion } from "framer-motion";
import { Check, ArrowRight, Shirt, WashingMachine, PackageOpen, Star, Home } from "lucide-react";

// Placeholder components for Navigation, Footer, and UI elements.
// In a full application, these would be imported from your component library.
// ✅ USE your existing shared components
import Navigation from "@/components/Navigation";


import OfferBar from "@/components/OfferBar";



const Button = ({ onClick, children, className, size = "md", variant = "default" }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = {
    "lg": "h-12 px-6 text-lg",
    "md": "h-10 px-4",
  }[size];
  const variantClasses = {
    "default": "bg-primary text-primary-foreground hover:bg-primary/90",
    "outline": "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }[variant];
  return (
    <button onClick={onClick} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};
const Card = ({ children, className }) => <div className={`rounded-xl border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>;
const CardHeader = ({ children, className }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
const CardTitle = ({ children, className }) => <h3 className={`font-semibold tracking-tight text-2xl ${className}`}>{children}</h3>;
const CardDescription = ({ children, className }) => <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
const CardContent = ({ children, className }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const Badge = ({ children, className, variant = "default" }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variantClasses = {
    "default": "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    "secondary": "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }[variant];
  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>{children}</div>
  );
};

// New services data based on the provided text
const services = [
  { id: "washing-services", title: "Washing Services", subtitle: "For daily wear, casuals, and semi-formals.", icon: <WashingMachine className="w-10 h-10" /> },
  { id: "dry-cleaning-services", title: "Dry Cleaning Services", subtitle: "For delicate and luxury fabrics.", icon: <PackageOpen className="w-10 h-10" /> },
  { id: "ironing-services", title: "Ironing / Pressing Services", subtitle: "Perfectly pressed clothes.", icon: <Shirt className="w-10 h-10" /> },
  { id: "household-care", title: "Household & Home Care", subtitle: "Expert care for large, bulky items.", icon: <Home className="w-10 h-10" /> },
  { id: "special-care-services", title: "Premium & Special Care", subtitle: "For luxury brands and special garments.", icon: <Star className="w-10 h-10" /> },
];

// New pricing data with sample prices
const pricingData = {
  "washing-services": {
    basePrice: "₹50",
    items: [
      { item: "Shirts & Trousers", price: "₹50" },
      { item: "Jeans", price: "₹60" },
      { item: "Winter Wear", price: "₹100" },
      { item: "Bed sheets", price: "₹80" },
      { item: "Blankets (light)", price: "₹250" },
    ]
  },
  "dry-cleaning-services": {
    basePrice: "₹200",
    items: [
      { item: "Suits & Blazers", price: "₹250" },
      { item: "Formal Shirts", price: "₹150" },
      { item: "Sarees (silk/designer)", price: "₹350" },
      { item: "Heavy Curtains", price: "₹500" },
      { item: "Leather Jackets", price: "₹600" },
    ]
  },
  "ironing-services": {
    basePrice: "₹20",
    items: [
      { item: "Shirts & Trousers", price: "₹20" },
      { item: "Sarees", price: "₹40" },
      { item: "Suits & Blazers", price: "₹100" },
      { item: "School Uniforms", price: "₹30" },
      { item: "Household Linen", price: "₹50" },
    ]
  },
  "household-care": {
    basePrice: "₹200",
    items: [
      { item: "Curtains", price: "₹200" },
      { item: "Sofa & Cushion Covers", price: "₹150" },
      { item: "Bed Linen", price: "₹120" },
      { item: "Blankets", price: "₹300" },
      { item: "Carpets", price: "₹400" },
    ]
  },
  "special-care-services": {
    basePrice: "₹500",
    items: [
      { item: "Stain Removal", price: "₹200" },
      { item: "Delicate Fabrics", price: "₹300" },
      { item: "Luxury Brands", price: "₹500" },
      { item: "Perfumed Wash", price: "₹100" },
      { item: "Wedding Wear", price: "₹1000" },
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
    <div className="min-h-screen bg-background text-foreground font-sans">
     <Navigation />

      
      {/* Header */}
      <section className="container px-4 pt-32 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our Services & Pricing
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Transparent and affordable pricing for all your clothing and household cleaning needs.
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
            const pricing = pricingData[service.id];
            
            if (!pricing) return null; // Safety check

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
              Call: +91-92369 54406
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
