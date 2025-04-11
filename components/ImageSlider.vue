<template>
  <div class="gallery-container">
    <div class="gallery-nav">
      <div class="gallery-nav__arrow swiper-prev" @click="swiper.prev()" v-if="slides.length">
        <img src="/img/arrow-l2.svg" alt="" />
      </div>
      <!-- <h2>Gallery</h2> -->
      <div class="gallery-nav__arrow swiper-next" @click="swiper.next()" v-if="slides.length">
        <img src="/img/arrow-r2.svg" alt="" />
      </div>
    </div>

    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
          <img :src="slide" alt="">
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>

</template>

<script setup>
const props = defineProps({
  slides: { type: Array, required: true }
})
const containerRef = ref(null)
// const slides = [
//   "/img/thalassa-1.jpg",
//   "/img/kotor-1.jpg",
//   "/img/thailand-1.jpg",
// ];

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>



<style lang="scss">
@import "/assets/scss/base.scss";

.gallery-container {
  position: relative;
  width: 100%;
}

swiper-container {
  width: 100%;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.gallery-nav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  &__arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) ;
    width: 42px;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 15px;
    display: flex;
    border-radius: 1px;
    @include base-transition(background-color, 0.25s);

    &.swiper-next {
      
      @include for-phone-only {
        right: 0rem;
        border-radius: 0px;
      }
      @include for-tablet-portrait-up {
        right: 2rem;
      }
    }

    &.swiper-prev {
      @include for-phone-only {
        left: 0rem;
        border-radius: 0px;
      }
      @include for-tablet-portrait-up {
        left: 2rem;
      }
    }

    &.hide {
      opacity: 0.1;
      pointer-events: none;
    }

    &:hover {
      // opacity: 0.5;
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
}
</style>