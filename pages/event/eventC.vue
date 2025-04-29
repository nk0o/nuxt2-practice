<template>
  <div>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";

  const todoId = ref(1);
  const todoData = ref(null);

  async function fetchData() {
    todoData.value = null;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    todoData.value = await res.json();
  }

  fetchData();

  watch(todoId, (todoId) => {
    todoId++;
    fetchData(todoId);
  });
</script>
