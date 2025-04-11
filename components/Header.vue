<template>
  <div class="main-menu-mobile" :class="{ show: mobileNavIsOpened }">
    <div class="main-menu-mobile__sidebar">
      <div class="close-icon" @click="toggleMenu()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="m-top">
        <div class="logo">
          <img src="/img/logo.png" class="white" alt="" />
        </div>
        <ul>
          <li><span class="link" @click="smoothScrollTo('about')">About Us</span></li>
          <li><span class="link" @click="smoothScrollTo('projects')">Out projects</span></li>
        </ul>
      </div>
      <hr />
      <div class="m-bottom">
        <a :href="'#'" class="whatsapp">
          <span class="whatsapp-ic"></span>
          <span class="whatsapp-text">whatsapp</span>
        </a>
        <button class="btn" @click="smoothScrollTo('forma')">Get In Touch</button>
      </div>
    </div>
    <div class="main-menu-mobile__background" @click="toggleMenu()"></div>
  </div>
<header
  class="main-header"
  :class="[{ small: isScrolled }, { 'show': dataReady }]"
 >
  <div class="header-l">
    <div class="main-menu">
      <ul>
        <li><span class="link" @click="smoothScrollTo('about')">About Us</span></li>
        <li><span class="link" @click="smoothScrollTo('projects')">Out projects</span></li>
      </ul>
    </div>
    <div class="icon-nav" @click="toggleMenu()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
  </div>
  <div class="header-c">
   <div class="logo">
    <img src="/img/logo.png" class="white" alt="" />
    <!-- <img src="/img/logo.png" class="black" alt="" /> -->
   </div>
  </div>
  <div class="header-r">
    <a :href="'#'" class="whatsapp">
      <span class="whatsapp-ic"></span>
      <span class="whatsapp-text">whatsapp</span>
    </a>
    <button class="btn" @click="smoothScrollTo('forma')">Get In Touch</button>
  </div>
 </header>
</template>
    
<script setup>
import { NuxtLink } from "#components";
import { onMounted, ref, watch } from "vue";
  const props = defineProps({
    dataReady: { type: Boolean, required: true }
  })
  const isScrolled = ref(null);
  const mobileNavIsOpened = ref(false)

  const headerHandler = () => {
    if (window.scrollY > 50) {
     isScrolled.value = true;
    } else {
     isScrolled.value = false;
    }
  };
  const toggleMenu = () => {
    mobileNavIsOpened.value = !mobileNavIsOpened.value;
  }

  const closeMenu = () => {
    mobileNavIsOpened.value = false
  }

  const smoothScrollTo = (id) => {
    console.log('smoothScrollTo ', id)
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const yOffset = -75;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    console.log('y ', y)
    window.scrollTo({ top: y, behavior: "smooth" });
    setTimeout(() => {
      closeMenu();
    }, 500);
  }

  onMounted(() => {
    document.addEventListener("scroll", headerHandler);
  });
</script>
  
<style lang="scss" scoped>


