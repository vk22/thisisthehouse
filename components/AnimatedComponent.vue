<template>
    <div ref="target" :class="{'visible': animate }">
        <transition :name="animationType">
            <div v-appear="animate" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    delay: Number,
    animationType: String
  })

// withDefaults(defineProps<{ animationType?: string }>(), { animationType: 'fade' });

const target = ref();
const animate = ref(false);



onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            // console.log('entry ', entry.isIntersecting, entry.intersectionRatio)
            if (entry.isIntersecting) {
                // setTimeout(() => {
                //     animate.value = entry.isIntersecting;
                //     observer.unobserve(entry.target);
                // }, props.delay);
                entry.target.classList.add('animate-delay');
            }
        },
        {
            threshold: 0.25
        }
    );
    observer.observe(target.value);
});
</script>



<style scoped>
.animated-component.fade-enter-from,
.animated-component.slideup-enter-from {
    transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* slideup animation */
.slideup-enter-active,
.slideup-leave-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 1s ease;
}

.slideup-enter-from,
.slideup-leave-to {
    opacity: 0;
    transform: translateY(50px);
}


</style>