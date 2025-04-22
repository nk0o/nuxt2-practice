<template>
  <!-- 시즌 한정 상품 메인 페이지 -->
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">시즌 한정 상품 소개</h1>
    <ProductCard />
    <SubscribeForm />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import SubscribeForm from '@/components/SubscribeForm.vue'

export default {
  components: {
    ProductCard,
    SubscribeForm,
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get('https://fakestoreapi.com/products?limit=6')
    return { products }
  },
}
</script>
