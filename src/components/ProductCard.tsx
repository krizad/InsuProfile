import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

interface ProductProps {
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
  onSelect: (title: string) => void;
  btnText: string;
  badgeText: string;
}

export function ProductCard({ title, description, features, recommended, onSelect, btnText, badgeText }: ProductProps) {
  return (
    <Card className={`flex flex-col h-full hover:translate-y-[-4px] transition-all duration-300 border-0 shadow-lg ${recommended ? 'bg-white shadow-primary/10 ring-2 ring-primary relative overflow-visible' : 'shadow-gray-200/50 bg-white overflow-hidden'}`}>
      
      {recommended && (
          <div className="absolute top-0 right-0 z-10">
             <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
               {badgeText}
             </div>
          </div>
      )}

      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/5 text-primary">
            <Shield className="h-6 w-6" />
        </div>
        <CardContent className="p-0">
             <h3 className="text-xl font-bold text-secondary mb-2 leading-tight">{title}</h3>
             <p className="text-sm text-gray-500 line-clamp-3 mb-4 min-h-[60px]">{description}</p>
        </CardContent>
      </CardHeader>
      
      <CardContent className="flex-1 pt-0">
        <div className="space-y-3">
            <div className="h-px w-full bg-gray-100 mb-4" />
            <ul className="space-y-3">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" strokeWidth={3} />
                <span>{feature}</span>
                </li>
            ))}
            </ul>
        </div>
      </CardContent>
      
      <CardFooter className="pt-6">
        <Button 
            className={`w-full h-11 rounded-xl font-semibold transition-all ${
                recommended 
                ? "bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20" 
                : "bg-gray-50 text-secondary hover:bg-gray-100 border border-gray-200"
            }`} 
            onClick={() => onSelect(title)}
        >
          {btnText}
        </Button>
      </CardFooter>
    </Card>
  );
}
