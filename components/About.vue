<template>
  <section class="about-text" id="about">
    <h1>The House Project</h1>
    <p>We’re a collective of private investors creating unique homes in exceptional locations — from Spain and Montenegro to Thailand and the U.S.</p>
    <p>Our focus? Modern architecture with soul, clean lines, thoughtful layouts, natural light, premium materials, and energy efficiency in every detail.</p>
    <p>We choose places with a view — often of the sea — and build as if for ourselves: with care, purpose, and lasting quality.</p>
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