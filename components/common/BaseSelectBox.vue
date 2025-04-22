<template>
  <select
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="mt-1 rounded-sm border-gray-300 text-sm"
  >
    <option value="" disabled hidden>{{ placeholder }}</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "BaseSelectBox",
  props: {
    id: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "선택해주세요",
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
