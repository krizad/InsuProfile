"use client";

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues } from "@/lib/schemas";
import { useEffect } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

// Define strict dictionary type here or import it 
// For now, inline
interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  dict?: {
        title: string;
        description: string;
        name: string;
        phone: string;
        message: string;
        cancel: string;
        submit: string;
  }; 
}

export function LeadModal({ isOpen, onClose, selectedPlan, dict }: LeadModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
    
  // Default Fallback
  const t = dict || {
      title: "Interest in",
      description: "Fill out the form below and I'll get back to you with a personalized quote.",
      name: "Name",
      phone: "Phone Number",
      message: "Message (Optional)",
      cancel: "Cancel",
      submit: "Submit Request"
  };

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      plan: selectedPlan,
      message: "",
    },
  });

  // Update plan when opened/changed
  useEffect(() => {
    form.reset({
      name: "",
      phone: "",
      plan: selectedPlan,
      message: "",
    });
  }, [selectedPlan, form]);

  async function onSubmit(data: LeadFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Lead Submitted:", data);
    toast.success("Request received! We will contact you shortly.");
    
    setIsSubmitting(false);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.title} <span className="text-primary">{selectedPlan}</span></DialogTitle>
          <DialogDescription>
            {t.description}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.name}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.name} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.phone}</FormLabel>
                  <FormControl>
                    <Input placeholder="08x-xxx-xxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.message}</FormLabel>
                  <FormControl>
                    <Textarea placeholder="I'm interested in..." className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Hidden field for plan */}
            <input type="hidden" {...form.register("plan")} />

            <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
                    {t.cancel}
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t.submit}
                </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
