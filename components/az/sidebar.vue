<script setup>
const menus = [
  {
    label: '通常業務',
    icon: 'mdi-calendar-edit',
    children: [
      {
        label: '予約登録',
        router: '/'
      },
      {
        label: '予約照会',
        router: '/coming-soon'
      },
      {
        label: 'ロビー売上登録',
        router: '/coming-soon'
      },
      {
        label: '精算',
        router: '/coming-soon'
      }
    ]
  },
  {
    label: '管理',
    icon: 'mdi-poll',
    children: [
      {
        label: '売上',
        router: '/coming-soon'
      },
      {
        label: '顧客',
        router: '/customers'
      },
      {
        label: '商品',
        router: '/coming-soon'
      },
      {
        label: '担当者',
        router: '/staffs'
      },
      {
        label: '会議室',
        router: '/rooms'
      }
    ]
  },
  {
    label: '帳票出力',
    icon: 'mdi-calendar-text-outline',
    children: [
      {
        label: '精算明細書',
        router: '/coming-soon'
      },
      {
        label: '業務連絡書',
        router: '/coming-soon'
      },
      {
        label: '顧客一覧表',
        router: '/coming-soon'
      },
      {
        label: '売上仕訳日計表',
        router: '/coming-soon'
      },
      {
        label: '商品別売上報告書',
        router: '/coming-soon'
      },
      {
        label: '売上仕訳日計表',
        router: '/coming-soon'
      },
      {
        label: '月間売上報告書',
        router: '/coming-soon'
      },
      {
        label: '月別売上報告書',
        router: '/coming-soon'
      }
    ]
  }
]
</script>

<template>
  <v-list class="az-sidebar">
    <template v-for="(menu, index) in menus" :key="menu.router">
      <v-list-item
        v-if="!menu.children"
        :prepend-icon="menu.icon"
        :title="menu.label"
        :to="menu.router"
        class="item"
        active-class="-active"
      />
      <v-list-group v-else :value="menu.label" class="group">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            :id="`group-item-${index}`"
            :prepend-icon="menu.icon"
            :title="menu.label"
            class="item -activator"
          />
        </template>
        <v-list-item
          v-for="childMenu in menu.children"
          :key="childMenu.router"
          :title="childMenu.label"
          :to="childMenu.router"
          class="item"
          active-class="-active"
        />
      </v-list-group>
    </template>
  </v-list>
</template>

<style scoped lang="scss">
.az-sidebar {
  padding: 16px 12px;

  > .item {
    border-radius: 6px;
    padding-inline-start: 0 !important;
    font-size: 14px;
    color: rgb(var(--v-theme-text-placeholder));

    > :deep(.v-list-item__prepend) > .v-icon {
      margin-inline-end: 10px;
    }
    > :deep(.v-list-item__append) > .v-icon {
      margin-right: -16px;
      font-size: 14px;
    }
    > :deep(.v-list-item__content) > .v-list-item-title {
      font-size: 14px;
      font-weight: 700;
    }
    &.-active {
      background: rgb(var(--v-theme-primary), 0.12);

      > :deep(.v-list-item__content) > .v-list-item-title {
        color: rgb(var(--v-theme-primary)) !important;
      }
    }
  }

  > .group {
    padding: 8px 0 8px;
    font-size: 14px;
    color: rgb(var(--v-theme-text-placeholder));

    &:not(:last-child) {
      border-bottom: 0.5px solid rgb(var(--v-theme-border));
    }
  }

  > .group > .item.-activator {
    padding-left: 0;
    border-radius: 6px;
    > :deep(.v-ripple__container) {
      display: none;
    }
    > :deep(.v-list-item__prepend) > .v-icon {
      margin-inline-end: 10px;
    }
    > :deep(.v-list-item__append) > .v-icon {
      margin-right: -16px;
      font-size: 14px;
    }
    > :deep(.v-list-item__content) > .v-list-item-title {
      font-size: 14px;
      font-weight: 700;
    }
  }

  > .group > :deep(.v-list-group__items) {
    margin-bottom: 12px;
  }

  > .group > .v-list-group__items > .item {
    min-height: 44px;
    border-radius: 6px;
    padding-inline-start: 32px !important;

    > :deep(.v-list-item__content) > .v-list-item-title {
      font-size: 14px;
      font-weight: 700;
    }
    &.-active {
      background: rgb(var(--v-theme-primary), 0.12);

      > :deep(.v-list-item__content) > .v-list-item-title {
        color: rgb(var(--v-theme-primary)) !important;
      }
    }
  }
}
</style>
