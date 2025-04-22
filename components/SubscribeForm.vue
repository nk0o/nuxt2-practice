<template>
  <!-- 알림 신청 폼 -->
  <form class="border p-4 rounded shadow">
    <label class="block mb-2">이메일을 입력하세요:</label>
    <input type="email" class="border p-2 w-full mb-2" placeholder="your@email.com" />
    <button class="bg-green-500 text-white px-4 py-2 rounded">알림 신청</button>
  </form>
</template>

<script>
export default {
  name: 'SubscribeForm',
}
</script>