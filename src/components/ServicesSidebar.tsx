import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { services } from "@/config/services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServicesSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="container px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Services Sidebar */}
        <motion.div
          className="lg:w-80 bg-gradient-to-b from-emerald-800 to-teal-900 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Our Services
          </h2>
          
          <div className="space-y-2">
            {services.map((service, index) => {
              const isActive = currentPath === `/services/${service.id}`;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/services/${service.id}`}>
                    <motion.div
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group cursor-pointer ${
                        isActive 
                          ? 'bg-white/20 text-white border border-white/30' 
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-emerald-200 group-hover:text-white'
                      }`}>
                        {service.icon}
                      </div>
                      
                      <span className="font-medium text-sm flex-1">
                        {service.title}
                      </span>
                      
                      <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-white/60 group-hover:text-white group-hover:translate-x-1'
                      }`} />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="w-full bg-white text-emerald-800 hover:bg-white/90 font-semibold py-3"
              onClick={() => {
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=header';
              }}
            >
              Book Any Service
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Service Menu
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Click on any service from the sidebar to learn more about our professional care process
            </p>
          </motion.div>

          {/* Service Cards in Grid (optional - can be removed if only sidebar is needed) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {services.slice(0, 4).map((service, index) => (
              <Link key={service.id} to={`/services/${service.id}`}>
                <motion.div
                  className="bg-card rounded-lg p-6 h-full glass-hover cursor-pointer group border border-primary/10"
                  whileHover={{ y: -3, scale: 1.01 }}
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
                  
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {service.subtitle}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;