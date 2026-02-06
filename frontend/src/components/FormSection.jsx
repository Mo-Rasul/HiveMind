import { motion } from "framer-motion";

export default function FormSection({ type }) {
  const isBrand = type === "brand";
  const title = isBrand ? "Brand Inquiry Form" : "Creator Application Form";
  const formUrl = isBrand 
    ? "https://forms.office.com/r/L7MyNd91kQ" 
    : "https://forms.office.com/r/CckqBV7MYj";

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="form-container p-6 md:p-8">
        <h3 className="font-sans font-semibold text-xl md:text-2xl text-hivemind-text mb-6 text-center">
          {title}
        </h3>
        
        {/* Microsoft Forms Embed */}
        <div 
          className="rounded-2xl overflow-hidden border border-hivemind-primary/10"
          data-testid="form-embed"
        >
          <iframe
            src={formUrl}
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title={title}
            style={{ background: 'transparent' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </motion.div>
  );
}
