import { ui, defaultLang, type Language, type TranslationKey } from "./ui";

/**
 * Get the language from the URL path
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/**
 * Create a translation function for a specific language
 */
export function useTranslations(lang: Language) {
  return function t(
    key: TranslationKey,
    params?: Record<string, string | number>
  ): string {
    let text = ui[lang][key] || ui[defaultLang][key] || key;

    // Replace parameters like {version} with actual values
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }

    return text;
  };
}

/**
 * Create a URL for a different language
 */
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: Language): string {
    // Remove current lang prefix if exists
    const pathWithoutLang = path.replace(/^\/(es|en)/, "");
    // Add target lang prefix
    return `/${targetLang}${pathWithoutLang || ""}`;
  };
}

/**
 * Get all available languages with their names
 */
export function getLanguages() {
  return Object.entries(ui).map(([code, _]) => ({
    code: code as Language,
    name: code === "es" ? "Español" : "English",
    flag: code === "es" ? "🇪🇸" : "🇺🇸",
  }));
}
