export default defineNuxtConfig({
  app: {
    head: {
      title: 'Abo',
      meta: [{ name: 'description', content: 'Abo site' }]
    }
  },
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
  ],
  imports: {
    dirs: ['store']
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL
    }
  }
})
