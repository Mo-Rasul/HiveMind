import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-white/60 backdrop-blur-md border-b border-black/[0.03]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2.5 group"
          data-testid="header-logo-link"
        >
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <Hexagon 
              className="w-7 h-7 text-hivemind-primary fill-hivemind-primary/10" 
              strokeWidth={2}
            />
          </motion.div>
          <span className="font-heading font-semibold text-xl text-hivemind-text tracking-tight">
            HiveMind
          </span>
        </Link>
      </div>
    </motion.header>
  );
}
