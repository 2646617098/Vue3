<template>
  <div>
    <!-- <mainPage/> -->

    <Header_P />
    <Carousel_P />
    <Layout_P />
    <CSV_P />
    <nav>
      <RouterLink to="/"><h1>另一个首页</h1></RouterLink>
      <RouterLink to="/about"><h1>关于</h1></RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
  <Carousel_P />
</template>

<script setup>
import Carousel_P from './Carousel_P.vue';
import Header_P from './Header_P.vue';
import CSV_P from './CSV_P.vue';
import Layout_P from './Layout_P.vue';
// import mainPage from './mainPage.vue';
</script>

<style scoped></style>