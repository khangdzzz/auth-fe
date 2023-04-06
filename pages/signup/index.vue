<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <h1>Sign Up</h1>
            <p class="text-medium-emphasis">
              Enter your details to get started
            </p>

            <VForm class="mt-7" @submit.prevent="submit">
              <div>
                <label class="label text-grey-darken-2" for="name">Name</label>
                <VTextField
                  id="name"
                  v-model="username"
                  prepend-inner-icon="fluent:person-24-regular"
                  name="name"
                />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password">Password</label>
                <VTextField
                  id="password"
                  v-model="password"
                  type="password"
                  prepend-inner-icon="fluent:password-20-regular"
                  name="password"
                />
              </div>
              <div v-show="err" class="mt-1" style="color: red;">
                Create fail, please check network or username user exited
                !
              </div>
              <div class="mt-5">
                <VBtn type="submit" block min-height="45" class="gradient primary">
                  Create Account
                </VBtn>
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <span>Already have an account?
                <NuxtLink to="/" class="font-weight-bold text-primary">Sign In</NuxtLink>
              </span>
            </p>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const username = ref('')
const password = ref('')
const err = ref(false)

const submit = async () => {
  if (username.value && password.value) {
    err.value = false
    const dataSignup = {
      username: username.value,
      password: password.value
    }
    try {
      await userStore.register(dataSignup.username, dataSignup.password)
      const isResgister = userStore.isResgister
      if (isResgister) {
        alert('Sign up successfully')
        router.push('/')
      } else {
        err.value = true
      }
    } catch (e) {
      console.log(e)
    }
  } else {
    err.value = true
  }
}
</script>
