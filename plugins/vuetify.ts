import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Vuetify comes with vite-plugin-vuetify that enable automatic treeshaking.
// Vuetify components and directives will be automatically imported

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    defaults: {
      VButton: {
        color: 'primary'
      },
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
            surface: '#174E69',
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
