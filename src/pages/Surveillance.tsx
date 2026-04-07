import { motion } from 'motion/react';
import { Video, Settings, Wrench, Database, Smartphone, ArrowRight } from 'lucide-react';

export default function Surveillance() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
          <img 
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000" 
            alt="Expertise" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="font-display text-primary tracking-[0.3em] uppercase text-xs font-bold">
              Active Monitoring Solutions
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">Our Expertise</h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            Deploying next-generation visual intelligence. We specialize in the precision engineering of security ecosystems for mission-critical infrastructure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Service */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-bright p-10 flex flex-col justify-between min-h-[450px] border border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                alt="Installation" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-bright via-surface-bright/60 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <Video className="w-12 h-12 text-primary mb-8" />
              <h3 className="text-4xl font-bold mb-6 tracking-tight">CCTV Installation</h3>
              <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
                Professional setup of high-quality surveillance systems for homes, offices, and businesses. Engineering tailored sightlines for absolute coverage.
              </p>
            </div>
            <div className="relative z-10 flex gap-4">
              <span className="px-4 py-2 bg-white/5 rounded border border-primary/20 text-[10px] tracking-[0.2em] font-bold text-primary uppercase">Residential</span>
              <span className="px-4 py-2 bg-white/5 rounded border border-primary/20 text-[10px] tracking-[0.2em] font-bold text-primary uppercase">Enterprise</span>
            </div>
          </div>

          {/* Maintenance */}
          <div className="md:col-span-4 glass-card rounded-2xl p-10 border border-white/5 flex flex-col justify-between hover:bg-surface-bright transition-colors group">
            <div>
              <Settings className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">CCTV Maintenance</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Regular servicing, system checks, and quick repairs to ensure smooth performance. Zero-downtime philosophy.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase group-hover:translate-x-2 transition-transform">
              <span>Schedule Checkup</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Repair */}
          <div className="md:col-span-4 bg-surface rounded-2xl p-10 border border-white/5 flex flex-col justify-between hover:bg-surface-bright transition-colors">
            <div>
              <Wrench className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Camera Repair</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Fixing camera issues, wiring problems, and system errors efficiently. Technical diagnostics at the edge.
              </p>
            </div>
          </div>

          {/* Storage */}
          <div className="md:col-span-4 bg-primary/10 rounded-2xl p-10 border border-primary/20 flex flex-col justify-between">
            <div>
              <Database className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">DVR/NVR Setup</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Complete configuration of recording systems for secure video storage and access. Scalable archival solutions.
              </p>
            </div>
            <div className="h-1.5 w-full bg-primary/20 mt-10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                className="h-full bg-primary"
              ></motion.div>
            </div>
          </div>

          {/* Remote */}
          <div className="md:col-span-4 glass-card rounded-2xl p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-12 -bottom-12 opacity-5 text-primary group-hover:scale-110 transition-transform duration-700">
              <Smartphone className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <Smartphone className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Remote Monitoring</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Access your CCTV cameras anytime, anywhere through mobile or desktop. Unified control in your pocket.
              </p>
            </div>
            <div className="relative z-10 mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-muted flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-muted flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
              </div>
              <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">Multi-Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Strip */}
      <section className="py-20 bg-[#0A0E14]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Ultra-HD Support", val: "Depends" },
            { label: "Active Monitoring", val: "24/7" },
            { label: " Storage", val: "Any" },
            { label: "Object Detection", val: "Sensor" }
          ].map((spec, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-primary font-display text-5xl font-bold">{spec.val}</span>
              <span className="text-slate-500 uppercase text-[10px] tracking-[0.3em] font-bold">{spec.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
