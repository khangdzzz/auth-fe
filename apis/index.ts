import ky from 'ky-universal'
import type { KyInstance } from 'ky/distribution/types/ky'

interface API {
  gameApi: null | KyInstance
}

export const apis: API = {
  gameApi: null
}
export function createAPI (baseURL: string) {
  return ky.create({
    prefixUrl: baseURL,
    timeout: 30000,
    credentials: 'include'
  })
}
