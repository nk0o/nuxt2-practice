import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}