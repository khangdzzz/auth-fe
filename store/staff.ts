export interface Staff {
  id?: string;
  name?: string;
  namekana?: string;
  isEnabled?: Boolean;
}

export const useStaffStore = defineStore('staff', () => {
  const { $apis } = useNuxtApp()
  const staffs = ref<Staff[]>([])
  const itemsPerPage = ref<number>(10)

  async function fetchStaffs () {
    const allStaffs = await $apis.abo.get('staffs').json()
    staffs.value = allStaffs
    itemsPerPage.value = allStaffs.length
  }

  return { staffs, itemsPerPage, fetchStaffs }
})
