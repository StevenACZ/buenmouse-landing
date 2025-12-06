// Re-export everything from i18n modules
export {
  languages,
  defaultLang,
  ui,
  type Language,
  type TranslationKey,
} from "./ui";
export {
  getLangFromUrl,
  useTranslations,
  useTranslatedPath,
  getLanguages,
} from "./utils";
