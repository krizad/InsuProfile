export const en = {
  navbar: {
    about: "About Me",
    products: "Insurance Products",
    join: "Join the Team",
    contact: "Contact Now"
  },
  hero: {
    tagline: "Authorized Life Insurance Agent",
    greeting: "Hi, I'm",
    name: "Agent Sarah",
    description: "Dedicated to protecting your future and your family's. With over 10 years of experience, I provide personalized insurance solutions and mentorship for aspiring agents.",
    consult: "Consult for Free",
    viewPlans: "View Plans"
  },
  products: {
    title: "Choose the Protection You Need",
    subtitle: "Customized plans designed to fit your lifestyle and goals.",
    interested: "I'm Interested",
    recommended: "Recommended",
    items: [
        {
          title: "Health Protection (IPD/OPD)",
          description: "Comprehensive health coverage for inpatient and outpatient care.",
          features: ["All-in-one medical expense coverage", "Cashless claims at 400+ hospitals", "Tax deduction benefits", "24/7 Telemedicine"],
        },
        {
          title: "Life Savings Plus",
          description: "Secure your future with disciplined savings and life protection.",
          features: ["High returns with guaranteed dividends", "Life protection coverage", "Short-term payment, long-term care", "Tax deduction up to 100,000 THB"],
        },
        {
          title: "Critical Illness Shield",
          description: "Financial support when you are diagnosed with a critical illness.",
          features: ["Covers 50+ critical illnesses", "Lump sum payout upon diagnosis", "Affordable premiums", "No price increase with age (for term)"],
        },
        {
            title: "Personal Accident Insurance",
            description: "Protect yourself from unexpected accidents 24/7 worldwide.",
            features: ["Medical expenses from accidents", "Income compensation during hospitalization", "No health check required, easy to apply", "Motorcycle riding coverage included"],
        },
        {
            title: "Retirement Plan",
            description: "Plan your retirement with confidence. Receive guaranteed income every month.",
            features: ["Guaranteed annuity payments every year", "Tax deduction up to 200,000 THB (Max 300,000 THB with other funds)", "Choose annual or monthly payments", "Life protection before retirement"],
        },
        {
            title: "Child Education Plan",
            description: "Secure your child's education for a bright future.",
            features: ["Lump sum for education at key milestones", "Payor protection if unexpected events occur", "Receive dividends during the contract", "Ensure your child can finish their studies"],
        }
    ]
  },
  recruitment: {
    title: "Build Your Career with Us",
    subtitle: "Join a winning team where your success is our priority. We provide world-class training, high commissions, and a flexible work environment.",
    benefits: [
        "Unlimited Income Potential & High Commission",
        "Professional Training & Mentorship",
        "Flexible Working Hours",
        "Fast Career Progression",
        "International Trip Rewards"
    ],
    form: {
        title: "Application Form",
        description: "Start your journey as a professional agent today.",
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        reason: "Why do you want to join us?",
        submit: "Submit Application"
    }
  },
  leadModal: {
    title: "Interest in",
    description: "Fill out the form below and I'll get back to you with a personalized quote.",
    name: "Name",
    phone: "Phone Number",
    message: "Message (Optional)",
    cancel: "Cancel",
    submit: "Submit Request"
  },
  footer: {
    tagline: "Providing reliable insurance coverage and career opportunities since 2015.",
    contact: "Contact",
    quickLinks: "Quick Links",
    followMe: "Follow Me",
    rights: "All rights reserved.",
    inspiration: "Based on Muang Thai Life Assurance inspiration."
  }
};

export type Dictionary = typeof en;
