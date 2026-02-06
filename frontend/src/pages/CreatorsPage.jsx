import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, Eye, ShieldCheck, Rocket, Target, CheckCircle, XCircle } from "lucide-react";
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

        {/* Hero Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-center">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-hivemind-text mb-6">
              Grow Your Platform With
              <span className="block text-hivemind-primary mt-2">Authentic Brand Partnerships</span>
            </h1>
            <p className="text-hivemind-text-muted font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              HiveMind Marketing connects micro creators with early-stage brands looking for authentic content that feels real and earns trust. We incentivize you to produce quality content, connect naturally with your audience, and generate genuine reviews that build credibility beyond an ad.
            </p>
            <p className="mt-6">
              <span className="text-hivemind-primary font-semibold text-lg bg-orange-100 px-5 py-2.5 rounded-full inline-block border border-orange-200">
                Best of all, you get paid for what gets seen.
              </span>
            </p>
          </div>
        </motion.section>

        {/* Problem vs Solution Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-white rounded-2xl p-8 card-shadow border border-black/[0.03]">
              <h3 className="font-sans font-semibold text-xl text-hivemind-text mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-400" />
                The Problem With Typical Deals
              </h3>
              <ul className="space-y-3">
                {[
                  "One-time payments with no upside",
                  "Forced scripts that feel fake",
                  "No connection to performance",
                  "Brands that don't align with you",
                  "Content that doesn't feel authentic",
                  "No long-term relationships",
                  "Underpaid for your real value"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-hivemind-text-muted text-sm">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-hivemind-accent/30 rounded-2xl p-8 card-shadow border border-hivemind-primary/10">
              <h3 className="font-sans font-semibold text-xl text-hivemind-text mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-hivemind-primary" />
                The HiveMind Solution
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Pay for performance, not possibilities", desc: "Performance-based earnings so your pay scales when your content is actually seen." },
                  { title: "Built for Real Visibility", desc: "We align your incentives with viewer reach, ensuring your content is optimized to perform." },
                  { title: "Made by humans, for humans", desc: "Connect as peers with your audience, creating content that feels real and earns genuine engagement." },
                  { title: "Build up your platform, beyond posts", desc: "We help you build credibility through real partnerships and verified collaborations." }
                ].map((item, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-semibold text-hivemind-text">{item.title}</span>
                    <p className="text-hivemind-text-muted mt-1">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* How We Work Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-hivemind-text text-center mb-12">
            How We Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                step: "01",
                title: "Design & Match",
                description: "We understand your style and match you with brands that align with your values and audience."
              },
              {
                icon: Users,
                step: "02",
                title: "Content & Reviews",
                description: "Create authentic content your way and generate genuine reviews that your audience trusts."
              },
              {
                icon: Rocket,
                step: "03",
                title: "Learn & Scale",
                description: "We analyze performance and scale what works, ensuring you earn more as your content performs."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-7 card-shadow hover-lift border border-black/[0.03] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                data-testid={`how-we-work-${index}`}
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-hivemind-accent">{item.step}</span>
                <div className="w-11 h-11 bg-hivemind-accent rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-hivemind-primary" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-hivemind-text mb-2">
                  {item.title}
                </h3>
                <p className="text-hivemind-text-muted font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Who HiveMind Is For Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 card-shadow border border-black/[0.03]">
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-hivemind-text text-center mb-4">
              Who HiveMind Is For
            </h2>
            <p className="text-hivemind-text-muted text-center mb-8 max-w-xl mx-auto">
              HiveMind is built for micro creators who want to grow intentionally with authentic partnerships.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Rocket, text: "Creators ready to monetize" },
                { icon: TrendingUp, text: "Growing audiences authentically" },
                { icon: ShieldCheck, text: "Creators who value real partnerships" },
                { icon: Eye, text: "& so many more creators" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-hivemind-accent/30 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-hivemind-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-hivemind-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-hivemind-text mb-4">
            Let's Talk
          </h2>
          <p className="text-hivemind-text-muted font-sans text-base md:text-lg leading-relaxed mb-2">
            Ready to grow your platform with authentic brand partnerships? Fill out the form below and we'll be in touch to explore next steps.
          </p>
          <p className="text-hivemind-text-muted/60 font-sans text-sm">
            HiveMind.Marketing@outlook.com • 614-572-9705 • New York City
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
