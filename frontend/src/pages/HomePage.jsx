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
      <main className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-8">
        {/* Coming Soon Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-hivemind-primary bg-hivemind-accent/80 rounded-full border border-hivemind-primary/10">
            Connecting brands & creators
          </span>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl text-hivemind-text mb-6">
            Where Brands Meet
            <span className="block text-hivemind-primary mt-1">
              Creative Minds
            </span>
          </h1>
          <p className="text-base md:text-lg text-hivemind-text-muted font-body max-w-xl mx-auto leading-relaxed">
            HiveMind connects forward-thinking brands with talented creators to build 
            authentic partnerships that drive results.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mt-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* For Brands Button */}
          <Link to="/brands" className="flex-1" data-testid="brands-cta-link">
            <Button
              className="w-full bg-hivemind-primary hover:bg-hivemind-primary-hover text-white font-body font-medium px-6 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md group"
              data-testid="brands-cta-button"
            >
              <Building2 className="w-4 h-4 mr-2" />
              <span>For Brands</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>

          {/* For Creators Button */}
          <Link to="/creators" className="flex-1" data-testid="creators-cta-link">
            <Button
              variant="outline"
              className="w-full bg-white hover:bg-hivemind-accent/50 text-hivemind-text border border-black/10 font-body font-medium px-6 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] group"
              data-testid="creators-cta-button"
            >
              <User className="w-4 h-4 mr-2 text-hivemind-text-muted" />
              <span>For Creators</span>
              <ArrowRight className="w-4 h-4 ml-2 text-hivemind-text-muted group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Logo Carousel */}
        <LogoCarousel />
      </main>
    </motion.div>
  );
}
