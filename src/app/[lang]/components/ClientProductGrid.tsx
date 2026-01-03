"use client";

import { ProductCard } from "@/components/ProductCard";
import { LeadModal } from "@/components/LeadModal";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductItem {
    title: string;
    description: string;
    features: string[];
}

interface ProductDict {
    interested: string;
    recommended: string;
    items: ProductItem[];
}

interface LeadModalDict {
    title: string;
    description: string;
    name: string;
    phone: string;
    message: string;
    cancel: string;
    submit: string;
}

interface ClientProductGridProps {
    dict: ProductDict;
    leadModalDict: LeadModalDict;
}

export function ClientProductGrid({ dict, leadModalDict }: ClientProductGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  return (
    <>
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {dict.items.map((product, index) => (
            <CarouselItem key={index} className="pl-6 py-6 md:basis-1/2 lg:basis-1/3 h-full">
              <div className="h-full">
                <ProductCard
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  recommended={index === 0}
                  onSelect={handleSelectPlan}
                  btnText={dict.interested}
                  badgeText={dict.recommended}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
        </div>
      </Carousel>
    </div>
    <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
        dict={leadModalDict}
      />
    </>
  );
}
