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
  { id: "laundry-iron", title: "Laundry / Iron Services", subtitle: "Fresh wash and iron for daily & traditional wear.", icon: <Shirt className="w-10 h-10" /> },
  { id: "steam-press", title: "Steam Press / Steam Iron", subtitle: "Perfectly pressed clothes with steam finishing.", icon: <Shirt className="w-10 h-10" /> },
  { id: "home-essentials", title: "Home Essentials", subtitle: "Care for blankets, curtains, sofa covers & more.", icon: <Home className="w-10 h-10" /> },
  { id: "dry-cleaning", title: "Dry Cleaning", subtitle: "Expert dry-cleaning for delicate & designer wear.", icon: <WashingMachine className="w-10 h-10" /> },
  { id: "wash-by-weight", title: "Laundry by Weight", subtitle: "Affordable wash per kilogram of clothes.", icon: <PackageOpen className="w-10 h-10" /> },
  { id: "premium-wedding", title: "Premium & Wedding Care", subtitle: "Designer wear, wedding suits, lehengas & more.", icon: <Star className="w-10 h-10" /> },
];



// New pricing data with sample prices
const pricingData = {
  "laundry-iron": {
    basePrice: "₹20",
    items: [
      { item: "Shirt", price: "₹20" },
      { item: "Shirt & Dhoti (Silk)", price: "₹30" },
      { item: "Kurta (Cotton)", price: "₹39" },
      { item: "Kurta (Silk)", price: "₹59" },
      { item: "Kurta Heavy", price: "₹99" },
      { item: "Kurta Pyjama (Heavy)", price: "₹109" },
      { item: "Kurta Pyjama (Light)", price: "₹59" },
      { item: "Safari Shirt & Pant", price: "₹79" },
      { item: "Jeans", price: "₹25" },
      { item: "Trousers", price: "₹39" },
      { item: "Formal & Casual Pants", price: "₹39" },
      { item: "Combo Shirt + Pant", price: "₹49" },
      { item: "Blazer / Coat", price: "₹129" },
      { item: "Jacket Normal Short", price: "₹99" },
      { item: "Jacket Puffer", price: "₹129" },
      { item: "Suit 2 Pc", price: "₹159" },
      { item: "Suit 3 Pc", price: "₹179" },
      { item: "Sweater / Cardigan (Full Sleeve)", price: "₹79" },
      { item: "Sweater / Cardigan (Sleeveless)", price: "₹69" },
      { item: "Sherwani", price: "₹159" },
      { item: "Saree", price: "₹50" },
      { item: "Saree Silk", price: "₹149" },
      { item: "Wedding Sherwani Set", price: "₹199" },
      { item: "Wedding Sherwani Set Designer", price: "₹249" },
      { item: "Wedding Suit (3 pcs)", price: "₹249" },
      { item: "Lahanga", price: "₹249" },
      { item: "Wedding Suit Designer (3 pcs)", price: "₹299" },
      { item: "Wedding Tuxedo (3 pcs)", price: "₹249" },
      { item: "Wedding Garara Designer (3 pcs)", price: "₹299" },
    ]
  },


  "steam-press": {
    basePrice: "₹10",
    items: [
      { item: "Shirt", price: "₹10" },
      { item: "Shirt & Dhoti (Silk)", price: "₹20" },
      { item: "Kurta (Cotton)", price: "₹15" },
      { item: "Kurta (Silk)", price: "₹25" },
      { item: "Kurta Heavy", price: "₹45" },
      { item: "Kurta Pyjama (Heavy)", price: "₹50" },
      { item: "Kurta Pyjama (Light)", price: "₹25" },
      { item: "Safari Shirt & Pant", price: "₹35" },
      { item: "Jeans", price: "₹12" },
      { item: "Trousers", price: "₹15" },
      { item: "Formal & Casual Pants", price: "₹15" },
      { item: "Pyjama", price: "₹12" },
      { item: "Combo Shirt + Pant", price: "₹25" },
      { item: "Blazer / Coat", price: "₹60" },
      { item: "Jacket Normal", price: "₹50" },
      { item: "Suit 2 Pc", price: "₹79" },
      { item: "Suit 3 Pc", price: "₹89" },
      { item: "Sweater / Cardigan (Full Sleeve)", price: "₹35" },
      { item: "Sweater / Cardigan (Sleeveless)", price: "₹30" },
      { item: "Sweatshirt / Jumper", price: "₹35" },
    ]
  },


  "dry-cleaning": {
    basePrice: "₹39",
    items: [
      { item: "Shirt & Dhoti (Silk)", price: "₹39" },
      { item: "Kurta (Silk)", price: "₹59" },
      { item: "Kurta Heavy", price: "₹99" },
      { item: "Kurta Pyjama (Heavy)", price: "₹109" },
      { item: "Safari Shirt & Pant", price: "₹79" },
      { item: "Blazer / Coat", price: "₹129" },
      { item: "Jacket Normal", price: "₹99" },
      { item: "Sherwani", price: "₹159" },
      { item: "Wedding Sherwani Set", price: "₹199" },
      { item: "Wedding Sherwani Set Designer", price: "₹249" },
      { item: "Wedding Suit (3 pcs)", price: "₹249" },
      { item: "Wedding Suit Designer (3 pcs)", price: "₹299" },
      { item: "Wedding Tuxedo (3 pcs)", price: "₹249" },
      { item: "Wedding Tuxedo Designer (3 pcs)", price: "₹299" },
      { item: "Gown / Lehenga (Designer / Special Occasion)", price: "₹149 – ₹299" },
    ]
  },

    

  "wash-by-weight": {
    basePrice: "₹80 / kg",
    items: [
      { item: "Cotton / Daily Wear (Shirts, T-Shirts, Pants)", price: "₹80 / kg" },
      { item: "Jeans / Heavy Bottoms", price: "₹100 / kg" },
      { item: "Woolen / Sweaters / Cardigans", price: "₹120 / kg" },
      { item: "Delicate Fabrics (Silk, Satin, Velvet)", price: "₹140 / kg" },
      { item: "Bedsheets / Pillow Covers / Curtains", price: "₹80 / kg" },
      { item: "Blankets / Quilts / Comforters", price: "₹150 / kg" },
      { item: "Sofa Covers / Mattress Covers", price: "₹120 / kg" },
      { item: "Table Cloths / Towels", price: "₹80 / kg" },
      { item: "Carpets / Rugs", price: "₹200 / kg" },
    ]
  },

  
  
  "premium-wedding": {
    basePrice: "₹159",
    items: [
      { item: "Sherwani", price: "₹159" },
      { item: "Wedding Sherwani Set", price: "₹199" },
      { item: "Wedding Sherwani Set Designer", price: "₹249" },
      { item: "Coat Pant", price: "₹159" },
      { item: "Saree Silk", price: "₹149" },
      { item: "Wedding Suit (3 pcs)", price: "₹249" },
      { item: "Wedding Suit Designer (3 pcs)", price: "₹299" },
      { item: "Wedding Lahanga", price: "₹249" },
      { item: "Wedding Garara Designer (3 pcs)", price: "₹299" },
      { item: "Gown / Lehenga (Designer / Special Occasion)", price: "₹199 – ₹299" },
      { item: "Formal Suit 2 Pc", price: "₹159" },
      { item: "Formal Suit 3 Pc", price: "₹179" },
    ]
  },

 "home-essentials": {
    basePrice: "₹29",
    items: [
      { item: "Blanket – Single Size", price: "₹99" },
      { item: "Blanket – Double Size", price: "₹199" },
      { item: "Blanket – King Size", price: "₹249" },
      { item: "Curtain (per piece)", price: "₹29" },
      { item: "Sofa Cover Set", price: "₹149" },
      { item: "Pillow Cover", price: "₹15" },
      { item: "Bedsheet – Single", price: "₹29" },
      { item: "Bedsheet – Double", price: "₹39" },
      { item: "Bedsheet – King", price: "₹69" },
      { item: "Carpet – Small (per piece)", price: "₹199" },
      { item: "Carpet – Large (per piece)", price: "₹399" },
      { item: "Shoes (Leather / Suede / Nubuck)", price: "₹149" },
      { item: "Shoes (Sports / Sneakers)", price: "₹149" },
      { item: "Boots (Leather)", price: "₹99" },
      { item: "Formal Shoes (Polish & Clean)", price: "₹99" },
      { item: "School Shoes (per pair)", price: "₹30" },
      { item: "Kids Shoes (per pair)", price: "₹59" },
      { item: "Heels (Regular)", price: "₹89" },
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
                   
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pricing.items.map((item, itemIndex) => (
                       
                
                <div 
                         key={itemIndex} 
                         className="flex items-start justify-between text-sm gap-2"
>
               <div className="flex items-start gap-2 flex-1">
                       <Check className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-foreground/80 break-words">
                          {item.item}
                      </span>
               </div>
                      <span className="font-medium text-foreground whitespace-nowrap">
                       {item.price}
                      </span>
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
      
    </div>
  );
};

export default Pricing;
