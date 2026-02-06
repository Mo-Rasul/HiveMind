import { motion } from "framer-motion";

export default function FormSection({ type }) {
  const isBrand = type === "brand";
  const title = isBrand ? "Brand Inquiry Form" : "Creator Application Form";
  const formUrl = isBrand 
    ? "FORMLINKHERE" 
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
        
        {isBrand ? (
          /* Brand Form Placeholder */
          <div 
            className="bg-gradient-to-b from-hivemind-accent/60 to-hivemind-accent/30 rounded-2xl p-10 md:p-14 text-center border border-hivemind-primary/10"
            data-testid="form-placeholder"
          >
            <p className="text-hivemind-text-muted font-sans mb-4">
              Microsoft Forms Embed Area
            </p>
            <p className="text-sm text-hivemind-text-muted/60 font-mono bg-white/70 px-4 py-2 rounded-lg inline-block border border-black/5">
              FORMLINKHERE
            </p>
          </div>
        ) : (
          /* Creator Form - Actual Microsoft Forms Embed */
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
              title="Creator Application Form"
              style={{ background: 'transparent' }}
            >
              Loading…
            </iframe>
          </div>
        )}
      </div>
    </motion.div>
  );
}
