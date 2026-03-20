import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work across a wide range of industries including FinTech, Healthcare, E-commerce, and SaaS. Our team is adaptable and experienced in handling complex requirements regardless of the sector."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines after our initial consultation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various maintenance and support packages to ensure your application stays up-to-date, secure, and performant as your business grows."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Absolutely. We often help clients optimize, scale, or add new features to their existing applications. We'll start with a thorough audit of your current codebase."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price project quotes and time-and-materials arrangements. We'll work with you to find the model that best fits your budget and project needs."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group transition-all"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-400' : 'text-white group-hover:text-indigo-300'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Common <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our process, technology, and how we help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-3xl border-indigo-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all" />
            <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              We're here to help. Send us a message and our team will get back to you within 24 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all group/btn"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
