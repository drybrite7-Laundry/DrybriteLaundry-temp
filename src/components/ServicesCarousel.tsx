import { motion } from "framer-motion";
import { Shirt, Sparkles, Shield, Home, Clock } from "lucide-react";

const ServicesCarousel = () => {
  const services = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Washing & Dry Cleaning",
      description: "Professional care for all your garments"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Ironing & Pressing",
      description: "Crisp, wrinkle-free finishing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stain Treatment",
      description: "Expert removal of tough stains"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Household Items",
      description: "Curtains, carpets, and home textiles"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Service",
      description: "12-hour FastTrack option available"
    }
  ];

  const extendedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden bg-primary/5 backdrop-blur-sm py-12 mt-20">
      <div className="container px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Our Services
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto">
          Complete fabric care solutions for your everyday needs
        </p>
      </div>
      
      <motion.div 
        className="flex space-x-8"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "2rem"
        }}
      >
        {extendedServices.map((service, index) => (
          <motion.div
            key={`service-${index}`}
            className="flex-shrink-0 bg-card rounded-lg p-6 min-w-[280px] glass-hover"
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="text-primary mb-4">
              {service.icon}
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-foreground/70">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesCarousel;