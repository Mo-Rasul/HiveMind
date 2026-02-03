import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Star, Pentagon, Octagon, Diamond } from "lucide-react";

const logos = [
  { Icon: Hexagon, name: "Brand Alpha" },
  { Icon: Triangle, name: "Brand Beta" },
  { Icon: Circle, name: "Brand Gamma" },
  { Icon: Square, name: "Brand Delta" },
  { Icon: Star, name: "Brand Epsilon" },
  { Icon: Pentagon, name: "Brand Zeta" },
  { Icon: Octagon, name: "Brand Eta" },
  { Icon: Diamond, name: "Brand Theta" },
];

export default function LogoCarousel() {
  // Double the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <motion.div 
      className="w-full overflow-hidden py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <p className="text-center text-hivemind-text-muted font-body text-sm mb-6 uppercase tracking-wider">
        Trusted by leading brands
      </p>
      
      <div className="marquee-container relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-hivemind-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-hivemind-background to-transparent z-10" />
        
        <div 
          className="flex animate-marquee"
          data-testid="logo-carousel"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex flex-col items-center gap-2 logo-placeholder cursor-pointer"
              data-testid={`logo-item-${index}`}
            >
              <logo.Icon 
                className="w-10 h-10 md:w-12 md:h-12 text-hivemind-text-muted" 
                strokeWidth={1.5}
              />
              <span className="text-xs text-hivemind-text-muted font-body">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
