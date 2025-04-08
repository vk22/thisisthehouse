<template>
    <section class="hero">
        <div class="hero__content">
            <div class="hero-title">
                Homes Designed<br>to Be Lived In
            </div>
            <div class="hero-subtitle">
                Not just built — crafted
            </div>
        </div>    
        <div class="hero__bg">
            <img src="/img/top-img.jpg" alt="">
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
@import "/assets/scss/base.scss";
   
.hero {
    position: relative;
    background-color: #081427;
    height: 80vh;
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
                font-size: 3.5rem;
                line-height: 3.5rem;
            }

            @include for-tablet-portrait-up {
                font-size: 5rem;
                line-height: 5.5rem;
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
                line-height: 1.25rem;
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