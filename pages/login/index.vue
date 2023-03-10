<script lang="ts" setup>
import { VNodeRef } from 'vue'
import { LoginPayload } from '~/store/login'

definePageMeta({
  layout: 'anonymous'
})

const loginForm = ref<VNodeRef | null>(null)
const payload = reactive<LoginPayload>({ username: 'abo_admin', password: '' })

const authenticationStore = useAuthenticationStore()
const { isLoading, currentUser } = storeToRefs(authenticationStore)
const shouldVerify = useCookie('__shouldVerify')

if (shouldVerify.value) {
  await authenticationStore.fetchMe()
  if (currentUser.value.isLoggedIn) { navigateTo('/') }
}

const rules = {
  isRequired: (v: string) => !!v || '未入力です。'
}

async function login () {
  const { valid } = await loginForm.value?.validate()
  if (!valid) { return }

  await authenticationStore.login(payload)
}
</script>
<template>
  <div class="page-login">
    <div class="wrapper">
      <h1 class="title">
        ログイン
      </h1>
      <v-form ref="loginForm" class="login-form">
        <v-text-field
          v-model.trim="payload.username"
          type="text"
          class="input -usermame"
          :hide-details="false"
          :rules="[rules.isRequired]"
        >
          <template #prepend>
            <label class="label">ログインID</label>
          </template>
        </v-text-field>
        <v-text-field
          v-model="payload.password"
          type="password"
          class="input -password"
          :hide-details="false"
          variant="outlined"
          :rules="[rules.isRequired]"
        >
          <template #prepend>
            <label class="label">パスワード</label>
          </template>
        </v-text-field>
      </v-form>
      <div class="action">
        <v-btn
          :loading="isLoading"
          class="button"
          type="submit"
          @click="login"
        >
          ログイン
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-login {
  > .wrapper {
    width: 460px;
    margin: 8% auto auto;
    background-color:rgba(var(--v-theme-on-primary));
    padding: 40px;
    border-radius: 8px;
  }
  > .wrapper > .title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  > .wrapper > .login-form {
    margin-top: 30px;
  }
  > .wrapper > .action {
    text-align: center;
  }
  > .wrapper > .action > .button {
    margin-top: 20px;
    width: 220px;
    height: 52px;
  }
}
.login-form {
  > .input {
    margin-top: 5px
  }
  > .input:deep(.v-input__prepend) {
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
