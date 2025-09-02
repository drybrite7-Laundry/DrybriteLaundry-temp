import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
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
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Washing & Dry Cleaning
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Express Service
                  </a>
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
                  <a href="https://wa.me/+919876543210" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    WhatsApp Booking
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Call: +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
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