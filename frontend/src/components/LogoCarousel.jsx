import { motion } from "framer-motion";

// Replace these placeholder URLs with your actual brand logo images
const logos = [
  { name: "Brand 1", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+1" },
  { name: "Brand 2", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+2" },
  { name: "Brand 3", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+3" },
  { name: "Brand 4", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+4" },
  { name: "Brand 5", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+5" },
  { name: "Brand 6", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+6" },
  { name: "Brand 7", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+7" },
  { name: "Brand 8", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+8" },
  { name: "Brand 9", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+9" },
  { name: "Brand 10", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+10" },
  { name: "Brand 11", image: "https://via.placeholder.com/120x60/f5f5f5/999999?text=Brand+11" },
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
      <p className="font-body text-xs sm:text-sm text-center mb-8 text-hivemind-text-muted tracking-wide">
        Trusted by growing brands
      </p>
      
      <div className="marquee-container relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent to-transparent z-10" />
        
        <div 
          className="flex animate-marquee"
          data-testid="logo-carousel"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center logo-placeholder"
              data-testid={`logo-item-${index}`}
            >
              <img 
                src={logo.image}
                alt={logo.name}
                className="h-10 md:h-14 w-auto object-contain grayscale"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
