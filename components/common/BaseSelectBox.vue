<template>
  <select
    :id="id"
    v-model="selectedOption"
    :name="name"
    class="w-full mt-1 rounded-sm border border-solid border-gray-300 text-sm"
    @change="selectChange()"
  >
    <option selected disabled hidden>{{ placeholder }}</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "BaseSelectBox",
  props: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "옵션을 선택하세요.",
    },
  },
  setup(props, { emit }) {
    const selectedOption = ref(props.placeholder);

    const selectChange = () => {
      emit("select-change", selectedOption.value);
    };
    return {
      selectChange,
      selectedOption,
    };
  },
});
</script>

<style scoped>
select {
  cursor: pointer;
}
</style>
