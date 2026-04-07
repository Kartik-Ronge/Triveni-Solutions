import { motion } from 'motion/react';
import { ShieldCheck, Zap, Headphones, Users, Settings, Database, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold">
                System Status: Active Monitoring
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Advanced CCTV <br />
              <span className="text-primary text-glow">Solutions.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Professional installation, maintenance, and monitoring by expert technicians. 
              Secure your perimeter with intelligence.
            </p>
          
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="Reliable Tech" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-xl border border-white/10">
              <span className="block text-slate-500 uppercase text-[10px] tracking-[0.3em] font-bold mb-2">Established Trust</span>
              <div className="text-4xl font-display font-bold text-primary">100%</div>
              <div className="text-xl font-display font-bold">Reliable</div>
            </div>
          </div>
          <div>
            <span className="text-primary font-display uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              "We are committed to delivering <span className="text-primary italic">reliable and advanced</span> CCTV security solutions that ensure safety and peace of mind."
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Our focus is on technical excellence, high-quality installations, and continuous support to protect what matters most. In an era of uncertainty, we provide absolute visual clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 px-6 bg-surface-bright/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-slate-500 font-display uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Core Capabilities</span>
            <h2 className="text-5xl font-bold">Service Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Settings className="w-8 h-8" />, 
                title: "Installation", 
                desc: "Precision-engineered setups using industry-leading optics and hardware, ensuring zero blind spots in your security grid." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Maintenance", 
                desc: "Continuous optimization and preventive hardware checks to guarantee your surveillance system operates at peak performance 24/7." 
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "24/7 Monitoring", 
                desc: "Always-on alert systems managed by security experts. We don't just watch; we respond to threats before they escalate." 
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-surface-bright rounded-xl border border-white/5 flex flex-col gap-8"
              >
                <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-display uppercase tracking-[0.3em] text-xs font-bold mb-6 block">The Sentinel Edge</span>
            <h2 className="text-5xl font-bold mb-8">Why Choose Us</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              We transcend simple camera installation. We build comprehensive digital fortresses tailored to the unique topography of your assets.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Users />, title: "Expert Technicians", desc: "Vetted specialists with over a decade of experience in integrated security architecture." },
                { icon: <Headphones />, title: "Reliable Support", desc: "Direct access to our technical command center for immediate troubleshooting and assistance." },
                { icon: <Database />, title: "Customized Security Plans", desc: "Bespoke strategies that scale with your requirements, from private estates to industrial complexes." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" 
                alt="Security Corridor" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 glass-card p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Quality Assurance</h3>
              </div>
              <ul className="space-y-3 text-[10px] font-display uppercase tracking-widest text-slate-400">
                <li>Deployment Accuracy Maintained Through</li>
                <li>Rigorous Technical Testing and Signal</li>
                <li>Integrity Checks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Removed */}
    </div>
  );
}
