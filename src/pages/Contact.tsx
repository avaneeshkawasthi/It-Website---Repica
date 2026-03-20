import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      title: "Email Us",
      value: "hello@insidetechsoft.com",
      desc: "Our support team will get back to you within 24 hours."
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-400" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      desc: "Mon-Fri from 9am to 6pm EST."
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-400" />,
      title: "Visit Us",
      value: "123 Innovation Drive, Tech Valley, CA 94043",
      desc: "Come say hello at our headquarters."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a visionary project in mind? We're ready to help you architect and build your next digital breakthrough.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{info.title}</h3>
                        <p className="text-indigo-400 font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-slate-500">{info.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <h3 className="text-white font-bold mb-6">Follow Our Journey</h3>
                  <div className="flex gap-4">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((platform) => (
                      <a 
                        key={platform} 
                        href="#" 
                        className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl border-indigo-500/20 bg-indigo-600/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold">Live Chat Support</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  Need immediate assistance? Our technical support team is available 24/7 for active enterprise clients.
                </p>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10">
                  Start Live Chat
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400 ml-1">First Name</label>
                          <input
                            required
                            type="text"
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400 ml-1">Last Name</label>
                          <input
                            required
                            type="text"
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Project Type</label>
                        <select className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all appearance-none">
                          <option className="bg-slate-900">Custom Software</option>
                          <option className="bg-slate-900">Mobile Application</option>
                          <option className="bg-slate-900">Cloud Infrastructure</option>
                          <option className="bg-slate-900">Cyber Security</option>
                          <option className="bg-slate-900">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Tell us about your vision..."
                        />
                      </div>
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-indigo-600/20 group"
                      >
                        {isLoading ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-20 relative z-10"
                    >
                      <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-white mb-4">Message Received!</h2>
                      <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Our engineering team has received your inquiry and will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2 mx-auto group"
                      >
                        Send another message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
