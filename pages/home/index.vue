<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="menu-bar">
    <div class="menuitem -money">
      Money
      <div class="totalmoney ">
        {{totalMoney}} vnd
      </div>
    </div>
    <div class="menuitem -signout">
      <NuxtLink to="/signup" class="font-weight-bold text-primary" @click="signOut">
        Sign Out
      </NuxtLink>
    </div>
  </div>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="6">
            <h1>Join game</h1>
            <p class="text-medium-emphasis">
              Enter the room id to start game
            </p>

            <VForm class="mt-7" @submit.prevent="submit">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="roomId">Room ID</label>
                <VTextField
                  id="roomId"
                  v-model="roomId"
                  prepend-inner-icon="fluent:mail-24-regular"
                  name="roomId"
                  type="roomId"
                />
              </div>
              <div class="mt-5">
                <VBtn type="submit" block min-height="44" class="gradient primary">
                  Send instructions
                </VBtn>
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <span>Don't you want to continue ?
                <NuxtLink to="/signup" class="font-weight-bold text-primary" @click="signOut">Sign Out</NuxtLink>
              </span>
            </p>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})
const userStore = useUserStore()
const totalMoney = userStore.currentUser.player.totalMoney
const roomId = ref('')

const signOut = async () => {
  try {
    localStorage.removeItem('accessToken')
    await userStore.logout()
  } catch (e) {
    console.log(e)
  }
}
const submit = async () => {
  // signOut()
}
</script>

<style lang="scss">
.menu-bar {
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  font-size: 20px;
  padding-right: 30px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  > .menuitem {
    position: relative;
    cursor: pointer;
  }
  > .menuitem > .totalmoney{
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    padding: 5px 15px;
    z-index: 5;
  }
  > .menuitem:hover {
    color: #453ace;

  }
  > .menuitem:hover >.totalmoney{
    color: red;
    transition: all 250ms;
    opacity: 1;
  }
}

</style>
