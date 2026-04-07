import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-primary"></div>
          <span className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase">Communication Portal</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Get in <span className="text-primary italic">Touch</span>
        </h1>
      </header>

      <section className="px-6 pb-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-bright rounded-2xl p-10 md:p-16 relative overflow-hidden border border-white/5">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              
              <form className="space-y-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-background border-none rounded-lg px-6 py-5 focus:ring-2 focus:ring-primary/50 text-on-background placeholder:text-slate-700 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-background border-none rounded-lg px-6 py-5 focus:ring-2 focus:ring-primary/50 text-on-background placeholder:text-slate-700 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-background border-none rounded-lg px-6 py-5 focus:ring-2 focus:ring-primary/50 text-on-background placeholder:text-slate-700 transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can our surveillance experts help you?"
                    className="w-full bg-background border-none rounded-lg px-6 py-5 focus:ring-2 focus:ring-primary/50 text-on-background placeholder:text-slate-700 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary/80 text-background font-display font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                  SEND TRANSMISSION <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="mt-10 flex items-center gap-4 glass-card px-8 py-5 rounded-full border border-white/5 w-fit">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <span className="text-[10px] font-display font-bold tracking-[0.3em] text-primary uppercase">Security Systems Active</span>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Phone className="w-32 h-32" />
              </div>
              <h3 className="text-primary font-display font-bold text-2xl mb-6">Quick Support</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Call or message us for instant assistance and free consultation. Our technical team is standing by to secure your assets.
              </p>
              <a href="tel:+919175844362" className="inline-flex items-center gap-3 text-primary text-2xl font-bold hover:gap-5 transition-all">
                +91 9175844362
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            <div className="bg-surface rounded-2xl p-10 space-y-10 border border-white/5">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-surface-bright flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest mb-2">Corporate Headquarters</h4>
                  <p className="text-on-surface leading-relaxed text-lg">Near More Gym, Abhinav College Road, Narhe Pune 411041</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-surface-bright flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest mb-2">Direct Liaison</h4>
                  <p className="text-on-surface text-lg">trivenisolutions0@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-surface-bright flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest mb-2">Operations Window</h4>
                  <div className="space-y-2">
                    <p className="text-on-surface text-lg font-medium">Monday – Saturday: 9:00 AM – 8:00 PM</p>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Sunday: Emergency Support Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-72 bg-surface-bright rounded-2xl overflow-hidden relative border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="bg-primary p-3 rounded-full shadow-lg shadow-primary/50 mb-4">
                  <MapPin className="w-6 h-6 text-background fill-current" />
                </div>
                <span className="text-[10px] font-display font-black tracking-[0.4em] uppercase text-white/80">Vector Location Pune</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
