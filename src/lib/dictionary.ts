import "server-only";
import type { Locale } from "@/i18n-config";

const dictionaries = {
  en: () => import("@/locales/en").then((module) => module.en),
  th: () => import("@/locales/th").then((module) => module.th),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
