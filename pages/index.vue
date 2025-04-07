<script setup>
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';

const projects = [
  { 
    place: 'Spain, Marbella ',
    img: 'img/thalassa-1.jpg',
    title: 'Villa Thalassa',
    text: "<p>Perched atop a hill in the protected Al Cuz Cuz nature reserve, Villa Thalassa enjoys uninterrupted south-facing views of the Mediterranean Sea. This 3,000 m² estate features 12 bedrooms, a fully equipped gym, sauna, private cinema, dance floor with DJ bar, spa zone, cigar lounge, and a garage for four cars.</p><p>Outside, expansive terraces and landscaped gardens surround the property, which is powered by a self-sustaining 50kW solar energy station.</p>",
    link: 'https://villathalassa.co.uk/'
  },
  {
    place: 'Montenegro, Kotor',
    img: 'img/kotor-1.jpg',
    title: 'The House',
    text: "<p>Set on a hillside above the Bay of Kotor — Europe’s southernmost fjord — The House is a residential compound of five architecturally distinct buildings.</p><p>Designed with seismic resilience in mind, the structures feature monolithic frames and brick infill. The 300 mm travertine-clad exterior walls are built over a four-layer “warm ceramics” system that ensures top-tier thermal insulation, waterproofing, and acoustic performance.</p>",
    link: 'http://thisisthehouse.me'
  }
]

</script>

<template>
  <div class="home">
  <Header></Header>
  <Hero></Hero>
  <About></About>
  <AnimatedComponent delay="250" animation-type="slideup" v-for="(project, index) in projects" :key="index"
    :index="index">
    <ProjectItem :link="project.link">
        <template #place>{{ project.place }}</template>
        <template #image>
          <img :src="'/' + project.img" alt="">
        </template>
        <template #title>{{ project.title }}</template>
        <template #text><div v-html="project.text"></div></template>
    </ProjectItem>
  </AnimatedComponent>
  <Form></Form>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/base.scss";

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
