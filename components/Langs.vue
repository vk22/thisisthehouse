<script setup>
// const { locale, locales } = useI18n();
// const switchLocalePath = useSwitchLocalePath();

const current = computed(() =>
  locales.value.find((l) => l.code === locale.value)
);
const others = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);
</script>

<template>
  <div
    class="relative inline-block group select-none cursor-pointer mt-[.1rem]"
  >
    <!-- <div class="active-lang">
      <b>{{ current.code }}</b>
    </div> -->

    <div class="langs">
      <!-- <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        class="lang"
        :class="{ active: current.code === l.code }"
      >
        {{ l.code }}
      </NuxtLink> -->
      <a class="lang" href="/">EN</a>
      <a class="lang" href="/zh">中文</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.langs {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1rem;

  .lang {
    padding: 0 0.25rem;
  }

  .active {
    font-weight: bold;
  }
}

.main-header .langs {

  @include for-phone-only {
    display: none;
  }

  @include for-tablet-portrait-up {
    display: flex;
  }
}
</style>