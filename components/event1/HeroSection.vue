<template>
  <section class="hero-section">

  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "HeroSection",  
  setup(props) {
    const state = reactive({
    });
    return {
      ...toRefs(state),      
    };
  }
})
</script>

<style scoped>

</style>