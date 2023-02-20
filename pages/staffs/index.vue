<script lang="ts" setup>
const headers = [
  { title: '担当者番号', key: 'id', width: '150' },
  { title: '担当者名', key: 'name' },
  { title: 'ステータス', key: 'isEnabled', align: 'start' },
  { title: '', key: 'actions', sortable: false, align: 'end', width: '200' }
]
const staffStore = useStaffStore()
const { staffs, itemsPerPage } = storeToRefs(staffStore)

await staffStore.fetchStaffs()
</script>
<template>
  <div class="page-staff">
    <h1 class="title">
      担当者一覧
    </h1>
    <div class="actions">
      <v-btn class="button">
        新規登録
      </v-btn>
    </div>
    <v-data-table
      class="table-staff"
      :headers="headers"
      :items="staffs"
      :items-per-page="itemsPerPage"
    >
      <template #[`item.name`]="{ item }">
        <div class="col -name">
          <p class="namekana">
            {{ item.raw.nameKana }}
          </p>
          <p class="name">
            {{ item.raw.name }}
          </p>
        </div>
      </template>
      <template #[`item.isEnabled`]="{ item }">
        <v-chip
          size="small"
          :color="item.raw.isEnabled ? 'primary' : 'text-placeholder'"
        >
          {{ !!item.raw.isEnabled ? '有効' : '無効' }}
        </v-chip>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-btn
          variant="plain"
          color="primary"
          density="compact"
          append-icon="mdi-chevron-right"
          :ripple="false"
          :to="`/staffs/${item.raw.id}`"
        >
          詳細を見る
        </v-btn>
      </template>
      <template #bottom />
    </v-data-table>
  </div>
</template>
<style lang="scss" scoped>
.page-staff {
  margin: 30px 80px;
  > .title {
    font-size: 22px;
    line-height: 22px;
    font-weight: 700;
  }
  > .table-staff {
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
.table-staff {
  &:deep(.col.-name) {
    > .namekana {
      font-size: 12px;
      color: rgb(var(--v-theme-text-placeholder));
    }
  }
}
</style>
