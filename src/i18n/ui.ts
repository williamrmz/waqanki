import esJSON from "./common/es.json";
import enJSON from "./common/en.json";

export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: esJSON,
  en: enJSON,
} as const;

export const showDefaultLang = false;
