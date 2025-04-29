<template>
  <section class="product__list">
    <div class="product__list--header">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        Product Collection
      </h2>
      <p class="mt-4 max-w-md text-gray-500">상품리스트페이지 입니다.</p>
    </div>

    <div class="mt-8 block lg:hidden">
      <button
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 rtl:rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>

    <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div class="hidden space-y-4 lg:block">
        <div>
          <label for="SortBy" class="block text-xs font-medium text-gray-700">
            SortBy
          </label>
          <BaseSelectBox
            :id="'SortBy'"
            :options="sortOptions"
            :placeholder="'보기 순서'"
            @select-change="handleSortChange"
          ></BaseSelectBox>
        </div>
      </div>

      <div class="lg:col-span-3">
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
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  toRefs,
} from "@nuxtjs/composition-api";

import { Product } from "@/types/product";

export default defineComponent({
  name: "ProductCardList",
  setup() {
    const state = reactive({
      products: [] as Product[],
    });

    const sortOptions = ref([
      { value: "Title, ASC", label: "상품오름차순" },
      { value: "Title, DESC", label: "상품내림차순" },
      { value: "Price, ASC", label: "가격오름차순" },
      { value: "Price, DESC", label: "가격내림차순" },
    ]);

    const actions = {
      handleSortChange: (selected: String) => {
        if (selected == "Title, ASC") {
          state.products.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selected == "Title, DESC") {
          state.products.sort((a, b) => b.title.localeCompare(a.title));
        } else if (selected == "Price, ASC") {
          state.products.sort((a, b) => a.price - b.price);
        } else if (selected == "Price, DESC") {
          state.products.sort((a, b) => b.price - a.price);
        }
      },
    };

    onMounted(async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=6");
      const data = await res.json();
      state.products = data;
    });

    return {
      ...toRefs(state),
      sortOptions,
      ...actions,
    };
  },
});
</script>

<style scoped></style>
