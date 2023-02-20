export interface Room {
  id?: string;
  name?: string;
  roomNumber?: string;
  roomCharge?: object;
}

export const subtotalTypes = generateConstants({
  serviceFee: { value: 1, label: 'サービス料' },
  consumptionTax: { value: 2, label: '消費税' },
  nonTaxable: { value: 3, label: '非課税' }
})

export const useRoomStore = defineStore('room', () => {
  const { $apis } = useNuxtApp()
  const rooms = ref<Room[]>([])
  const itemsPerPage = ref<number>(10)

  async function fetchRooms () {
    const allRooms = await $apis.abo.get('rooms').json()
    rooms.value = allRooms
    itemsPerPage.value = allRooms.length
  }

  return { rooms, itemsPerPage, fetchRooms }
})
