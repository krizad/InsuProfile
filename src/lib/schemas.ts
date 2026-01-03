import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(9, { message: "Phone number must be at least 9 characters." }),
  plan: z.string().min(1, { message: "Plan is required." }),
  message: z.string().optional(),
});

export const recruitmentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(9, { message: "Phone number must be at least 9 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  reason: z.string().min(10, { message: "Please tell us a little more about yourself (at least 10 chars)." }),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
export type RecruitmentFormValues = z.infer<typeof recruitmentSchema>;