.main-header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  z-index: 999;
  width: 100vw;
  padding: 1.5rem 2rem;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 1s ease;

  &.show {
    transform: translateY(0);
    opacity: 1;
  }

  @include for-phone-only {
    align-items: center; 
    height: 90px;
  }

  @include for-tablet-portrait-up {
    align-items: flex-start; 
  }

 .header-l,
 .header-r {
  color: #1c1c1c;
  width: 40%;
  display: flex;
  align-items: flex-start;
 }

 .main-menu {

  @include for-phone-only {
    display: none;
  }

  @include for-tablet-portrait-up {
    display: block;
  }

  ul {
    display: flex;
    li {
      padding: 1rem;
      .link {
        font-family: $font-sans;
        text-transform: uppercase;
        font-size: .9rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
}

 .icon-nav {
    position: relative;
    width: 45px;
    height: 15px;
    cursor: pointer;

    @include for-phone-only {
      display: block;
      margin-left: 0px;
      width: 35px;
    }

    @include for-tablet-portrait-up {
      display: none;
      margin-left: 0px;
      width: 45px;
    }

    @include for-tablet-landscape-up {
      margin-left: 0px;
      width: 45px;
    }

    .line {
      position: absolute;
      width: 100%;
      height: 1px;
      background: #111;
      transition: all 0.4s ease-in-out;

      &:first-child {
        top: 0;
      }

      &:nth-child(2n) {
        top: 45%;
      }

      &:last-child {
        bottom: 0;
        width: 100%;
      }
    }

    &:hover {
      .line {
        &:last-child {
          width: 100%;
        }
      }
    }

    &.active {
      .line {
        &:first-child {
          transform: translateY(8px) rotate(-45deg);
        }

        &:nth-child(2n) {
          top: 42.5%;
          opacity: 0;
        }

        &:last-child {
          transform: translateY(-8px) rotate(45deg);
          width: 100%;
        }
      }
    }
  }

 .header-r {
  justify-content: flex-end;
  align-items: center;
  color: #fff;

  .whatsapp {
    display: flex!important;

    .whatsapp-ic {
      display: block;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url('/img/whatsapp.svg');
      margin: 3px;

      @include for-phone-only {
          width: 26px;
          height: 26px;
      }

        @include for-tablet-portrait-up {
          width: 20px;
          height: 20px;
        }
    }
    .whatsapp-text {
      margin-left: 4px;
      text-transform: uppercase;
      font-size: .9rem;
      font-weight: 500;
      @include for-phone-only {
        display: none;
      }

      @include for-tablet-portrait-up {
        display: block;
      }
    }
  }

  .btn {
    margin-left: 2rem;
    @include for-phone-only {
      display: none;
    }
    @include for-tablet-portrait-up {
      display: block;
    }
  }
 }

 .logo {
    position: relative;

    @include for-phone-only {
      top: 30px;
    }
    @include for-desktop-up {
      top: 0px;
    }

    img {
    @include base-transition(all, .25s);

    @include for-phone-only {
      width: 225px;
    }
    @include for-tablet-portrait-up {
      width: 225px;
    }
    @include for-desktop-up {
      width: 225px;
    }
    @include for-700-height-only {
      width: 225px;
    }
    }
  // .black {
  //  display: none;
  // }
  // .white {
  //  display: block;
  // }
 }

 .btn-quote {
  background-color: #86775000;
  border: 1px solid #ffffff86;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.75rem 1.25rem;
  text-align: center;
  text-transform: uppercase;
  transition-duration: 0.25s;
  transition-property: all;
  transition-timing-function: ease-out;
  width: auto;
  margin-left: 2rem;
  @include for-phone-only {
   display: none;
  }
  @include for-tablet-portrait-up {
   display: flex;
  }

  @include for-desktop-up {
   display: flex;
  }

  &:hover {
   color: #fff;
   background: #6c4d19;
  }
 }

 .btn-quote-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #673ab7;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition-duration: 0.25s;
  transition-property: all;
  transition-timing-function: ease-out;

  @include for-phone-only {
   width: 40px;
   height: 40px;
   margin-left: 0rem;
  }
  @include for-tablet-portrait-up {
   width: 50px;
   height: 50px;
   margin-left: 2rem;
  }

  img {
   width: 55%;
  }
 }

 .phone {
  @include for-phone-only {
   display: none;
  }
  @include for-tablet-portrait-up {
   display: flex;
   span {
    display: none;
   }
  }

  @include for-desktop-up {
   display: flex;
   span {
    display: block;
   }
  }
 }

 ///
 &.small {
  background: #ffffff;
  padding: 1rem 2rem;
  @include base-transition(all);
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);
  height: 90px;
  align-items: center;

  .icon-nav {
   .line {
    background: #000;
   }
  }


  .logo {
    position: relative;
    top: 0px;
    img {
      @include for-phone-only {
      width: 115px;
      }
      @include for-tablet-portrait-up {
      width: 115px;
      }

      @include for-desktop-up {
      width: 115px;
      }
      @include for-700-height-only {
      width: 115px;
      }
    }
  //  .black {
  //   display: block;
  //  }
  //  .white {
  //   display: none;
  //  }
  }
  .btn-header-icon {
   @include for-phone-only {
    width: 40px;
    height: 40px;
    margin-left: 0rem;
   }
   @include for-tablet-portrait-up {
    width: 40px;
    height: 40px;
    margin-left: 2rem;
   }

   img {
    width: 55%;
   }
  }
 }
}




