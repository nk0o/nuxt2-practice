export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt2-practice",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "nuxt2 연습해보기" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://www.hyperui.dev/components.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css", "@/assets/scss/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios.ts", mode: "client" }, // client 전용
    { src: "~/plugins/gsap.ts", mode: "client" }, // client 전용
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components/common",
      pathPrefix: false, // true로 하면 <CommonBaseButton> 이런 식으로 호출해야 함
    },
    {
      path: "~/components/event1",
      pathPrefix: false,
    },
    {
      path: "~/components/forms",
      pathPrefix: false,
    },
    {
      path: "~/components/layout",
      pathPrefix: false,
    },
    {
      path: "~/components/modals",
      pathPrefix: false,
    },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: "https://fakestoreapi.com", // 실제 API URL로 설정
    //사용할때 //$axios.$get('/products')
    //다른 url인 경우$axios.$get('https://another-api.com/otherdata')
  },
};
