import { Plugin } from '@nuxt/types'
import gsap from 'gsap'

const gsapPlugin: Plugin = (_, inject) => {
  inject('gsap', gsap)
}

export default gsapPlugin