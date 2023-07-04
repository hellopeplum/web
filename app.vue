<template>
  <div class="section pt-5">
    <pep-navbar />

    <NuxtPage />
    <pep-footer />
  </div>
</template>

<script setup>
  
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap');

* {
  font-family: 'Figtree', sans-serif;
}

html {
  background-color: #ffd202;
  scroll-behavior: smooth;
}

body {
  max-width: 100vw;
  /* min-height: calc(100vh - var(--wp-admin--admin-bar--height, 0px)); */
  background-color: #fefefe;
  /* grid-template-rows: auto 1fr; */
  margin: 0;
  /* display: grid; */
  overflow-x: hidden;
  overflow-y: auto;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>