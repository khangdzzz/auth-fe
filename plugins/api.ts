import { createAPI, apis } from '~~/apis'

export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig()
  apis.gameApi = createAPI(runtimeConfig.API_BASE_URL)
})
