// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-windicss', '@nuxt/content'],
  plugins: [
    {
      src: '~/plugins/vercel',
      mode: 'client',
    },
  ],
});
