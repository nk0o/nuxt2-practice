<template>
  <!-- 시즌 한정 상품 메인 페이지 -->
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">시즌 한정 상품 소개</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const products = await $axios.$get('https://fakestoreapi.com/products?limit=1')
    return { products }
  },
}
</script>
