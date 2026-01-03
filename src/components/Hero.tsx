"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
    dict: {
        tagline: string;
        greeting: string;
        name: string;
        description: string;
        consult: string;
        viewPlans: string;
    };
}

export function Hero({ dict }: HeroProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-white to-pink-50/30 pt-20 pb-32 lg:pt-32 lg:pb-40">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary w-fit mx-auto lg:mx-0">
              {dict.tagline}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary leading-[1.15]">
              {dict.greeting} <span className="text-primary relative inline-block">
                {dict.name}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
               {dict.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all as-child">
                 <Link href="tel:+66123456789">{dict.consult}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-full px-8 h-12 text-base font-semibold transition-all" asChild>
                  <Link href="#products">{dict.viewPlans} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center relative z-10"
          >
              <div className="relative">
                  {/* Abstract shapes behind image */}
                  <div className="absolute top-4 -right-4 w-64 h-64 bg-accent/20 rounded-[2rem] -z-10 animate-pulse-slow" />
                  <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-[2rem] -z-10" />

                  <div className="relative h-[450px] w-[350px] sm:h-[550px] sm:w-[450px] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-8 border-white">
                      {/* Placeholder for Agent Photo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 font-bold text-2xl">
                          Agent Photo
                      </div>
                       {/* Overlay gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
