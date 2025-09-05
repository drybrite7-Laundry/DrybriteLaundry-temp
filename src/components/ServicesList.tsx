import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/services";
import { Button } from "@/components/ui/button";

const ServicesList = () => {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Complete Service Menu
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Click on any service to learn more about our professional care process
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/services/${service.id}`}>
              <motion.div
                className="bg-card rounded-lg p-6 h-full glass-hover cursor-pointer group border border-primary/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                  {service.subtitle}
                </p>
                
                <div className="flex items-center text-primary text-sm font-medium group-hover:text-secondary transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button 
          size="lg" 
          className="button-gradient px-8 py-6 text-lg font-medium"
          onClick={() => {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
              onClick={() => window.location.href = 'https://www.google.com';
            }
          }}
        >
          Book Any Service Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ServicesList;
