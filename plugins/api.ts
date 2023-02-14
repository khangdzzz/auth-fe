import ky from 'ky-universal'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const apis: any = {
    abo: createAPI(runtimeConfig.API_BASE_URL)
  }

  return {
    provide: { apis }
  }
})

function createAPI (baseURL: string) {
  return ky.create({
    prefixUrl: baseURL,
    timeout: 30000,
    credentials: 'include'
  })
}
