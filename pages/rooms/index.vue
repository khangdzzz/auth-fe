<script lang="ts" setup>
const headers = [
  { title: '会議室番号', key: 'id', width: '110' },
  { title: '会議室名', key: 'name' },
  { title: '基本料金（税抜）', key: 'basicPrice', width: '150' },
  { title: '延長料金（税抜）', key: 'extensionPrice', width: '150' },
  { title: '全日料金（税抜）', key: 'allDayPrice', width: '150' },
  { title: '小計区分', key: 'subtotalType', align: 'start', width: '110' },
  { title: '', key: 'actions', sortable: false, align: 'end', width: '170' }
]
const roomStore = useRoomStore()
const { rooms, itemsPerPage } = storeToRefs(roomStore)

await roomStore.fetchRooms()
</script>
<template>
  <div class="page-room">
    <h1 class="title">
      会議室一覧
    </h1>
    <div class="actions">
      <v-btn class="button">
        新規登録
      </v-btn>
    </div>
    <v-data-table
      class="table-room"
      :headers="headers"
      :items="rooms"
      :items-per-page="itemsPerPage"
    >
      <template #[`item.name`]="{ item }">
        <div class="col -roomname">
          <p class="name">
            {{ item.raw.name }}
          </p>
          <p class="displayname">
            印刷名称：{{ item.raw.displayName || "-" }}
          </p>
        </div>
      </template>
      <template #[`item.basicPrice`]="{ item }">
        {{
          !!item.raw.roomCharge?.basicPrice
            ? `${formatPrice(item.raw.roomCharge?.basicPrice)}円`
            : "-"
        }}
      </template>
      <template #[`item.extensionPrice`]="{ item }">
        {{
          !!item.raw.roomCharge?.extensionPrice
            ? `${formatPrice(item.raw.roomCharge?.extensionPrice)}円`
            : "-"
        }}
      </template>
      <template #[`item.allDayPrice`]="{ item }">
        {{
          !!item.raw.roomCharge?.allDayPrice
            ? `${formatPrice(item.raw.roomCharge?.allDayPrice)}円`
            : "-"
        }}
      </template>
      <template #[`item.subtotalType`]="{ item }">
        {{ subtotalTypes.labelOf(item.raw.roomCharge?.subtotalType) }}
      </template>
      <template #[`item.actions`]="{ item }">
        <v-btn
          variant="plain"
          color="primary"
          density="compact"
          prepend-icon="mdi-pencil"
          :ripple="false"
          :to="`/rooms/${item.raw.id}`"
        >
          編集する
        </v-btn>
      </template>
      <template #bottom />
    </v-data-table>
  </div>
</template>
<style lang="scss" scoped>
.page-room {
  margin: 30px 80px;
  > .title {
    font-size: 22px;
    line-height: 22px;
    font-weight: 700;
  }
  > .table-room {
    max-height: calc(100vh - 220px);
    margin-top: 20px;
  }
  > .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    > .button {
      padding: 8px 30px;
    }
  }
}
.table-room {
  &:deep(.col) {
    > .name {
      font-weight: 700;
    }
    > .displayname {
      font-size: 12px;
    }
  }
}
</style>
