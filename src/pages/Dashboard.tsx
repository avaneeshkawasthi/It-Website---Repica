import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Star,
  CheckCircle2,
  Settings,
  HelpCircle,
  Users,
  Award,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#020617]">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium text-indigo-300 mb-10 border-indigo-500/20"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Next-Gen Software Engineering
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tight leading-[0.9] lg:px-20"
          >
            <span className="text-gradient">Architecting</span> <br />
            <span className="text-white">Digital</span> <span className="text-indigo-500 italic">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-400 mb-14 leading-relaxed font-light"
          >
            We build high-performance, scalable software solutions that empower 
            global enterprises to lead in the digital era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all flex items-center gap-3 group shadow-2xl shadow-indigo-500/40 text-lg"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-5 glass-card hover:bg-white/10 text-white rounded-2xl font-bold transition-all text-lg border-white/20"
            >
              Our Solutions
            </Link>
          </motion.div>
          
          {/* Hero Image/Graphic Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full" />
            <div className="glass-card rounded-[2.5rem] p-4 border-white/20 shadow-2xl overflow-hidden aspect-video flex items-center justify-center bg-slate-900/50">
              <div className="grid grid-cols-3 gap-8 w-full px-12">
                {[Zap, Shield, Cloud].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Icon className="w-10 h-10 text-indigo-400" />
                    </div>
                    <div className="h-2 w-24 bg-indigo-500/20 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full w-1/2 bg-indigo-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services - Bento Grid */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">Core Expertise</h2>
              <p className="text-slate-400 text-xl max-w-xl font-light">We combine technical precision with strategic vision to build products that define markets.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="group px-6 py-3 glass-card rounded-full text-indigo-400 hover:text-white hover:bg-indigo-600 transition-all flex items-center gap-2 font-semibold">
                View all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="md:col-span-4 glass-card p-10 rounded-[3rem] relative overflow-hidden group border-white/10"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code2 className="w-64 h-64" />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20">
                  <Code2 className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Custom Software Development</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-xl font-light leading-relaxed">
                  Tailored solutions designed to solve your unique business challenges. We build robust, 
                  secure, and scalable applications using the latest tech stack.
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  {['React', 'Node.js', 'Python', 'AWS', 'Kubernetes', 'TensorFlow'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-semibold text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass-card p-10 rounded-[3rem] border-white/10 flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                <Cloud className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Cloud Infrastructure</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Reliable, high-performance cloud architecture that grows with your business needs.
              </p>
              <div className="mt-auto pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                      {i === 4 ? '+12' : `S${i}`}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass-card p-10 rounded-[3rem] border-white/10"
            >
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20">
                <Smartphone className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Mobile Apps</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Native and cross-platform mobile experiences that engage users and drive growth.
              </p>
            </motion.div>

            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="md:col-span-4 glass-card p-10 rounded-[3rem] relative overflow-hidden group border-white/10"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20">
                  <Shield className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Enterprise Security</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-xl font-light leading-relaxed">
                  Protecting your digital assets with advanced security protocols, continuous monitoring, and zero-trust architecture.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: 'Threat Detection' },
                    { icon: Zap, text: 'Real-time Response' },
                    { icon: Globe, text: 'Global Compliance' },
                    { icon: BarChart3, text: 'Security Audits' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-400">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { label: 'Projects Delivered', value: '250+', icon: Award },
              { label: 'Global Clients', value: '180+', icon: Users },
              { label: 'Countries', value: '15+', icon: Globe },
              { label: 'Years of Innovation', value: '10+', icon: Zap },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 mb-6 border border-indigo-500/10">
                  <stat.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight"
            >
              Trusted by <span className="text-indigo-500">Industry Leaders</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-xl max-w-2xl mx-auto font-light"
            >
              We've partnered with ambitious companies to build the future of their industries.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO at TechFlow",
                content: "InsideTech transformed our legacy systems into a modern, cloud-native architecture. Their expertise is unmatched in the industry.",
                rating: 5,
                color: "indigo"
              },
              {
                name: "Michael Chen",
                role: "Founder of Nexus AI",
                content: "The custom software they built for us has increased our operational efficiency by 40%. They are a true strategic partner.",
                rating: 5,
                color: "blue"
              },
              {
                name: "Emma Williams",
                role: "Director at Global Logistics",
                content: "Professional, responsive, and technically brilliant. They delivered a complex project ahead of schedule and under budget.",
                rating: 5,
                color: "emerald"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[3rem] border-white/10 relative group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-10 font-light leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl bg-${testimonial.color}-500/20 flex items-center justify-center font-bold text-${testimonial.color}-400 border border-${testimonial.color}-500/20 text-xl`}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-indigo-600 rounded-[4rem] blur-[120px] opacity-20" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card p-16 md:p-24 rounded-[4rem] text-center overflow-hidden border-white/20"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-transparent to-blue-600/10 pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tight leading-[0.9]">
              Ready to build <br />
              <span className="text-indigo-400">the future?</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Join 180+ companies that trust InsideTech Softwares to power their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="px-12 py-6 bg-white text-indigo-600 hover:bg-indigo-50 rounded-2xl font-bold text-xl transition-all shadow-2xl flex items-center gap-3 group"
              >
                Let's Start a Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="px-12 py-6 glass-card hover:bg-white/10 text-white rounded-2xl font-bold text-xl transition-all border-white/20"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
