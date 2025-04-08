<template>
  <footer>
    <div class="left"></div>
    <div class="center">
      <div class="logo">
        <img src="/img/logo.png" class="white" alt="" @click="scrollToTop()" />
      </div>
      <!-- <div class="social">
          <a class="social-icon icon-inst" href="https://www.instagram.com/oyoyrestaurant?igsh=M3h3NDcyMml6MGp2" target="_blank"></a>
          <a class="social-icon icon-fb" href="https://www.facebook.com/oyoy.mlt" target="_blank"></a>
          <div class="social-icon icon-spotify"></div>
          <div class="social-icon icon-tiktok"></div>
        </div> -->
    </div>
    <div class="right">
      <!-- <div class="nav" v-if="navigation.length">
          <ul>
            <li v-for="(item, index) in navigation" :key="index">
              <a
                v-if="item"
                class="menu-item"
                :key="item.href"
                :href="item.href"
                :data-href="item.href"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <div><router-link to="/privacy" target="_blank">Privacy Policy</router-link></div>
              <div><router-link to="/terms" target="_blank">Terms & Conditions</router-link></div>
            </li>
          </ul>
        </div> -->
    </div>
  </footer>
</template>
    
<script setup>
    const scrollToTop = (id) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {});
</script>
  
<style lang="scss" scoped>
@import "assets/scss/base.scss";

footer {
  width: 100%;
  background-color: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  color: #393939;
  font-size: 0.9rem;
  border-top: 1px solid #ddd;

  a {
    text-decoration: none;
    color: #393939;
  }

  .left,
  .right {
    width: 300px;
  }

  .left {
    & > div {
      margin-bottom: 1.5rem;
    }

    .address {
      font-size: 1.1rem;
      color: #565656;
      margin-bottom: 0.5rem;
    }

    .phone,
    .mail,
    .map {
      line-height: 1.75rem;
      display: flex;
      align-items: center;
      font-size: 0.9rem;

      i {
        font-size: 20px;
        margin-right: 0.5rem;
      }

      a {
        text-decoration: none;
        color: #393939;
      }
    }
  }

  .logo {
    //   margin-bottom: 1.5rem;

    @include for-phone-only {
      width: 115px;
    }

    @include for-tablet-portrait-up {
      width: 115px;
    }
  }

  .social {
    display: flex;
    justify-content: center;

    .social-icon {
      background-size: 100%;
      background-repeat: no-repeat;
      width: 24px;
      height: 24px;
      margin: 0.5rem;
    }
    .icon-inst {
      background-image: url("/img/icon-inst-b.svg");
    }
    .icon-fb {
      background-image: url("/img/icon-fb-b.svg");
    }
    .icon-spotify {
      background-image: url("/img/icon-spotify.svg");
    }
    .icon-tiktok {
      background-image: url("/img/icon-tiktok.svg");
    }
  }

  .right {
    @include for-phone-only {
      display: block;
    }

    @include for-tablet-portrait-up {
      display: block;
    }
    .nav {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin: 0;
      ul {
        margin-bottom: 1rem;
        li {
          display: block;
          text-align: right;
          a {
            text-decoration: none;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>