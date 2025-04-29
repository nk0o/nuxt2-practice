import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

const axiosPlugin: Plugin = ({ $axios }: { $axios: NuxtAxiosInstance }) => {
  $axios.onRequest((config) => {
    console.log('Request made to: ' + config.url)
  })
}

export default axiosPlugin