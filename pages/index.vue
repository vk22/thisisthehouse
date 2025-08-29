<script setup>
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import ImageSlider from '~/components/ImageSlider.vue';
import { useStore } from "@/store/projects";
const store = useStore();

const projects = store.getProjects;
const dataReady = ref(false);
setTimeout(() => {
  dataReady.value = true
}, 500);

const modalOpened = ref(false);
const modalMessage = ref({});

const requestSent = (data) => {
  console.log('requestSent ', data)
  modalOpened.value = true;
  modalMessage.value = data;
  setTimeout(() => {
    modalOpened.value = false;
    modalMessage.value = {};
  }, 3000);
}
const closeModal = (data) => {
  modalOpened.value = false;
  modalMessage.value = {};
}


</script>

<template>
  <div class="home">
  <Header :dataReady="dataReady"></Header>
  <Hero :dataReady="dataReady"></Hero>
  <AnimatedComponent :delay="250" :animation-type="'slideup'">
    <About :dataReady="dataReady"></About>
  </AnimatedComponent>
  <!-- <ImageSlider></ImageSlider> -->
  <section id="projects">
    <AnimatedComponent :delay="250" :animation-type="'slideup'">
      <div class="section-title">
        <h2>Our Projects</h2>
      </div>
    </AnimatedComponent>
    <AnimatedComponent :delay="250" :animation-type="'slideup'" v-for="(project, index) in projects" :key="index"
      :index="index">
      <ProjectItem :link="project.link" :slides="project.images" :title="project.title">
          <template #place>{{ project.place }}</template>
          <template #title>{{ project.title }}</template>
          <template #text><div v-html="project.text"></div></template>
      </ProjectItem>
    </AnimatedComponent>
  </section>
  <AnimatedComponent :delay="250" :animation-type="'slideup'">
    <Form :dataReady="dataReady" @requestSent="requestSent"></Form>
  </AnimatedComponent>
  <Modal :modalOpened="modalOpened" :message="modalMessage" @closeModal="closeModal"></Modal>
  <Footer></Footer>
  </div>
</template>

<style lang="scss">

.home {
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
