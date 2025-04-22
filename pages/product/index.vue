<template>
  <section class="product__list">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
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
              v-model="selectedOption"
              :options="selectedOptions"
              placeholder="옵션을 선택하세요"
              id="SortBy"
              label="정렬"
            ></BaseSelectBox>
          </div>
        </div>

        <div class="lg:col-span-3">
          <ul
            class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            v-for="product in products"
            :key="product.id"
          >
            <li>
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
export default {
  name: "ProductCardList",
  props: {},
  data() {
    return {
      selectedOption: "", 
      selectOptions: [
        { value: "제목오름차순", label: "제목오름차순" },
        { value: "제목내림차순", label: "제목내림차순" },
        { value: "가격높은순", label: "가격높은순" },
        { value: "가격낮은순", label: "가격낮은순" },
      ],
    };
  },
};
</script>

<style scoped></style>
