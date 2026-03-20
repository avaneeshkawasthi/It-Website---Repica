import React from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Globe, 
  Zap, 
  Code, 
  Shield, 
  Cloud, 
  Smartphone, 
  BarChart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software",
    desc: "We develop bespoke software solutions tailored to your unique business challenges, ensuring scalability and long-term value.",
    features: ["Bespoke Applications", "API Development", "Legacy Migration"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Solutions",
    desc: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Flutter Development"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    desc: "Secure, scalable, and reliable cloud hosting services that ensure your applications are always available to your users.",
    features: ["AWS/Azure/GCP", "Auto-scaling", "DevOps Automation"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cyber Security",
    desc: "Comprehensive security audits and implementation to protect your digital assets from evolving threats.",
    features: ["Penetration Testing", "Compliance Audit", "Data Encryption"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.",
    features: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Strategy",
    desc: "Strategic consulting to help you navigate the digital landscape and achieve your business objectives.",
    features: ["Market Analysis", "Product Roadmap", "Growth Hacking"],
    color: "from-indigo-500 to-purple-500"
  }
];

const Services: React.FC = () => {
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
              Our <span className="text-gradient">Specialized</span> Services
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We provide a comprehensive suite of technology services designed to help modern enterprises thrive in a digital-first world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 group hover:border-indigo-500/50 transition-all flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-indigo-400 font-bold text-sm group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="hero-glow -top-1/2 -right-1/4" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Let's collaborate to build something amazing. Our team is ready to turn your vision into a digital reality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
                >
                  Get a Free Consultation
                </a>
                <a 
                  href="/contact" 
                  className="px-10 py-4 glass-card hover:bg-white/5 text-white font-bold rounded-2xl transition-all"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
