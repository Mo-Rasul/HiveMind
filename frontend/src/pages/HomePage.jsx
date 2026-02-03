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
      data-testid="home-page"
    >
      <Header />
      
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-8">
        {/* Hero Content */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl text-hivemind-text mb-6">
            Where Brands Meet
            <span className="block text-hivemind-primary mt-2">
              Creative Minds
            </span>
          </h1>
          <p className="text-base md:text-lg text-hivemind-text-muted font-body max-w-2xl mx-auto leading-relaxed">
            HiveMind connects forward-thinking brands with talented creators to build 
            authentic partnerships that drive results. Whether you're a brand looking 
            to expand your reach or a creator ready to collaborate, we're here to help.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* For Brands Button */}
          <Link to="/brands" className="flex-1" data-testid="brands-cta-link">
            <Button
              className="w-full bg-hivemind-primary hover:bg-hivemind-primary-hover text-white font-body font-medium px-8 py-7 rounded-full btn-shine transition-all duration-300 hover:scale-105 shadow-lg shadow-hivemind-primary/20 group"
              data-testid="brands-cta-button"
            >
              <Building2 className="w-5 h-5 mr-3" />
              <span className="text-lg">For Brands</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* For Creators Button */}
          <Link to="/creators" className="flex-1" data-testid="creators-cta-link">
            <Button
              className="w-full bg-white hover:bg-hivemind-accent text-hivemind-text border-2 border-hivemind-primary font-body font-medium px-8 py-7 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-hivemind-primary/10 group"
              data-testid="creators-cta-button"
            >
              <User className="w-5 h-5 mr-3 text-hivemind-primary" />
              <span className="text-lg">For Creators</span>
              <ArrowRight className="w-5 h-5 ml-3 text-hivemind-primary group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Logo Carousel */}
        <LogoCarousel />
      </main>
    </motion.div>
  );
}
