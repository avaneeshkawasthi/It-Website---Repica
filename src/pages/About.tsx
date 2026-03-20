import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award, Shield, Globe, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '250+' },
    { label: 'Global Clients', value: '50+' },
    { label: 'Expert Team', value: '30+' },
  ];

  const values = [
    { 
      icon: <Award className="w-6 h-6 text-indigo-400" />, 
      title: "High-Rated Excellence", 
      desc: "Consistently recognized as a top-tier IT solution provider by our global partners." 
    },
    { 
      icon: <Users className="w-6 h-6 text-indigo-400" />, 
      title: "Expert Engineering", 
      desc: "Our team consists of industry veterans and creative problem solvers dedicated to your success." 
    },
    { 
      icon: <Globe className="w-6 h-6 text-indigo-400" />, 
      title: "Global Perspective", 
      desc: "Delivering world-class IT solutions that transcend borders and scale with your growth." 
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
              Engineering the <span className="text-gradient">Future</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              InsideTech Softwares is a global technology powerhouse. We blend cutting-edge engineering with human-centric design to build products that define industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">
                Beyond Code: We Build <br />Digital Legacies
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                Founded on the principle of relentless innovation, InsideTech Softwares has evolved from a boutique development studio into a comprehensive technology partner for enterprise leaders.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We don't just deliver software; we architect solutions that solve complex business challenges. Our approach is rooted in transparency, agility, and a deep understanding of emerging technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="font-bold text-white">Rapid Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="font-bold text-white">Bank-Grade Security</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <img 
                  src="https://picsum.photos/seed/tech-team/800/800" 
                  alt="Our Team" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl border-indigo-500/30">
                <div className="text-5xl font-display font-bold text-indigo-400 mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-300">Years of Innovation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Our Core Values</h2>
            <h3 className="text-4xl font-display font-bold text-white">What Defines Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group hover:border-indigo-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
