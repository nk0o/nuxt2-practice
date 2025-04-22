<template>
  <NuxtLink
    :to="buttonHref"
    :class="[
      'inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden',
      className,
    ]"
  >
    {{ buttonText }}
  </NuxtLink>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    buttonText: String,
    buttonHref: {
      type: String,
      default: 'javascript:void(0);'
    },
    className: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped></style>
