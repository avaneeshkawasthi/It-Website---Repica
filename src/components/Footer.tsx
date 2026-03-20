import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight,
  Code2
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white pt-32 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-600/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                <Code2 className="text-white w-7 h-7" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-display font-bold tracking-tight text-white">InsideTech</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase">Softwares</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md font-light">
              Engineering the future of digital experiences. We combine innovation with precision to build scalable solutions for global enterprises.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Platform</h4>
              <ul className="space-y-4">
                {['Services', 'About Us', 'Our Work', 'Expertise'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Services' ? '/services' : item === 'About Us' ? '/about' : '#'} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-1 group">
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Resources</h4>
              <ul className="space-y-4">
                {['FAQ', 'Documentation', 'Privacy Policy', 'Terms'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'FAQ' ? '/faq' : '#'} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-1 group">
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-400 text-sm">
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="font-light leading-relaxed">123 Innovation Drive, Tech Valley, CA 94043</span>
                </li>
                <li className="flex items-center gap-4 text-slate-400 text-sm">
                  <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="font-light">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-4 text-slate-400 text-sm">
                  <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="font-light">hello@insidetechsoft.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm font-light">
            © {currentYear} InsideTech Softwares Private Limited. <span className="hidden md:inline">All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
