<script setup>
import Header from '~/components/Header.vue';
import { useStore } from "@/store/projects";
const store = useStore();
const projects = store.getProjects;

const route = useRoute();
const routeID = route.params.id;
const project = projects.find(item => item.id === routeID);

const dataReady = ref(true);

useSeoMeta({
    title: () => project.title,
    description: () => project.description,
    ogTitle: () => project.title,
    ogDescription: () => project.description,
    ogImage: () => `https://thisisthehouse.com/${project?.thumbnail}`,
    ogImageSecureUrl: () => `https://thisisthehouse.com/${project?.thumbnail}`,
    ogImage_alt: () => project.title,
    ogType: () => "article",
    ogUrl: () => `https://thisisthehouse.com/projects/${project.id}`,
    twitterCard: () => "summary_large_image",
    twitterTitle: () => project.title,
    twitterDescription: () => project.description,
    twitterImage: () => project.thumbnail,
    ogUpdated_time: () => +new Date(),
})

</script>

<template>
  <div class="project-page">
  <Header :dataReady="dataReady" :isScrolled="true"></Header>

  <section id="projects">
    <AnimatedComponent :delay="250" :animation-type="'slideup'"
      :index="index">
      <ProjectItem :link="project.link" :slides="project.images" :title="project.title">
          <template #place>{{ project.place }}</template>
          <template #title>{{ project.title }}</template>
          <template #text><div v-html="project.text"></div></template>
      </ProjectItem>
    </AnimatedComponent>
  </section>
  <Footer></Footer>
  </div>
</template>

<style lang="scss">

.project-page {
  padding-top: 90px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  @include for-phone-only {
    padding-top: 90px;
  }
  @include for-tablet-portrait-up {
    padding-top: 100px;
  }

}

.logo {
  display: block;
}

@media (min-width: 1024px) {

}
</style>
