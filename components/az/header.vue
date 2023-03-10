<script lang="ts" setup>
const authenticationStore = useAuthenticationStore()
const { currentUser } = storeToRefs(authenticationStore)

async function logout () {
  await authenticationStore.logout()
}
</script>
<template>
  <header class="az-header">
    <nuxt-link to="/" class="logo">
      <img src="/images/logo.png" class="image" alt="logo">
    </nuxt-link>
    <v-spacer />
    <div v-if="!!currentUser.isLoggedIn" class="actions">
      <nuxt-link to="/" class="action -account">
        <v-icon icon="mdi-account-circle-outline" class="icon" />
        <span class="name">{{ currentUser.name }}</span>
      </nuxt-link>
      <nuxt-link external class="action -logout" @click="logout">
        ログアウト
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.az-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  > .logo > .image {
    margin-top: 10px;
    width: 160px;
  }
  > .actions {
    gap: 0.5rem;
  }
  > .actions > .action {
    padding: 0 12px;
    &:hover {
      color: rgb(var(--v-theme-primary));
      cursor: pointer;
    }
  }
  > .actions > .action.-account {
    border-right: thin solid rgb(var(--v-theme-text-placeholder));
  }
  > .actions > .action.-account > .icon {
    margin-right: 8px;
  }
  > .actions > .action.-logout {
    font-weight: 700;
    color: rgb(var(--v-theme-primary));
  }
}
</style>
