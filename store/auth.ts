import { defineStore } from 'pinia'
import { apis } from '../apis'

interface User {
  userName: string
  password?: string
  token?: string
  role?: string
  dataPlayer?: string
  player: {
    totalMoney?: number
    dateLogin?: string
  }
}

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<User>()
  const isResgister = ref(false)
  const register = async (username:string, password: string) => {
    const user: User | null | undefined = await apis.gameApi
      ?.post('user/register', { json: { username, password } })
      .json<User>()
      .catch(() => null)
    isResgister.value = !!user
  }

  const login = async (username:string, password: string) => {
    const user: User | null | undefined = await apis.gameApi
      ?.post('user/login', { json: { username, password } })
      .json<User>()
      .catch(() => null)
    apis.gameApi = apis.gameApi!.extend({
      headers: {
        authorization: `Bearer ${user?.token}`
      }
    })
    if (user) { currentUser.value = user }
  }

  const logout = async () => {
    await apis.gameApi
      ?.post('user/logout')
      .json<User>()
      .catch(() => null)
  }

  return { currentUser, isResgister, register, login, logout }
})
