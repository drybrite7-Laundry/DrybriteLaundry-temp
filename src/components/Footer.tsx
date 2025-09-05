import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "./ui/button";
const Footer = () => {
  return <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg text-foreground">Drybrite Laundry</h3>
              <p className="text-sm text-foreground/70">
                Premium doorstep laundry and dry cleaning service in IIIT Jhalwa, Prayagraj.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMPi0v34Bt5_rMaSi-ULBxglVdVpPAXLZzpb5n_dE4r4O-_g/viewform?usp=dialog", "_blank")} className="button-gradient">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
                <Button variant="outline" className="glass">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Washing & Dry Cleaning
                  </a>
                </li>
                <li>
                  
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Household Items
                  </a>
                </li>
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
                  <a href="https://api.whatsapp.com/send/?phone=%2B917487864406&text&type=phone_number&app_absent=0" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    WhatsApp Booking
                  </a>
                </li>
                <li>
                  <a href="tel:+917487864406" className="text-sm text-foreground/70 hover:text-primary transition-colors">Call: +91 74878 64406</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/refund-policy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
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
    </footer>;
};
export default Footer;