.main-menu-mobile {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 0px);
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: opacity 0.75s ease, visibility 0.75s ease;
  display: flex;
  z-index: 99999;
  opacity: 0;
  visibility: hidden;


  .logo {
      @include base-transition(all);
      opacity: 0;
      transform: translateY(20px);
      width: 160px;
      margin-bottom: 3rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    padding: .5rem 0;

    li {
      @include base-transition(all);
      opacity: 0;
      transform: translateY(20px);
      text-align: center;

      @include for-phone-only {
        padding: .5rem 0;
      }

      @include for-tablet-portrait-up {
        padding: 1rem 0;
      }


      .link {
        font-family: $font-sans;
        text-transform: uppercase;
        color: $text-color;
        letter-spacing: 1px;
        color: #262626;
        text-decoration: none;
        cursor: pointer;

        @include for-phone-only {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }

        @include for-tablet-portrait-up {
          font-size: 1.25rem;
          line-height: 1.25rem;
        }

        @include for-tablet-landscape-up {
          font-size: 2.25rem;
          line-height: 2.25rem;
        }

        &:hover,
        &.nuxt-link-exact-active {
          color: #af8e72;
          text-decoration: none;
        }
      }
    }
  }

  .btn {
    margin-top: 2rem;
  }

  &__sidebar {
    position: absolute;
    top: 0px;
    left: 0;
    width: 300px;
    height: calc(100vh - 0px);
    background: #fff;
    justify-content: flex-start;
    align-items: center;
    z-index: 999;
    transform: translateX(-300px);
    transition: transform 0.75s ease, visibility 0.75s ease;
    display: flex;
    flex-direction: column;
    z-index: 999;
    padding: 10rem 2rem;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);
    // opacity: 0;
    // visibility: hidden;
    @include for-phone-only {
      width: 100%;
    }

    @include for-tablet-portrait-up {
      width: 300px;
    }

    @mixin for-tablet-landscape-up {
      width: 300px;
    }

    .m-top {

    }


    hr {
      width: 30%;
      border-color: #ffffff;
      margin: 3rem 0 0rem;
      opacity: 0;
      transform: translateY(20px);
      @include base-transition(all);
      margin-bottom: 1.5rem;
    }

    .m-bottom {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 2rem;
      opacity: 0;
      transform: translateY(20px);
      @include base-transition(all);

      .whatsapp {
        display: flex!important;

        .whatsapp-ic {
          width: 20px;
          height: 20px;
          display: block;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url('/img/whatsapp.svg');
          margin: 3px;
        }
        .whatsapp-text {
          font-size: 1rem;
          margin-left: 4px;
          text-transform: uppercase;
          
        }
      }
    }

    a {
      color: #262626;
    }
  }

  &__background {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .45);
    z-index: 99;
  }

  .close-icon {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 35px;
    height: 18px;
    cursor: pointer;
    @include base-transition(all);

    @include for-phone-only {
      margin-left: 0px;
      width: 25px;
    }

    @include for-tablet-portrait-up {
      margin-left: 0px;
      width: 35px;
    }

    @mixin for-tablet-landscape-up {
      margin-left: 0px;
      width: 35px;
    }

    .line {
      position: absolute;
      width: 100%;
      height: 1px;
      background: #262626;
      transition: all 0.4s ease-in-out;

      &:first-child {
        top: 0;
        transform: translateY(8px) rotate(-45deg);
      }

      &:nth-child(2n) {
        top: 42.5%;
        opacity: 0;
      }

      &:last-child {
        bottom: 0;
        transform: translateY(-8px) rotate(45deg);
        width: 100%;
      }
    }

    &:hover {
      transform: rotate(-90deg);
      .line {
        &:last-child {
          width: 100%;
        }
      }
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;

    .main-menu-mobile__sidebar {
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);

      .logo {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.5s;
      }


      li {
        opacity: 1;
        transform: translateY(0px);
      }

      li:nth-child(1) {
        transition-delay: 0.6s;
      }
      li:nth-child(2) {
        transition-delay: 0.7s;
      }
     
      hr {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.8s;
      }

      .m-bottom {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.9s;
      }
    }
  }
}

</style>