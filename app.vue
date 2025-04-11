<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'THE HOUSE PROJECT',
  ogTitle: 'THE HOUSE PROJECT',
  description: 'Crafted With Ownership',
  ogDescription: 'Crafted With Ownership',
  ogUrl: 'https://thisisthehouse.com/',
  ogType: 'website',
  ogImage: 'https://thisisthehouse.com/img/top-img.jpg'
})
</script>

<style lang="scss">
@import "/assets/scss/base.scss";

</style>
