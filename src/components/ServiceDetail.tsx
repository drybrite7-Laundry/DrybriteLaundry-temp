import { useState } from 'react';
import { motion } from "framer-motion";
import { CheckCircle, WashingMachine, PackageOpen, Star, Home, Shirt } from "lucide-react";

// Placeholder components for a single-file application
const Navigation = () => (
  <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center px-4 md:px-6 justify-center">
      <nav className="flex items-center space-x-4">
        <a href="#" className="font-bold text-lg">Drybrite Laundry</a>
      </nav>
    </div>
  </header>
);
const Footer = () => (
  <footer className="py-12 bg-gray-100 dark:bg-gray-800">
    <div className="container text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Drybrite Laundry. All rights reserved.
    </div>
  </footer>
);
const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-12 px-6 text-lg ${className}`}>
      {children}
    </button>
  );
};
const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-t-lg font-semibold transition-colors ${isActive ? 'bg-background text-primary-foreground' : 'text-foreground/60 hover:text-primary'}`}
  >
    {children}
  </button>
);

// All services data in a single, rich array
const allServices = [
  {
    id: "washing-services",
    title: "Washing Services",
    subtitle: "For daily wear, casuals, and semi-formals.",
    description: "Our washing service is perfect for daily wear, casuals, and semi-formals. Clothes are washed, dried, and neatly folded or ironed, depending on customer preference. We use professional-grade machines and eco-friendly detergents to ensure a clean and fresh result every time.",
    benefits: [
      "Gentle on all fabric types",
      "Odor removal and stain prevention",
      "Available for men, women, and household items",
      "Option for folding or ironing",
      "Fast and efficient turnaround"
    ],
    icon: <WashingMachine className="w-10 h-10" />,
    image: "https://placehold.co/800x400/F5F7FA/334155?text=Washing+Services"
  },
  {
    id: "dry-cleaning-services",
    title: "Dry Cleaning Services",
    subtitle: "For delicate and luxury fabrics.",
    description: "Dry cleaning is recommended for premium, delicate, and luxury fabrics where normal washing may damage the material. We use professional-grade solvents and machines to ensure fabric safety, preserving the color, texture, and integrity of your garments. From fine silk to tailored suits, we handle it all with care.",
    benefits: [
      "Preserves fabric quality and color",
      "Suitable for wool, silk, and formal wear",
      "Removes stubborn, oil-based stains",
      "No water shrinkage or damage",
      "Ideal for premium and designer garments"
    ],
    icon: <PackageOpen className="w-10 h-10" />,
    image: "https://placehold.co/800x400/E2E8F0/1E293B?text=Dry+Cleaning+Services"
  },
  {
    id: "ironing-services",
    title: "Ironing / Pressing Services",
    subtitle: "Perfectly pressed clothes.",
    description: "Perfectly ironed clothes enhance personal appearance. Our ironing services are available as a standalone option or can be combined with our washing and dry-cleaning services. Our team uses state-of-the-art steam irons and presses to give your clothes a crisp, wrinkle-free finish.",
    benefits: [
      "Crisp, professional finish",
      "Removes all creases and wrinkles",
      "Available as a standalone service",
      "Suitable for all garment types",
      "Enhances the longevity of your clothes"
    ],
    icon: <Shirt className="w-10 h-10" />,
    image: "https://placehold.co/800x400/CBD5E1/475569?text=Ironing+%2F+Pressing"
  },
  {
    id: "household-care",
    title: "Household & Home Care",
    subtitle: "Expert care for large, bulky items.",
    description: "We understand that household fabrics require equal care. Our team handles large, bulky, and delicate items with expertise, including curtains, blankets, and sofa covers. We ensure these items are thoroughly cleaned while maintaining their quality and freshness.",
    benefits: [
      "Specialized equipment for large items",
      "Deep cleaning for allergens and dust",
      "Maintains fabric structure and color",
      "Convenient pickup and delivery",
      "Perfect for quilts, blankets, and drapes"
    ],
    icon: <Home className="w-10 h-10" />,
    image: "https://placehold.co/800x400/94A3B8/F8FAFC?text=Household+Care"
  },
  {
    id: "special-care-services",
    title: "Premium & Special Care",
    subtitle: "For luxury brands and special garments.",
    description: "Some garments need extra attention due to their material, design, or stains. For this, we provide specialized garment care. Our services include targeted stain removal treatments, special handling for delicate fabrics like silk and cashmere, and professional cleaning for luxury brands and wedding wear.",
    benefits: [
      "Targeted stain removal",
      "Hand-finished for luxury items",
      "Customized treatment for each garment",
      "Protects delicate materials",
      "Ideal for wedding and designer wear"
    ],
    icon: <Star className="w-10 h-10" />,
    image: "https://placehold.co/800x400/64748B/E2E8F0?text=Premium+Services"
  }
];

const ServiceDetail = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(allServices[0].id);
  const service = allServices.find((s) => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Tabs to switch services */}
      <div className="container px-4 pt-32 pb-8 flex justify-center space-x-4 flex-wrap">
        {allServices.map((s) => (
          <TabButton
            key={s.id}
            isActive={s.id === selectedServiceId}
            onClick={() => setSelectedServiceId(s.id)}
          >
            {s.title}
          </TabButton>
        ))}
      </div>

      {/* Service Header */}
      <section className="container px-4 pb-12">
        <motion.div
          key={service.id} // Key to trigger animation on service change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-6">
            <div className="text-primary mr-4">{service.icon}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {service.title}
              </h1>
              <p className="text-xl text-foreground/70">{service.subtitle}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {service.description}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary/5 py-12">
        <div className="container px-4">
          <motion.div
            key={`${service.id}-benefits`} // Key to trigger animation on service change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose Our {service.title} Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container px-4">
          <motion.div
            key={`${service.id}-cta`} // Key to trigger animation on service change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Experience Professional Care?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Book your {service.title.toLowerCase()} service today and enjoy
              convenient pickup and delivery.
            </p>
            <Button
              className="button-gradient px-8 py-6 text-lg font-medium"
              onClick={() => window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=header",
                "_blank"
              )}
            >
              Book {service.title} Now
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
