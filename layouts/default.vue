<template>
  <v-app class="layout-default">
    <v-app-bar>
      <az-header />
    </v-app-bar>
    <v-navigation-drawer permanent>
      <az-sidebar />
    </v-navigation-drawer>
    <v-main class="main-content">
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped>
.main-content {
  background-color: rgb(var(--v-theme-background));
}
</style>
