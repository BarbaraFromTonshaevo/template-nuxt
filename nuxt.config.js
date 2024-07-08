// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    css: {
       postcss: {
          plugins: [
             postCssSortMediaQueries({ sort: "desktop-first" }),
             autoprefixer({
                overrideBrowserslist: ["last 3 versions", "ie >= 10"],
             }),
          ],
       },
       preprocessorOptions: {
          scss: {
             additionalData:
                '@use "~/assets/scss/_mixins.scss" as *; @import "~/assets/scss/_variables.scss";',
          },
       },
    },
 },
})
