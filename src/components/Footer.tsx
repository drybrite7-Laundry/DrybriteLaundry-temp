import {
  Phone,
  MessageCircle,
  MapPin,
  WashingMachine,
  PackageOpen,
  Star,
  Home,
  Shirt,
} from "lucide-react";
import { Link } from "react-router-dom";

// Reusable Button component
const Button = ({ onClick, children, className, variant = "solid" }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50 disabled:pointer-events-none h-10 px-5 text-sm";

  const variantClasses = {
    solid:
      "bg-white text-green-700 hover:bg-gray-100 shadow-md hover:shadow-lg",
    outline:
      "border border-white text-white hover:bg-white hover:text-green-700",
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

// Services list
const allServices = [
  { title: "Washing Services", icon: <WashingMachine className="w-10 h-10" /> },
  { title: "Dry Cleaning Services", icon: <PackageOpen className="w-10 h-10" /> },
  { title: "Ironing / Pressing Services", icon: <Shirt className="w-10 h-10" /> },
  { title: "Household & Home Care", icon: <Home className="w-10 h-10" /> },
  { title: "Premium & Special Care", icon: <Star className="w-10 h-10" /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-10 mt-10">
      <div className="container px-4">
        <div className="rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand + CTA */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Drybrite Laundry</h3>
              <p className="text-sm opacity-90">
                Premium doorstep laundry and dry cleaning service in IIIT
                Jhalwa, Prayagraj.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=header",
                      "_blank"
                    )
                  }
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=%2B919236954406&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                {allServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/pricing"
                      className="text-sm opacity-90 hover:opacity-100 transition"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-medium">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm opacity-90">
                    IIIT Jhalwa, Prayagraj
                  </span>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B919236954406&text&type=phone_number&app_absent=0"
                    className="text-sm opacity-90 hover:opacity-100 transition"
                  >
                    WhatsApp Booking
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919236954406"
                    className="text-sm opacity-90 hover:opacity-100 transition"
                  >
                    Call: +91 92369 54406
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-sm opacity-90 hover:opacity-100 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-sm opacity-90 hover:opacity-100 transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-sm opacity-90 hover:opacity-100 transition"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Drybrite Laundry. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
