// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui'
  ],
  ssr: true,
  imports: {
    presets: [
      {
        from: 'alova/client',
        imports: ['useRequest', 'usePagination'],
      },
    ],
  },
  devtools: { enabled: true },
  app: {
    keepalive: true,
  },
  // colorMode: {
  //   preference: 'system',
  //   fallback: 'light',
  // },
  css: ['~/assets/main.css'],
  ui: {
    fonts: false,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  routeRules: {
    '/devapi/**': { proxy: `${process.env.NUXT_API_BASE_URL}/**`, cors: true },
  },
  devServer: {
    port: 4100,
    host: '0.0.0.0',
  },
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: true,
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/element.scss" as element;',
        },
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '#types/*': ['./app/types/*'],
        },
        types: ['./app/types'],
      },
    },
  },
  // debug: true,
})
