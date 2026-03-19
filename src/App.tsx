/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Leaf, 
  Sprout, 
  Droplets, 
  Coffee, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';

const Navbar = () => (
  <header className="w-full top-0 sticky z-50 bg-background/90 backdrop-blur-md border-b border-primary/5">
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
      <div className="text-2xl font-bold text-primary font-headline tracking-wide">
        The Chai Guy
      </div>
      <div className="hidden md:flex items-center space-x-10 font-headline tracking-wide">
        {['About', 'The Recipe', 'Events', 'Catering', 'Contact'].map((item) => (
          <a 
            key={item}
            className="text-outline hover:text-primary transition-colors duration-300 font-medium" 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button className="text-primary hover:scale-110 duration-200 transition-transform">
          <ShoppingBag size={24} />
        </button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-32">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <img 
        alt="The Chai Guy Official Logo" 
        className="w-48 h-48 md:w-60 md:h-60 object-contain mx-auto mb-10 rounded-full shadow-2xl shadow-primary/10 border-4 border-white" 
        src="https://lh3.googleusercontent.com/aida/ADBb0uhP0RyKQSARqksrnHipXnQkscX3r377o5nUc2T6FElhYm9VtN--Kv5zMvbw6LUxIwWW8D9X8MfppvrBgrHIFe2oNXLe1xDQpBlzVuUREPL8Pvw9UDEnVoh_IFgMiM0OET3g3k6MrN7k5K1X3hT2Rgi9boVNjxjN8E91jlinOceN3rdrJg4a285Pv5jT3lnGmMddLD2LNzzqOUNJp8P23J2tYHro7sW86hIZPwC3UMdDn8k726-eZRQ_b2T3-Ip5j02HsAAWohYt"
        referrerPolicy="no-referrer"
      />
      <h1 className="font-headline text-6xl md:text-8xl font-black text-primary mb-6 tracking-tight">
        The Chai Guy
      </h1>
      <p className="font-body text-2xl md:text-3xl text-on-surface-variant mb-12 max-w-2xl mx-auto italic leading-relaxed opacity-90">
        Chai for the community. Made with love.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-primary hover:bg-primary-container text-on-primary font-label px-12 py-5 rounded-full text-lg font-semibold transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/30">
          Order for Your Event
        </button>
        <button className="bg-white/50 backdrop-blur-sm border border-primary/10 text-primary hover:bg-white font-label px-12 py-5 rounded-full text-lg font-semibold transition-all transform hover:-translate-y-1">
          Our Story
        </button>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 items-center">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
        <img 
          alt="Making Chai" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5O6GewHjeQjKHCXjBCW1kJKl_wVLyvQ3SZ7ikNlsJx87Cr3fYy_QmTPNf-go8pqxdJnFPMkpgEAJGXd3GaEz1e0ee4ftLUSYhAzv9a09mSCZpnr0eduWR_vgsMaRnpT_qGlrDJlJNKWn8p-Ph3mZGj9dPiCvbasts0Oc41-nvwmjoA2wcbiTMuWceSv43nDApObS8ls6Gi-paQGGxaU7O_hBJFIievfjJb0xqi4fGR_NviMODkgj-Z2e930f-WWNKdNmkHKGVwqw"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white hidden lg:block rotate-3">
        <img 
          alt="Chai Spices" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuANrtkZ50TZpCjbBwPUfFPB-kK15QN23Ua22Dq1siIAzAFFz-SHy24S6MhlNidSdj6HmmxNgM0Vy9XVDvy_pmWG4RFZbp9JzE16nKmUeSGsZ9Cd8Nhpl7oE35eRt7VD8ggf6kAwSkGGYhdDFox7MNYQoNRnDfeqaJlrq9BRfEPL05QHd8tQ0PGsxPfRwmolCDh14vM2E5iRa6GWZcQPcuuXz9b6GHBpbFe0o2cSFjiehZELkQE7Fl7vJB2Pw6446TtqYcs7NdPD6Ws"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="inline-block px-4 py-1 rounded-full bg-primary/5 text-primary text-sm font-label font-bold tracking-widest uppercase">Our Heritage</div>
      <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary leading-tight">An Authentic Desi Legacy</h2>
      <p className="text-xl leading-relaxed text-on-surface-variant font-body">
        Born from the vibrant spirit of North Jersey's South Asian community, The Chai Guy is more than just a beverage service. We specialize in the art of the large-batch brew—authentic, aromatic chai crafted for the moments that matter.
      </p>
      <p className="text-xl leading-relaxed text-on-surface-variant font-body">
        From masjid functions to bustling community festivals and intimate gatherings, we bring the warmth of a traditional dhaba directly to you. Every pot is steeped with intention.
      </p>
      <div className="pt-6">
        <span className="inline-flex items-center gap-2 py-3 px-8 rounded-full bg-primary text-white font-label text-sm font-bold shadow-lg">
          <MapPin size={16} />
          Serving NJ & NY Area
        </span>
      </div>
    </motion.div>
  </section>
);

const Ingredients = () => {
  const items = [
    {
      icon: <Leaf className="text-3xl" />,
      title: "Tapal Danedar",
      desc: "The backbone of our chai. Premium loose black tea known for its bold, granular strength."
    },
    {
      icon: <Sprout className="text-3xl" />,
      title: "Green Cardamom",
      desc: "Freshly cracked pods that release a sweet, herbal aroma that cuts through the richness."
    },
    {
      icon: <Droplets className="text-3xl" />,
      title: "Evaporated Milk",
      desc: "The secret to our velvety texture. Reduced until thick for that authentic finish."
    },
    {
      icon: <Droplets className="text-3xl" />, // Using droplets for milk as well
      title: "Whole Milk",
      desc: "Fresh, organic whole milk provides the perfect body and balance for the spices."
    }
  ];

  return (
    <section id="the-recipe" className="bg-surface-container/30 py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6">The Secret is in the Steep</h2>
          <p className="font-body text-2xl text-on-surface-variant italic opacity-80">Four simple pillars of our signature blend</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/5 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Catering = () => {
  const scales = [
    {
      num: "1",
      title: "Small Gatherings (8-20 people)",
      desc: "Perfect for family dinners, board meetings, or weekend tea parties."
    },
    {
      num: "2",
      title: "Community Events (20-80 people)",
      desc: "Ideal for Eid parties, corporate mixers, or local workshops."
    },
    {
      num: "3",
      title: "Large Festivals (80+ people)",
      desc: "Wedding receptions and grand celebrations where the tea must never run dry."
    }
  ];

  return (
    <section id="catering" className="max-w-7xl mx-auto px-8 py-40">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-2 lg:order-1"
        >
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-12">Catering for Every Scale</h2>
          <div className="space-y-10">
            {scales.map((scale, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="bg-primary text-on-primary w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">
                  {scale.num}
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold mb-3 text-primary">{scale.title}</h4>
                  <p className="text-on-surface-variant text-lg leading-relaxed">{scale.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-1 lg:order-2"
        >
          <div className="bg-white p-3 rounded-3xl shadow-2xl transform lg:rotate-2">
            <img 
              alt="Event Catering" 
              className="rounded-2xl w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBESnDFXSDP2QtD-fz85HQAVOaf1ACG8Q_AnFjZd1Aw9CmRn-eW0mcHGdaGGtlGG77vHOBCk7OHQ5YWFhGgbj4LxbXaTKC0Xzfe3UA8_PuxISePuHhQIobADD0_WpinNE37rA21sF9nEE3_Mx9rz7Bo9_422PpguFtkjXnVtfNZgiDJQAkzecxLjpx3KmfDV6iWJzgVojodB31D3-KHUobcBfJ50nwmTvGPJIxISwO8bCs8qzpLwYOXRk28XyejYLp9URH5Cib1-tc"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => (
  <section id="contact" className="max-w-5xl mx-auto px-8 pb-40">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2.5rem] p-10 md:p-20 shadow-2xl relative overflow-hidden border border-primary/5"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl font-bold text-primary mb-6">Start Your Order</h2>
        <p className="font-body text-xl text-on-surface-variant max-w-xl mx-auto">Let us know about your upcoming event and we'll get back to you with a custom quote.</p>
      </div>
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="font-label text-xs font-bold text-primary uppercase tracking-[0.2em]">Your Name</label>
            <input 
              className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all outline-none" 
              placeholder="e.g. Hassan Ahmed" 
              type="text"
            />
          </div>
          <div className="space-y-3">
            <label className="font-label text-xs font-bold text-primary uppercase tracking-[0.2em]">Event Type</label>
            <div className="relative">
              <select className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all appearance-none outline-none">
                <option>Wedding Reception</option>
                <option>Masjid Function</option>
                <option>Community Gathering</option>
                <option>Corporate Event</option>
                <option>Private Dinner</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={20} />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <label className="font-label text-xs font-bold text-primary uppercase tracking-[0.2em]">Estimated Guest Count</label>
          <input 
            className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all outline-none" 
            placeholder="e.g. 50" 
            type="number"
          />
        </div>
        <div className="space-y-3">
          <label className="font-label text-xs font-bold text-primary uppercase tracking-[0.2em]">Your Message</label>
          <textarea 
            className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all outline-none" 
            placeholder="Tell us more about the timing and any special requests..." 
            rows={5}
          ></textarea>
        </div>
        <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-label py-6 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-primary/30 transform hover:-translate-y-1">
          Send Inquiry
        </button>
      </form>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-primary/5 border-t border-primary/5">
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-3xl font-bold text-primary font-headline">
          The Chai Guy
        </div>
        <div className="flex flex-wrap justify-center gap-10 font-headline">
          {['Our Story', 'Brewing Guide', 'Privacy Policy', 'Terms of Service'].map((item) => (
            <a key={item} className="text-outline hover:text-primary transition-colors" href="#">{item}</a>
          ))}
        </div>
        <div className="text-sm text-outline opacity-80 font-label">
          © 2024 The Chai Guy. Made with love.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider max-w-3xl mx-auto" />
        <About />
        <Ingredients />
        <Catering />
        <ContactForm />
      </main>
      <Footer />
      
      {/* FAB */}
      <button className="fixed bottom-10 right-10 bg-primary text-on-primary w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <Coffee size={32} />
      </button>
    </div>
  );
}
