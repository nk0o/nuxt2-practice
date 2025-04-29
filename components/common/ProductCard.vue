<template>
  <!-- 상품 카드 컴포넌트 -->
    <a href="#" class="group h-full block overflow-hidden">
      <img 
      :alt="productTitle"
      :src="productImg" 
      class="aspect-square w-4/5 mx-auto object-cover object-top transition duration-500 group-hover:scale-105">

      <div class="relative bg-white pt-3">
        <h3 class="text-sm leading-4 text-gray-700 group-hover:underline overflow-hidden text-ellipsis line-clamp-2">
          {{ productTitle }}
        </h3>
        <p class="pt-2 text-xs leading-4 text-gray-500 overflow-hidden text-ellipsis line-clamp-3">
          {{ productDescription }}
        </p>

        <p class="mt-2">
          <span class="sr-only"> Regular Price </span>

          <span class="tracking-wider text-gray-900">  ￦ {{ productPrice }} </span>
        </p>
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
</style>
