<template>
  <div class="container">
    <Header/>

    <main>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
