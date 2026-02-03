import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 group"
          data-testid="header-logo-link"
        >
          <motion.div
            whileHover={{ rotate: 30 }}
            transition={{ duration: 0.3 }}
          >
            <Hexagon 
              className="w-8 h-8 text-hivemind-primary fill-hivemind-primary/20" 
              strokeWidth={2}
            />
          </motion.div>
          <span className="font-heading text-2xl text-hivemind-text">
            HiveMind
          </span>
        </Link>
      </div>
    </motion.header>
  );
}
