import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, Code, Palette, Zap, Cpu, Layout, Search, BarChart3, Layers } from 'lucide-react';
import { ServiceCarousel } from '../components/ui/services-card';
import AnimatedShaderBackground from '../components/ui/animated-shader-background';

const servicesData = [
  {
    number: "01",
    title: "Screenshot to Website",
    description: "Upload a visual reference and generate an editable, responsive website as your starting point.",
    icon: Code,
  },
  {
    number: "02",
    title: "Prompt-Based Editing",
    description: "Change layouts, content, styling and components through a simple conversational workflow.",
    icon: Palette,
  },
  {
    number: "03",
    title: "UX & Quality Audit",
    description: "Review accessibility, responsiveness, SEO and performance before your website goes live.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Export & Publish",
    description: "Export production-ready code, connect a custom domain or publish directly from one workspace.",
    icon: Cpu,
  },
];

const features = [
  { title: "AI Generated Layouts", icon: Layout },
  { title: "Conversion Optimized", icon: BarChart3 },
  { title: "SEO & Full Speed", icon: Search },
  { title: "Modern Frameworks", icon: Code },
  { title: "Scalable Architecture", icon: Layers },
  { title: "Analytics & Monitoring", icon: BarChart3 },
];

const techStack = [
  "Next.js / Vite / React",
  "Tailwind CSS / Framer Motion",
  "TypeScript / Node.js",
  "Three.js / WebGL Shaders",
  "Google Gemini / OpenAI",
  "Vercel / AWS Cloud",
];

const ServicesPage = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-24">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <AnimatedShaderBackground />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-[12vw] font-bold tracking-tighter uppercase leading-[0.8] mb-8">
            Our <br /> Services
          </h1>
          <p className="text-white/40 text-lg md:text-xl font-light tracking-[0.2em] uppercase max-w-2xl mx-auto">
            AI-driven solutions to design, build and optimize high-performance websites.
          </p>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-32 px-8">
        <div className="container mx-auto">
           <ServiceCarousel services={servicesData} />
        </div>
      </section>

      {/* Service Features */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="p-4 rounded-full border border-white/10 mb-4 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <feature.icon size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-48 px-8">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[8vw] font-bold tracking-tighter uppercase mb-24"
          >
            Tech Stack
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm text-lg font-bold tracking-widest uppercase hover:border-white/40 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 text-center bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[6vw] md:text-[4vw] font-bold tracking-tighter uppercase leading-none mb-12"
          >
            READY TO BUILD YOUR <br /> NEXT WEBSITE?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group inline-block"
          >
            <div className="absolute -inset-1 bg-white opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
            <a 
              href="/contact"
              className="relative bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform flex items-center gap-3"
            >
              START YOUR PROJECT
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
