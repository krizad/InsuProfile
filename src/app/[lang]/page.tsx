

import { Hero } from "@/components/Hero";
import { RecruitmentForm } from "@/components/RecruitmentForm";
// Toaster moved to layout
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero dict={dict.hero} />

      {/* Insurance Products Section */}
      <section id="products" className="container mx-auto px-4 py-16 md:py-24">
         <div className="text-center mb-12 max-w-2xl mx-auto">
             <div className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Our Solutions</div>
             <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{dict.products.title}</h2>
             <p className="text-gray-500 text-lg">
                {dict.products.subtitle}
             </p>
         </div>
        
        <ClientProductGrid dict={dict.products} />
      </section>

      {/* Recruitment Section */}
      <section id="join" className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-50/50 -skew-x-12 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-6">
                     <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary w-fit">
                        Join Our Team
                     </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-balance">
                         {dict.recruitment.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {dict.recruitment.subtitle}
                    </p>
                    <ul className="grid gap-3 pt-2">
                        {dict.recruitment.benefits.map((benefit: string, i: number) => (
                             <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <RecruitmentForm dict={dict.recruitment.form} />
            </div>
        </div>
      </section>
    </main>
  );
}

// Client component wrapper for interactive grid
import { ClientProductGrid } from "./components/ClientProductGrid";
