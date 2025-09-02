import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        Choose Plan
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6 text-foreground"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Service Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-foreground/70"
        >
          Select the perfect laundry plan for your needs with transparent pricing
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Standard Service"
          price="₹50"
          description="Perfect for regular laundry needs with quality care"
          features={[
            "24-hour turnaround",
            "Washing & basic dry cleaning",
            "Standard ironing & folding",
            "Doorstep pickup & delivery",
            "WhatsApp booking support"
          ]}
        />
        <PricingTier
          name="FastTrack Service"
          price="₹80"
          description="Express service for urgent laundry requirements"
          features={[
            "12-hour express turnaround",
            "Premium washing & dry cleaning",
            "Professional pressing",
            "Priority pickup & delivery",
            "Stain treatment included",
            "Quality guarantee"
          ]}
          isPopular
        />
        <PricingTier
          name="Premium Care"
          price="₹150"
          description="Luxury care for designer wear and special fabrics"
          features={[
            "Same-day service available",
            "Luxury fabric specialist care",
            "Hand-washing for delicates",
            "Wedding wear cleaning",
            "Protective packaging",
            "Dedicated account manager",
            "Perfumed wash option"
          ]}
        />
      </div>
    </section>
  );
};