import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "./ui/button";

export default function FormSection({ type }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isBrand = type === "brand";
  const title = isBrand ? "Brand Inquiry Form" : "Creator Application Form";
  const successMessage = isBrand 
    ? "Thank you for your interest! Our team will review your inquiry and reach out to schedule a call within 2-3 business days."
    : "Thank you for applying! Our team will review your profile and reach out if there's a fit. We appreciate your interest in partnering with HiveMind.";

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="form-container p-6 md:p-8">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-heading text-xl md:text-2xl text-hivemind-text mb-4">
                {title}
              </h3>
              
              {/* Form Placeholder - Replace with actual Microsoft Forms embed */}
              <div 
                className="bg-hivemind-accent/50 rounded-xl p-8 md:p-12 text-center border-2 border-dashed border-hivemind-primary/30"
                data-testid="form-placeholder"
              >
                <p className="text-hivemind-text-muted font-body mb-4">
                  Microsoft Forms Embed Area
                </p>
                <p className="text-sm text-hivemind-text-muted/70 font-mono bg-white/50 px-4 py-2 rounded-lg inline-block">
                  FORMLINKHERE
                </p>
                
                {/* Demo Submit Button */}
                <div className="mt-8">
                  <Button
                    onClick={handleSubmit}
                    className="bg-hivemind-primary hover:bg-hivemind-primary-hover text-white font-body font-medium px-8 py-6 rounded-full btn-shine transition-all duration-300 hover:scale-105"
                    data-testid="form-submit-button"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit {isBrand ? "Inquiry" : "Application"}
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
              data-testid="form-success-message"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="font-heading text-2xl text-hivemind-text mb-4">
                Submission Received!
              </h3>
              <p className="text-hivemind-text-muted font-body max-w-md mx-auto">
                {successMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
