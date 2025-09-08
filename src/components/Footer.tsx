import { Phone, MessageCircle, MapPin, WashingMachine, PackageOpen, Star, Home, Shirt } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder for a single-file application
const Button = ({ onClick, children, className, variant = "solid" }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-12 px-6 text-lg";
  const variantClasses = {
    "solid": "button-gradient",
    "outline": "glass-hover border-2 border-primary/20 bg-background hover:bg-primary/5 text-foreground"
  }[variant];
  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

// All services data from the most up-to-date file
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

const Footer = () => {
  // Simple navigation handler for a single-file app
  const handleLinkClick = (e, path) => {
    e.preventDefault();
    console.log(`Navigating to ${path}`);
    // In a real app, this would use a router, e.g., navigate(path)
  };

  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg text-foreground">Drybrite Laundry</h3>
              <p className="text-sm text-foreground/70">
                Premium doorstep laundry and dry cleaning service in IIIT Jhalwa, Prayagraj.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=header", "_blank")} className="button-gradient">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
                <Button
                    variant="outline"
                    className="glass"
                    onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B919236954406&text&type=phone_number&app_absent=0', "_blank")}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Services</h4>
              <ul className="space-y-2">
                {allServices.map((service) => (
                  <li key={service.id}>
                    <a
                      href="#"
                      onClick={(e) => handleLinkClick(e, `/services/${service.id}`)}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground/70">IIIT Jhalwa, Prayagraj</span>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send/?phone=%2B919236954406&text&type=phone_number&app_absent=0" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    WhatsApp Booking
                  </a>
                </li>
                <li>
                  <a href="tel:+919236954406" className="text-sm text-foreground/70 hover:text-primary transition-colors">Call: +91 92369 54406</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "/privacy-policy")} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "/terms-of-service")} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, "/refund-policy")} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-sm text-foreground/70 text-center">
              © {new Date().getFullYear()} Drybrite Laundry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
