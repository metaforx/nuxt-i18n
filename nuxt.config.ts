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
        de: '/kontakt', // -> /kontakt
      },
      'tree': {
        de: '/baum', // -> /arbeiten
      },
      'work/index': {
        de: '/arbeiten', // -> /arbeiten
      },
      'work-foo': {
        de: '/arbeiten/foo', // -> /arbeiten
      },
      'work/[slug]': {
        de: '/arbeiten/[slug]', // -> /arbeiten
      },
    },
  },
  experimental: {
    scanPageMeta: true,
  }
})