<template>
  <section class="product-section">
    <div class="container mx-auto py-8">
      <h1 class="text-2xl font-bold mb-4">시즌 한정 상품 소개</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="lg:col-span-4">
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="product in products" :key="product.id">
              <ProductCard
                :product-title="product.title"
                :product-description="product.description"
                :product-img="product.image"
                :product-price="product.price"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "ProductSection",
  setup(props) {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
