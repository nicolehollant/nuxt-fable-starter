// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['@nuxt-fable/layer'],
  nuxtStories: {
    autoStoriesGlob: ['./components/**/*.vue'],
  },
});
