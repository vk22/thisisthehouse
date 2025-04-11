<template>
  <section class="about-text" id="about">
    <h1>The House Project</h1>
    <p>We are a private collective of investors and design visionaries creating one-of-a-kind homes in exceptional locations — from the coastlines of Spain and Montenegro to the tropics of Thailand and the hills of California.</p>
    <p>Each residence blends soulful modern architecture with natural light, sculptural lines, and timeless materials — built for beauty, efficiency, and lasting value.</p>
    <p>We build on elevated sites with breathtaking views of the sea and mountains, designing every home with the same care as if it were our own.</p>
    <p>These aren’t just properties.<br>
        They’re places you’ll want to call home.</p>
  </section>
</template>
    
<script setup>
import { onMounted, ref, watch } from "vue";
  const props = defineProps({
    dataReady: { type: Boolean, required: true }
  })
</script>
  
<style lang="scss" scoped>
@import "/assets/scss/base.scss";

.about-text {
    text-align: center;
    margin: 0 auto;

    h1 {
      padding: 2rem 0 3rem;
    }

    @include for-phone-only {
      padding: 2rem 1rem 2rem;
      width: 100vw;
    }
    @include for-tablet-portrait-up {
      padding: 3rem 0 5rem;
      width: 100vw;
    }
    @include for-desktop-up {
      padding: 3rem 0 5rem;
      width: 50vw;
    }
  }
</style>