<template>
  <footer>
    <div class="footer-top">
      <div class="logo">
        <img src="/img/logo.png" class="white" alt="" @click="scrollToTop()" />
      </div>
    </div>
    <div class="footer-bottom">
      <p class="sm">Copyright © 2025 - THE HOUSE PROJECT</p>
      <div><a href="/privacy-policy" target="_blank">Privacy Policy</a></div>
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: #393939;
  font-size: 0.9rem;
  border-top: 1px solid #ddd;
  

  .footer-top {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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