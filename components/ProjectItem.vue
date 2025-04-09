<template>
    <div class="project-item">
      <div class="project-place">
        <slot name="place"></slot>
      </div>
      <div class="project-gallery">
         <ImageSlider :slides="slides"></ImageSlider>
      </div>
      <div class="project-details">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="text">
          <slot name="text"></slot>
        </div>
        <div class="link" v-if="link">
          <a :href="link" target="_blank">
            <span>Visit project website</span><span class="link-arrow"></span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    link: String,
    slides: Array
  })
  </script>
  
  <style lang="scss" scoped>
  @import "/assets/scss/base.scss";
  
  .project-item {
    padding: 3rem 0;
    text-align: center;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid #ddd;

    @include for-phone-only {
      width: 100vw;
      padding: 1rem 0;
    }
    @include for-tablet-portrait-up {
      width: 100vw;
      padding: 3rem 0;
    }
    @include for-desktop-up {
      width: 100vw;
      padding: 3rem 0;
    }

  }
  
  .project-gallery {
    width: 100%;
    padding: 1rem 0;

    img {
      width: 100%;
      margin-bottom: 0.5rem;
    }

  }

  .project-place { 
    font-size: 2rem;
    font-weight: 600;
    padding: 2rem;
  }
  

  .project-details {
    padding: 1rem;

    @include for-phone-only {
      width: 100vw;
    }
    @include for-tablet-portrait-up {
      width: 100vw;
    }
    @include for-desktop-up {
      width: 50vw;
    }
    flex: 1;

    .title {
      font-size: 2rem;
      font-weight: 600;
      padding: 1rem;
    }
    
    .text {
      font-size: 1rem;
      font-weight: 300;
      padding: 1rem;
    }

    .link {
      padding: 1rem;
      display: flex;
      justify-content: center;

      a {
        display: flex;
        align-items: center;
      }

      span  {
        font-weight: 700;
      }

      .link-arrow {
        margin-left: 1rem;
        width: 14px;
        height: 14px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url('/img/link-out.svg');
      }
      
    }
  }
  

  
  
  
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
  
  @media (min-width: 1024px) {
  
  }
  </style>