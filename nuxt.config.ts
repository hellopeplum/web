// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  content:{
    markdown:{
      toc:{
        depth:3,
        searchDept:3,
      }
    },
    highlight:{
      theme:"dracula-soft"
    }
  }
})
