import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'game',
      meta: [{ name: 'description', content: ' site' }]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/scss/vuetify.override.scss',
    '@/assets/scss/main.scss'
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          'storeToRefs'
        ]
      }
    ],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config.plugins?.push(
          vuetify({
            styles: {
              configFile: './assets/scss/vuetify.settings.scss'
            }
          })
        )
      })
    }
  ],
  imports: {
    dirs: ['store', 'utils']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/utils/_mixins.scss";'
        }
      }
    }
  },
  sourcemap: {
    server: false,
    client: false
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL
    }
  }
})
