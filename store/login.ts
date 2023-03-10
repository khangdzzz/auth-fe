export interface LoginPayload {
  username: string;
  password: string;
}

export interface CurrentUser {
  username: string;
  name: string;
  isLoggedIn: boolean;
}

const defaultCurrentUser = {
  username: '',
  name: '',
  isLoggedIn: false
}

export const useAuthenticationStore = defineStore('auth', () => {
  const { $apis } = useNuxtApp()
  const isLoading = ref<boolean>(false)
  const currentUser = ref<CurrentUser>(defaultCurrentUser)

  async function login (payload: LoginPayload) {
    isLoading.value = true
    const userCredential = await $apis.abo
      .post('login', { json: payload })
      .json()
      .finally(() => {
        isLoading.value = false
      })
    currentUser.value = { ...userCredential, isLoggedIn: true }

    navigateTo('/')
  }

  async function logout () {
    await $apis.abo.post('logout').json()
    currentUser.value = defaultCurrentUser
    navigateTo('login')
  }

  async function fetchMe () {
    const userCredential = await $apis.abo.get('me').json()
    currentUser.value = { ...userCredential, isLoggedIn: true }
  }

  return { currentUser, isLoading, login, logout, fetchMe }
})
