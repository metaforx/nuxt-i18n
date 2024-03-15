export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  srcDir: 'src/',
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'de',
    locales: [
      {
        code: 'de',
        name: 'Deutsch',
        iso: 'de-CH',
        file: 'de.ts',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.ts',
      },
    ],
    lazy: false,
    langDir: '../locales/',
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: {
      contact: {
        en: '/contact', // -> /contact
        de: '/kontakt', // -> /kontakt
      },
      work: {
        en: '/work', // -> /work
        de: '/arbeiten', // -> /arbeiten
      },
      'work/index': {
        en: '/work', // -> /work
        de: '/arbeiten', // -> /arbeiten
      },
      'work/[slug]': {
        en: '/work/[slug]', // -> /work
        de: '/arbeiten/[slug]', // -> /arbeiten
      },
      'work/advanced': {
        en: '/work/advanced', // -> /work
        de: '/arbeiten/fortgeschritten', // -> /arbeiten
      },
    },
  },
  experimental: {
    scanPageMeta: true,
  }
})