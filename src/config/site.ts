export const siteConfig = {
  name: "Agent Sarah",
  description: "Professional Life Insurance Agent & Financial Advisor",
  url: "https://your-domain.com",
  ogImage: "https://your-domain.com/og-image.jpg",
  contact: {
    email: "sarah.agent@example.com",
    phone: "081-234-5678",
    lineId: "@agent.sarah",
    address: "123 Insurance Bldg, Bangkok, Thailand",
  },
  socials: {
    facebook: "https://facebook.com/agent.sarah",
    line: "https://line.me/ti/p/@agent.sarah",
    instagram: "https://instagram.com/agent.sarah",
  },
  // Theme customization (optional integration in future)
  theme: {
    primaryColor: "blue", 
  }
};

export type SiteConfig = typeof siteConfig;
