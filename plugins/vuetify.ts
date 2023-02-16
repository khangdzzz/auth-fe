import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VDataTable } from 'vuetify/labs/VDataTable'
// Vuetify comes with vite-plugin-vuetify that enable automatic treeshaking.
// Vuetify components and directives will be automatically imported

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VDataTable
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    defaults: {
      VCheckbox: {
        hideDetails: 'auto',
        color: 'primary'
      },
      VRadio: {
        hideDetails: 'auto',
        color: 'primary'
      },
      VRadioGroup: {
        hideDetails: 'auto',
        color: 'primary'
      },
      VSelect: {
        hideDetails: 'auto',
        color: 'primary',
        density: 'compact',
        variant: 'outlined'
      },
      VTextarea: {
        hideDetails: 'auto',
        color: 'primary',
        variant: 'outlined'
      },
      VTextField: {
        hideDetails: 'auto',
        color: 'primary',
        density: 'compact',
        variant: 'outlined'
      },
      VList: {
        bgColor: '#FFFFFF'
      },
      VPagination: {
        activeColor: '#FFFFFF',
        elevation: 3,
        size: '42px',
        color: 'primary'
      },
      VDataTable: {
        height: '100%',
        fixedHeader: true,
        noDataText: 'データーが見つけられませんでした。'
      }
    },
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme: {
          dark: false,
          colors: {
            primary: '#174E69',
            background: '#f9f9f7',
            error: '#CD2B21',
            'on-primary': '#FFFFFF',
            'on-background': '#212321',
            border: '#CBCDCB',
            text: '#212321',
            'text-placeholder': '#8C8F8C'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
