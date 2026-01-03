import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { getDictionary } from "@/lib/dictionary";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insurance Agent Portfolio",
  description: "Trusted life insurance agent providing health, savings, and protection plans.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navbar dict={dictionary.navbar} lang={lang} />
        {children}
        <Footer dict={dictionary.footer} />
        <Toaster />
      </body>
    </html>
  );
}
