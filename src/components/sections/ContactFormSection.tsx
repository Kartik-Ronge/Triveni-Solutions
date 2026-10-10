import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactInquiry } from '../../services/api';
import { ContactFormData } from '../../types';
import { Button } from '../common/Button';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'General Inquiry',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // Basic frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields (Name, Email, Message).');
      setLoading(false);
      return;
    }

    const response = await submitContactInquiry(formData);
    setLoading(false);

    if (response.success) {
      setSuccessMessage(response.message || 'Transmission received successfully! Our surveillance experts will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType: 'General Inquiry',
      });
    } else {
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="bg-surface-bright rounded-2xl p-8 md:p-14 relative overflow-hidden border border-white/5 shadow-2xl">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      {successMessage && (
        <div className="mb-8 p-5 bg-primary/10 border border-primary/40 text-primary rounded-xl flex items-start gap-4 animate-fade-in">
          <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display font-bold uppercase text-xs tracking-wider">Transmission Confirmed</h4>
            <p className="text-sm mt-1 text-on-background/90">{successMessage}</p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-8 p-5 bg-red-500/10 border border-red-500/40 text-red-400 rounded-xl flex items-start gap-4 animate-fade-in">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-display font-bold uppercase text-xs tracking-wider">Transmission Failed</h4>
            <p className="text-sm mt-1 text-red-200">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[11px] font-display font-bold text-slate-400 uppercase tracking-widest block">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-background border border-white/10 rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary text-on-background placeholder:text-slate-600 transition-all outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[11px] font-display font-bold text-slate-400 uppercase tracking-widest block">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="rahul@example.com"
              className="w-full bg-background border border-white/10 rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary text-on-background placeholder:text-slate-600 transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-[11px] font-display font-bold text-slate-400 uppercase tracking-widest block">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 91758 44362"
              className="w-full bg-background border border-white/10 rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary text-on-background placeholder:text-slate-600 transition-all outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="serviceType" className="text-[11px] font-display font-bold text-slate-400 uppercase tracking-widest block">
              Service Category
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full bg-background border border-white/10 rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary text-on-background transition-all outline-none"
            >
              <option value="General Inquiry">General Security Inquiry</option>
              <option value="New CCTV Installation">New CCTV Camera Installation</option>
              <option value="Maintenance & AMC">CCTV Maintenance / AMC</option>
              <option value="DVR / NVR Repair">DVR / NVR Storage Repair</option>
              <option value="Commercial Site Survey">Commercial Site Survey</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[11px] font-display font-bold text-slate-400 uppercase tracking-widest block">
            Security Requirements / Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your property, camera count, or technical issues..."
            className="w-full bg-background border border-white/10 rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary text-on-background placeholder:text-slate-600 transition-all resize-none outline-none"
          ></textarea>
        </div>

        <Button
          type="submit"
          isLoading={loading}
          className="w-full md:w-auto"
        >
          SEND TRANSMISSION <Send className="w-4 h-4 ml-1" />
        </Button>
      </form>
    </div>
  );
};
