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
    credentials: 'include',
    hooks: {
      afterResponse: [
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (req, options, res) => {
          if (res.status === 401) {
            window.location.href = '/login'
          }
        }
      ]
    }
  })
}
