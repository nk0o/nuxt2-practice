<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <base-button
      button-text="메인화면으로 이동"
      button-href="/"
      class-name="btn_go_home"
    />
  </div>
</template>

<script>
export default {  
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
