<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <h1>Sign In</h1>
            <p class="text-medium-emphasis">
              Enter your details to get started
            </p>

            <VForm class="mt-7" @submit.prevent="submit">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="name">User Name</label>
                <VTextField
                  id="name"
                  v-model="username"
                  prepend-inner-icon="fluent:mail-24-regular"
                  name="name"
                  type="name"
                />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password">Password</label>
                <VTextField
                  id="password"
                  v-model="password"
                  prepend-inner-icon="fluent:password-20-regular"
                  name="password"
                  type="password"
                />
              </div>
              <div v-show="err" class="mt-1" style="color: red;">
                Username or password not correct !
              </div>
              <div class="mt-5">
                <VBtn type="submit" block min-height="44" class="gradient primary">
                  Sign In
                </VBtn>
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <NuxtLink
                to="/reset-password"
                class="font-weight-bold text-primary"
              >
                Forgot password?
              </NuxtLink>
            </p>
            <p class="text-body-2 mt-4">
              <span>Don't have an account?
                <NuxtLink
                  to="/signup"
                  class="font-weight-bold text-primary"
                >Sign Up</NuxtLink></span>
            </p>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
const userStore = useUserStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const err = ref(false)

const submit = async () => {
  if (username.value && password.value) {
    err.value = false
    const dataLogin = {
      username: username.value,
      password: password.value
    }
    try {
      await userStore.login(dataLogin.username, dataLogin.password)
      const userCurrent = userStore.currentUser
      localStorage.setItem('accessToken', JSON.stringify(userCurrent.token))
      router.push('/home')
    } catch (e) {
      err.value = true
    }
  } else {
    err.value = true
  }
}
</script>
