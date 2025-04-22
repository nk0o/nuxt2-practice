<template>
  <!-- 상품 카드 컴포넌트 -->
  <a href="#" class="group relative block bg-black" :class="className">
    <img
      :alt="productTitle"
      :src="productImg"
      class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div class="relative p-4 sm:p-6 lg:p-8">
      <p class="text-xl font-bold text-white sm:text-2xl">{{ productTitle }}</p>

      <div class="mt-32 sm:mt-48 lg:mt-64">
        <div
          class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p class="text-sm text-white">
            {{ productDescription }}
          </p>
          <p class="text-sm text-white">
            ￦ {{ productPrice }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productTitle: {
      type: String,
      default: "상품 이름",
    },
    productDescription: {
      type: String,
      default: "상품 설명입니다.",
    },
    productImg: {
      type: String,
      default: "상품 이미지경로",
    },
    productPrice: {
      type: Number,
      default: "상품 가격",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.hover-expand:hover {
  &-child {
    translate: tranform(-4px, -4px);
  }
}
</style>
