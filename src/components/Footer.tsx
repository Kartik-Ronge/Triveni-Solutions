import { Shield, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0E14] w-full py-16 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary font-display tracking-widest uppercase">
                Triveni Solutions
              </span>
            </div>
            <p className="font-display uppercase text-[10px] tracking-widest text-slate-500 max-w-xs">
              © 2025 A TRIVENI SOLUTIONS. THE DIGITAL SECURITY.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-display uppercase text-[10px] tracking-widest">
            <Link to="/" className="text-slate-500 hover:text-white transition-all">Home</Link>
            <Link to="/surveillance" className="text-slate-500 hover:text-white transition-all">Surveillance</Link>
            <Link to="/about" className="text-slate-500 hover:text-white transition-all">About us</Link>
            <Link to="/contact" className="text-slate-500 hover:text-white transition-all">Contact</Link>
          </div>

          <div className="flex gap-6">
            <Globe className="w-5 h-5 text-slate-500 hover:text-primary cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-slate-500 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
