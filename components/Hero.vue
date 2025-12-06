<template>
    <section class="hero">
        <div class="hero__content fadeUpBlock" :class="{'show': dataReady}">
            <div class="hero-title" style="white-space: pre-line;">
                {{ $t('hero.title') }}
            </div>
            <div class="hero-subtitle">
               {{ $t('hero.subtitle') }}
            </div>
        </div>    
        <div class="hero__bg fadeUpBlock" :class="{'show': dataReady}">
            <img src="/img/top-img.jpg" alt="" loading="lazy" />
        </div>
    </section>
</template>
        
<script setup>
import { onMounted, ref, watch } from "vue";
const props = defineProps({
    dataReady: { type: Boolean, required: true }
})

onMounted(() => {
   
});
</script>
      
<style lang="scss" scoped>


.fadeUpBlock {
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease;
    &.show {
        transform: translateY(0);
        opacity: 1;
    }
}

.fadeUpBlock2 {
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease .5s;
    &.show {
        transform: translateY(0);
        opacity: 1;
    }
}

   
.hero {
    position: relative;
    background-color: #fff;
    height: 70vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    &__content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        padding: 4rem;
        text-align: center;

        @include for-phone-only {
            padding: 3rem 1rem;
            width: 100vw;
        }

        @include for-tablet-portrait-up {
            padding: 4rem;
            width: 70vw;
        }


        .hero-title {
            text-transform: uppercase;
            margin-bottom: 2rem;
            font-weight: 600;

            @include for-phone-only {
                font-size: 2.5rem;
                line-height: 3rem;
            }

            @include for-tablet-portrait-up {
                font-size: 3.5rem;
                line-height: 4rem;
            }

        }

        .hero-subtitle {
            text-transform: uppercase;

            @include for-phone-only {
                font-size: 1rem;
                line-height: 1.1rem;
            }

            @include for-tablet-portrait-up {
                font-size: 1.25rem;
                line-height: 1.35rem;
            }

        }
    }

    &__bg {
        
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}    
</style>