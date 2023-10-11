/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  i18next: {
    debug: true,
    initImmediate: false,
    // backend: {
    //   loadPath: './src/locales/{{lng}}.json',
    // },
    detection: {},
  },
  i18nextServerPlugins: {
    fsBackend: 'i18next-fs-backend',
    LanguageDetector: 'i18next-browser-languagedetector',
  },

};
