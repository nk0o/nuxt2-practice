<template>
  <!-- 시즌 한정 상품 메인 페이지 -->
  <div class="p-4"></div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { NuxtAxiosInstance } from "@nuxtjs/axios";
export default defineComponent({
  async asyncData({ $axios }: { $axios: NuxtAxiosInstance }) {
    const products = await $axios.$get("/products?limit=6");
    return { products };
  },
  setup() {
    return {};
  },
});
</script>
