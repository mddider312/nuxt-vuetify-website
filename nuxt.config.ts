import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [vuetify()],
  },
})
