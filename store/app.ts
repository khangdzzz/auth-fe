export const useAppStore = defineStore('app', () => {
  const meta = reactive({
    title: 'Home'
  })

  return { meta }
})
