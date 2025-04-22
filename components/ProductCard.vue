<template>
  <!-- 상품 카드 컴포넌트 -->
  <div class="border p-4 rounded shadow mb-4">
    <p class="text-lg font-semibold">[상품 이름]</p>
    <p>설명 텍스트가 여기에 들어갑니다.</p>
    <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">구매하기</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {},
}
</script>