import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Headphones } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold">
              Establishing Vigilance
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            The <span className="text-primary italic">Security</span> Experts
          </h1>
          <div className="max-w-xl p-10 bg-primary/5 border-l-4 border-primary glass-card">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We provide reliable CCTV installation and security solutions for homes and businesses. Our goal is to deliver smart surveillance systems that ensure safety, peace of mind, and complete protection.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <span className="text-slate-500 font-display uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Foundation</span>
          <h2 className="text-5xl font-bold">Our Core Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <ShieldCheck className="w-8 h-8" />, 
              title: "Reliability", 
              desc: "Our systems operate with unwavering precision. In the world of security, there is no room for downtime. We build infrastructure that stands the test of time and threat.",
              footer: "System Integrity 99.9%"
            },
            { 
              icon: <Cpu className="w-8 h-8" />, 
              title: "Technical Excellence", 
              desc: "Leveraging AI-driven analytics and the latest optical hardware to provide unmatched clarity in any condition.",
              highlight: true
            },
            { 
              icon: <Headphones className="w-8 h-8" />, 
              title: "Customer-Centric Support", 
              desc: "Real-time assistance and proactive maintenance. We don't just install; we partner for your long-term safety."
            }
          ].map((card, i) => (
            <div 
              key={i}
              className={cn(
                "p-12 rounded-2xl flex flex-col gap-8 h-full",
                card.highlight ? "bg-primary text-background" : "bg-surface-bright border border-white/5"
              )}
            >
              <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center", card.highlight ? "bg-background/20" : "bg-white/5 text-primary")}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{card.title}</h3>
                <p className={cn("leading-relaxed text-lg", card.highlight ? "text-background/80" : "text-on-surface-variant")}>
                  {card.desc}
                </p>
              </div>
              {card.footer && (
                <div className="mt-auto pt-8 border-t border-white/10 text-[10px] font-display font-bold uppercase tracking-[0.2em] text-primary">
                  {card.footer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Vision Image */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto relative h-[500px] rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000" 
            alt="Vision" 
            className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-bold text-center max-w-2xl leading-tight">
              Vision Without <br /> Compromise.
            </h2>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-display uppercase tracking-[0.3em] text-xs font-bold mb-6 block">The Personnel</span>
            <h2 className="text-5xl font-bold mb-8">Specialized in Protection</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Our team comprises industry veterans with expertise spanning precision installation, complex hardware repair, and the implementation of next-generation security software architectures.
            </p>
            <div className="flex gap-6">
              <div className="flex-1 p-8 bg-surface-bright rounded-xl border border-white/5">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-slate-500">Years Exp.</div>
              </div>
              <div className="flex-1 p-8 bg-surface-bright rounded-xl border border-white/5">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-[10px] font-display uppercase tracking-widest text-slate-500">Assets Secured</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600", title: "Installation Strategy", desc: "Architecting field-of-view coverage for complex industrial campuses and high-end residential estates." },
              { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", title: "Cyber Integration", desc: "Securing the data pipeline from lens to cloud, ensuring your footage remains private and encrypted." },
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", title: "Rapid Response Repair", desc: "Ensuring hardware longevity with specialized maintenance and 24-hour technical restoration services." }
            ].map((item, i) => (
              <div key={i} className="group relative h-96 rounded-2xl overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-10">Secure Your Future Today</h2>
          <p className="text-on-surface-variant text-xl mb-12">
            Join hundreds of businesses and families who trust A TRIVENI SOLUTIONS for their absolute security needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
          </div>
        </div>
      </section>
    </div>
  );
}
