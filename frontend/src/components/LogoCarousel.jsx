import { motion } from "framer-motion";

// Brand logo images - circular display
const logos = [
  { name: "Brand 1", image: "https://customer-assets.emergentagent.com/job_cfd3b388-8525-43a9-a267-05d2b8399082/artifacts/em5xbacl_Screenshot%202026-02-04%20224712.png" },
  { name: "HAE SKN", image: "https://customer-assets.emergentagent.com/job_cfd3b388-8525-43a9-a267-05d2b8399082/artifacts/kug9uuy2_Screenshot%202026-02-04%20234102.png" },
  { name: "Mmoire", image: "https://customer-assets.emergentagent.com/job_cfd3b388-8525-43a9-a267-05d2b8399082/artifacts/nbxxjr4v_Screenshot%202026-02-04%20235048.png" },
  { name: "SOBO", image: "https://customer-assets.emergentagent.com/job_cfd3b388-8525-43a9-a267-05d2b8399082/artifacts/5bpa019v_SOBO.png" },
  { name: "Flora Flora", image: "https://customer-assets.emergentagent.com/job_cfd3b388-8525-43a9-a267-05d2b8399082/artifacts/8jfn2l2f_flora%20flora.jpg" },
];

export default function LogoCarousel() {
  // Triple the logos for smoother infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

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
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full shadow-md"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
