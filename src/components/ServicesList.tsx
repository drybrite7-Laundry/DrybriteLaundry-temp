import { motion } from "framer-motion";
import { ArrowRight, WashingMachine, PackageOpen, Star, Home, Shirt } from "lucide-react";
import { Link } from "react-router-dom";

// The Button component
const Button = ({ onClick, children, className, size = "lg" }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = {
    lg: "h-12 px-6 text-lg",
    md: "h-10 px-4",
  }[size];
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

// All services data
const allServices = [
  {
    id: "washing-services",
    title: "Washing Services",
    subtitle: "For daily wear, casuals, and semi-formals.",
    icon: <WashingMachine className="w-10 h-10" />,
  },
  {
    id: "dry-cleaning-services",
    title: "Dry Cleaning Services",
    subtitle: "For delicate and luxury fabrics.",
    icon: <PackageOpen className="w-10 h-10" />,
  },
  {
    id: "ironing-services",
    title: "Ironing / Pressing Services",
    subtitle: "Perfectly pressed clothes.",
    icon: <Shirt className="w-10 h-10" />,
  },
  {
    id: "household-care",
    title: "Household & Home Care",
    subtitle: "Expert care for large, bulky items.",
    icon: <Home className="w-10 h-10" />,
  },
  {
    id: "special-care-services",
    title: "Premium & Special Care",
    subtitle: "For luxury brands and special garments.",
    icon: <Star className="w-10 h-10" />,
  },
];

const ServicesList = () => {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Solutions for Every Fabric
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Click on any service to learn more about our professional care process
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {allServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to="/pricing">
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

                {/* ✅ Fixed subtitle text wrapping */}
                <p className="text-sm text-foreground/60 mb-4 leading-relaxed whitespace-normal break-words">
                  {service.subtitle}
                </p>

                <span className="flex items-center text-primary text-sm font-medium group-hover:text-secondary transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
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
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=header",
              "_blank"
            );
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
