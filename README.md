# Professional Insurance Agent Profile Template

A clean, modern, and "plug and play" web portfolio template designed for insurance agents and financial advisors. Built with **Next.js**, **Tailwind CSS**, and **TypeScript**.

## 🚀 Getting Started (Plug and Play)

Follow these simple steps to make this website your own.

### 1. Clone & Install

```bash
git clone https://github.com/your-username/insu-profile.git
cd insu-profile
npm install
```

### 2. Configure Your Profile (Crucial Step!)

Open `src/config/site.ts` and update your personal information. This single file controls your name, contact details, and social links across the entire site.

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "Your Name", // e.g. "Agent Somchai"
  contact: {
    email: "your.email@example.com",
    phone: "081-XXX-XXXX",
    lineId: "@your.line.id",
    // ...
  },
  // ...
};
```

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your changes instantly.

---

## 🛠️ Customization Guide

### Changing Content & Text

The text content is separated into "Locales" for easy editing and translation.

- **English**: Edit `src/locales/en.ts`
- **Thai**: Edit `src/locales/th.ts`

These files contain the text for the Hero section, Products, Recruitment, etc.

### Changing Images

Place your images in the `public/` folder.

- Replace `profile.jpg` (or similar) with your own photo.
- Update image references in `src/app/[lang]/page.tsx` or components if filenames change.

### Adding/Removing Products

Edit the `products.items` array in `src/locales/en.ts` and `src/locales/th.ts`.
Each item represents a card in the product display.

```typescript
// Example Product Item
{
  title: "New Health Plan",
  description: "Description of your new plan...",
  features: ["Feature 1", "Feature 2"],
}
```

## 📦 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub.
2. Log in to Vercel and "Import Project" from GitHub.
3. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
