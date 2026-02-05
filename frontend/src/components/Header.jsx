import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/60 backdrop-blur-md border-b border-black/[0.03]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center group"
          data-testid="header-logo-link"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_cfd3b388-8525-43a9-a267-05d2b8399082/artifacts/7lix96zf_Post%20ad%20on%20facebook%20%2817%29.png"
            alt="HiveMind Marketing"
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </motion.header>
  );
}
