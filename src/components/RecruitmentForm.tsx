"use client";

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
import { recruitmentSchema, type RecruitmentFormValues } from "@/lib/schemas";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RecruitmentFormProps {
    dict: {
        title: string;
        description: string;
        name: string;
        phone: string;
        email: string;
        reason: string;
        submit: string;
    };
}

export function RecruitmentForm({ dict }: RecruitmentFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const form = useForm<RecruitmentFormValues>({
      resolver: zodResolver(recruitmentSchema),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
        reason: "",
      },
    });
  
    async function onSubmit(data: RecruitmentFormValues) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Recruitment Application:", data);
      toast.success("Application submitted! We'll review and contact you.");
      form.reset();
      setIsSubmitting(false);
    }

  return (
    <Card className="w-full bg-white border border-gray-100 shadow-2xl shadow-primary/5 rounded-2xl overflow-hidden">
        <div className="h-2 w-full bg-primary" />
        <CardHeader className="pt-8 px-8">
            <CardTitle className="text-2xl text-secondary">{dict.title}</CardTitle>
            <CardDescription className="text-base text-gray-500">{dict.description}</CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-gray-700">{dict.name}</FormLabel>
                        <FormControl>
                            <Input placeholder={dict.name} className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
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
                        <FormLabel className="text-gray-700">{dict.phone}</FormLabel>
                        <FormControl>
                            <Input placeholder="08x-xxx-xxxx" className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-700">{dict.email}</FormLabel>
                    <FormControl>
                        <Input placeholder="you@example.com" className="h-11 rounded-lg bg-gray-50 border-gray-200 focus:bg-white transition-colors" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-gray-700">{dict.reason}</FormLabel>
                    <FormControl>
                        <Textarea placeholder={dict.reason} className="min-h-[120px] rounded-lg bg-gray-50 border-gray-200 focus:bg-white transition-colors p-4" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 mt-2" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {dict.submit}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
