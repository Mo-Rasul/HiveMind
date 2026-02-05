import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, User, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import LogoCarousel from "../components/LogoCarousel";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      data-testid="home-page">

      <Header />
      
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-8">
        {/* Coming Soon Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}>

          <span className="inline-block border border-hivemind-primary/10 font-sans font-semibold text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-hivemind-primary bg-hivemind-accent/80">Creator marketing without guesswork

          </span>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}>

          <h1 className="hero-heading font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-hivemind-text">
            Where Brands Meet
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 text-hivemind-primary">Grow Together

            </span>
          </h1>
          <p className="font-sans font-normal text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto text-hivemind-text-muted leading-relaxed">HiveMind helps early-stage brands earn visibility through authentic creator content with performance-based pricing.


          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mt-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>

          {/* For Brands Button */}
          <Link to="/brands" className="flex-1" data-testid="brands-cta-link">
            <Button
              className="w-full bg-hivemind-primary hover:bg-hivemind-primary-hover text-white font-body font-medium px-6 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md group"
              data-testid="brands-cta-button">

              <Building2 className="w-4 h-4 mr-2" />
              <span className="font-sans text-sm sm:text-base">For Brands</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>

          {/* For Creators Button */}
          <Link to="/creators" className="flex-1" data-testid="creators-cta-link">
            <Button
              variant="outline"
              className="w-full bg-white hover:bg-hivemind-accent/50 text-hivemind-text border border-black/10 font-body font-medium px-6 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] group"
              data-testid="creators-cta-button">

              <User className="w-4 h-4 mr-2 text-hivemind-text-muted" />
              <span className="font-normal text-sm sm:text-base">For Creators</span>
              <ArrowRight className="w-4 h-4 ml-2 text-hivemind-text-muted group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Logo Carousel */}
        <LogoCarousel />
      </main>
    </motion.div>);

}