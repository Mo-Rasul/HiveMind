import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, DollarSign, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import FormSection from "../components/FormSection";
import { Button } from "../components/ui/button";

export default function CreatorsPage() {
  return (
    <motion.div
      className="min-h-screen page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      data-testid="creators-page"
    >
      <Header />
      
      <main className="pt-28 pb-20 px-6">
        {/* Back Button */}
        <motion.div
          className="max-w-5xl mx-auto mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link to="/" data-testid="back-to-home-link">
            <Button 
              variant="ghost" 
              className="text-hivemind-text-muted hover:text-hivemind-text hover:bg-black/5 rounded-full px-4"
              data-testid="back-button"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden card-shadow">
            <img
              src="https://images.unsplash.com/photo-1694173966355-6a8048f91769?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Content creator filming with ring light"
              className="w-full h-64 md:h-80 lg:h-[400px] object-cover"
              data-testid="creators-hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h1 className="hero-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
                Join Our Creator Network
              </h1>
              <p className="text-white/85 font-body text-base md:text-lg max-w-xl">
                Connect with top brands and turn your creative passion into meaningful partnerships.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-hivemind-text text-center mb-12">
            Why Join HiveMind?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Handshake,
                title: "Premium Brand Partnerships",
                description: "We connect you with brands that align with your values and audience for authentic collaborations."
              },
              {
                icon: DollarSign,
                title: "Fair Compensation",
                description: "We negotiate competitive rates and ensure you're paid fairly for your creative work."
              },
              {
                icon: Sparkles,
                title: "Creative Freedom",
                description: "Maintain your unique voice while creating content that resonates with both brands and your audience."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-2xl p-7 card-shadow hover-lift border border-black/[0.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                data-testid={`benefit-card-${index}`}
              >
                <div className="w-11 h-11 bg-hivemind-accent rounded-xl flex items-center justify-center mb-5">
                  <benefit.icon className="w-5 h-5 text-hivemind-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-hivemind-text mb-2">
                  {benefit.title}
                </h3>
                <p className="text-hivemind-text-muted font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Next Steps Section */}
        <motion.section
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-hivemind-text mb-4">
            Ready to Apply?
          </h2>
          <p className="text-hivemind-text-muted font-body text-base md:text-lg leading-relaxed">
            Tell us about yourself and your content. We review every application 
            and will reach out if there's a good fit for upcoming brand campaigns.
          </p>
          <p className="text-hivemind-text-muted/60 font-body text-sm mt-2">
            We'll be in touch if your profile matches our brand partners' needs
          </p>
        </motion.section>

        {/* Form Section */}
        <section data-testid="creators-form-section">
          <FormSection type="creator" />
        </section>
      </main>
    </motion.div>
  );
}
