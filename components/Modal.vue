<template>
  <transition name="slideup">
    <div class="form-modal modal-window" v-if="props.modalOpened">
        <div class="close" @click="closeModal()">
        <svg
            width="30px"
            height="30px"
            viewBox="0 0 18 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
            >
            <g
                id="LandingPopup"
                transform="translate(-983.000000, -267.000000)"
                stroke="#111"
            >
                <g id="Group-6">
                <g id="Group-5" transform="translate(420.000000, 243.000000)">
                    <path
                    d="M571.87315,32.8400752 L582.911677,32.8400752 L571.87315,32.8400752 L571.87315,21.6856907 L571.87315,32.8400752 Z M571.87315,32.8400752 L560.911677,32.8400752 L571.87315,32.8400752 L571.87315,44.0437203 L571.87315,32.8400752 Z"
                    id="Combined-Shape"
                    transform="translate(571.911677, 32.864706) rotate(-315.000000) translate(-571.911677, -32.864706) "
                    ></path>
                </g>
                </g>
            </g>
            </g>
        </svg>
        </div>
        <div class="form-modal__container">
        <img src="/img/logo.png" class="white" alt="" />
        <h2>{{ props.message.title }}</h2>
        <p>{{ props.message.subtitle }}</p>
        </div>
    </div>
    </transition>
</template>

<script setup>
const props = defineProps({
  modalOpened: { type: Boolean, default: false },
  message: { type: Object },
});
const emits = defineEmits(['closeModal']); 

const closeModal = () => {
  emits('closeModal', true);
}
</script>


  
<style lang="scss">


.slideup-enter-active,
.slideup-leave-active {
    transform: translateY(0);
    opacity: 1;
    transition: all .5s ease-in-out;
}

.slideup-enter-from,
.slideup-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.form-modal {
  background: #ffffffeb;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  .close {
    position: absolute;
    z-index: 9999;
    cursor: pointer;

    @include for-phone-only {
      right: 1rem;
      top: 1rem;
    }

    @include for-tablet-portrait-up {
      right: 2.5rem;
      top: 2.5rem;
    }
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;

    @include for-phone-only {
      padding-top: 4rem;
      align-items: center;
      justify-content: center;
    }

    @include for-tablet-portrait-up {
      padding-top: 0rem;
      align-items: center;
      justify-content: center;
    }

    img {
      @include for-phone-only {
        width: 100%;
        max-width: 200px;
        margin-bottom: 3rem;
      }

      @include for-tablet-portrait-up {
        width: 100%;
        max-width: 300px;
        margin-bottom: 4rem;
      }
    }

    h2 {
      margin-bottom: 2rem;
      text-align: center;
    }
  }

  .form-title {
    font-family: $font-serif;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
    padding: 0 1rem;

    @include for-phone-only {
      font-size: 3rem;
      text-align: left;
      margin-bottom: 0rem;
    }

    @include for-tablet-portrait-up {
      font-size: 4rem;
    }
  }
}

.overlay {
  // background: #0d6b80ba;
  // background: #002229ba;
  background-color: rgba($color: #000000, $alpha: 0.3);
  background-image: radial-gradient(at center, #3e3e3e26 20%, #2c3238b7 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}

iframe {
  border: none;

  @include for-phone-only {
    min-height: 650px;
    height: 100%;
  }

  @include for-tablet-portrait-up {
    min-height: 650px;
    height: 650px;
  }
}
</style>