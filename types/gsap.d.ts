import gsap from 'gsap'

declare module '@nuxt/types' {
  interface Context {
    $gsap: typeof gsap
  }
  interface NuxtAppOptions {
    $gsap: typeof gsap
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $gsap: typeof gsap
  }
}

/* 
// Example usage in a Vue component
<template>
  <div ref="box" class="w-32 h-32 bg-blue-500"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  mounted() {
    this.$gsap.to(this.$refs.box, {
      x: 200,
      rotation: 360,
      duration: 2
    })
  }
})
</script>
 */