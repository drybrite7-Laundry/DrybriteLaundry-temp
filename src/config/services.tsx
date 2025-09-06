import { 
  Shirt, 
  Sparkles, 
  Scale, 
  Wind, 
  Footprints, 
  Package, 
  Sofa, 
  Square, 
  Waves 
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

export const services: Service[] = [
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    subtitle: "Gentle garment care that preserves quality.",
    description: "Drybrite's dry cleaning service uses advanced cleaning methods that remove dirt and stains without damaging delicate fabrics. It helps preserve the natural shape, texture, and color of garments, leaving them crisp, fresh, and long-lasting.",
    icon: <Shirt className="w-6 h-6" />,
    image: "/images/drycleaning.png"
  },
  {
    id: "premium-laundry",
    title: "Premium Laundry",
    subtitle: "A superior wash for your clothes.",
    description: "Designed for customers who want extra care, Drybrite's premium laundry provides a high-quality washing experience with premium detergents and finishing. Clothes are handled with special attention to detail, ensuring freshness, softness, and durability after every wash.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "/images/premiumlaundry.png"
  },
  {
    id: "laundry-by-kg",
    title: "Laundry by KG",
    subtitle: "Affordable, bulk cleaning priced per kilogram.",
    description: "This service makes everyday laundry simple and cost-effective. Clothes are sorted, washed in batches using top-grade detergents, and delivered clean and hygienic. The pricing is done per kilogram, making it ideal for families or individuals with large loads.",
    icon: <Scale className="w-6 h-6" />,
    image: "/images/laundrybyKG.png"
  },
  {
    id: "steam-ironing",
    title: "Steam Ironing",
    subtitle: "Perfectly pressed garments, hassle-free.",
    description: "Drybrite offers professional steam ironing to keep clothes wrinkle-free and sharp. With high-temperature steam technology, garments are sanitized and neatly finished. The service is designed for convenience, with doorstep pickup and delivery included.",
    icon: <Wind className="w-6 h-6" />,
    image: "/images/Iron.png"
  },
  {
    id: "shoe-cleaning",
    title: "Shoe Cleaning",
    subtitle: "Restore shine and freshness to your footwear.",
    description: "Drybrite's shoe cleaning service revives shoes of all types—from casual sneakers to leather formals. Using specialized cleaning methods, shoes are deodorized, scrubbed, and conditioned, extending their life while ensuring they look as good as new.",
    icon: <Footprints className="w-6 h-6" />,
    image: "/images/shoe.png"
  },
  {
    id: "bag-cleaning",
    title: "Bag Cleaning",
    subtitle: "Deep cleaning for your everyday essentials.",
    description: "This service refreshes handbags, backpacks, and luggage by removing stains, odors, and dirt. Drybrite's professional methods help restore the bag's appearance while maintaining its original texture and finish.",
    icon: <Package className="w-6 h-6" />,
    image: "/images/bag-cleaning.png"
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    subtitle: "Bring back the comfort and freshness of your sofa.",
    description: "Drybrite's sofa cleaning service removes dust, allergens, and stains from upholstery using deep-cleaning techniques. It not only improves the look of the furniture but also ensures a healthier, more hygienic living space.",
    icon: <Sofa className="w-6 h-6" />,
    image: "/images/sofa-claning.png"
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    subtitle: "Deep care for carpets and rugs.",
    description: "With specialized equipment and detergents, Drybrite provides thorough carpet cleaning to eliminate dust, dirt, and tough stains. The process enhances the carpet's life, restores softness, and improves indoor air quality.",
    icon: <Square className="w-6 h-6" />,
    image: "/images/carpet-cleaning.png"
  },
  {
    id: "curtain-cleaning",
    title: "Curtain Cleaning",
    subtitle: "Fresh, dust-free drapes for a healthier home.",
    description: "Drybrite's curtain cleaning service takes care of heavy or delicate fabrics by removing accumulated dust, allergens, and stains. Curtains are carefully cleaned and pressed, ensuring they look vibrant while maintaining their original fabric quality.",
    icon: <Waves className="w-6 h-6" />,
    image: "/images/curtain-cleaning.png"
  }
];
