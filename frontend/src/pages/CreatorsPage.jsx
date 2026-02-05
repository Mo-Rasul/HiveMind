import { motion } from "framer-motion";
import { ArrowLeft, DollarSign, Users, Sparkles, TrendingUp, Heart, Camera, CheckCircle, Gift } from "lucide-react";
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
              Turn Your Content Into
              <span className="block text-hivemind-primary mt-2">Real Partnerships</span>
            </h1>
            <p className="text-hivemind-text-muted font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              HiveMind connects micro creators with early-stage brands looking for authentic content that feels real and earns trust. Get paid to create content you love, build genuine connections with your audience, and help brands grow—all while growing your own platform.
            </p>
            <p className="text-hivemind-primary font-semibold mt-4 text-lg">
              Create authentically. Get rewarded for performance.
            </p>
          </div>
        </motion.section>

        {/* Why Join HiveMind Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-hivemind-text text-center mb-12">
            Why Creators Love HiveMind
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Performance-Based Pay",
                description: "Earn based on how your content performs. The more views you get, the more you earn."
              },
              {
                icon: Heart,
                title: "Stay Authentic",
                description: "Create content that feels real to you and your audience. No scripts, no fake vibes."
              },
              {
                icon: Gift,
                title: "Free Products",
                description: "Receive products from early-stage brands to review and feature in your content."
              },
              {
                icon: TrendingUp,
                title: "Grow Together",
                description: "Build your platform while helping brands grow. Win-win partnerships that last."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-6 card-shadow hover-lift border border-black/[0.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                data-testid={`benefit-card-${index}`}
              >
                <div className="w-11 h-11 bg-hivemind-accent rounded-xl flex items-center justify-center mb-4">
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

        {/* How It Works Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sans font-semibold text-2xl md:text-3xl text-hivemind-text text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                step: "01",
                title: "Apply & Match",
                description: "Tell us about yourself and your content. We'll match you with brands that align with your style and audience."
              },
              {
                icon: Camera,
                step: "02",
                title: "Create & Share",
                description: "Receive products, create authentic content your way, and share genuine reviews with your audience."
              },
              {
                icon: DollarSign,
                step: "03",
                title: "Earn & Grow",
                description: "Get paid based on your content's performance. The better it performs, the more opportunities you unlock."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl p-7 card-shadow hover-lift border border-black/[0.03] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                data-testid={`how-it-works-${index}`}
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

        {/* What We Look For Section */}
        <motion.section
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-hivemind-accent/30 rounded-2xl p-8 md:p-10 card-shadow border border-hivemind-primary/10">
            <h2 className="font-sans font-semibold text-2xl md:text-3xl text-hivemind-text text-center mb-4">
              Who We're Looking For
            </h2>
            <p className="text-hivemind-text-muted text-center mb-8 max-w-xl mx-auto">
              HiveMind is built for micro creators who value authenticity over follower counts.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Creators who keep it real with their audience",
                "Content makers who love trying new products",
                "Reviewers who give honest, genuine feedback",
                "Micro influencers ready to grow with brands",
                "Anyone passionate about authentic content",
                "Creators looking for fair, performance-based pay"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/60 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-hivemind-primary flex-shrink-0" />
                  <span className="text-sm text-hivemind-text">{item}</span>
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
            Ready to Join?
          </h2>
          <p className="text-hivemind-text-muted font-sans text-base md:text-lg leading-relaxed mb-2">
            Apply to become a HiveMind creator. We review every application and reach out if there's a great fit for upcoming brand campaigns.
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
