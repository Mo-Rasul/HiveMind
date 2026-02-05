import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Star, Pentagon, Octagon, Diamond, Heart, Zap, Shield } from "lucide-react";

const logos = [
  { Icon: Hexagon, name: "Brand Alpha" },
  { Icon: Triangle, name: "Brand Beta" },
  { Icon: Circle, name: "Brand Gamma" },
  { Icon: Square, name: "Brand Delta" },
  { Icon: Star, name: "Brand Epsilon" },
  { Icon: Pentagon, name: "Brand Zeta" },
  { Icon: Octagon, name: "Brand Eta" },
  { Icon: Diamond, name: "Brand Theta" },
  { Icon: Heart, name: "Brand Iota" },
  { Icon: Zap, name: "Brand Kappa" },
  { Icon: Shield, name: "Brand Lambda" },
];

export default function LogoCarousel() {
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <motion.div 
      className="w-full overflow-hidden py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <p className="text-center text-hivemind-text-muted font-body text-sm mb-10 tracking-wide">
        Trusted by leading brands
      </p>
      
      <div className="marquee-container relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/90 to-transparent z-10" />
        
        <div 
          className="flex animate-marquee"
          data-testid="logo-carousel"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex flex-col items-center gap-3 logo-placeholder cursor-pointer"
              data-testid={`logo-item-${index}`}
            >
              <logo.Icon 
                className="w-14 h-14 md:w-16 md:h-16 text-hivemind-text-muted/40" 
                strokeWidth={1.2}
              />
              <span className="text-sm text-hivemind-text-muted/50 font-body font-medium">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
