
<template>
  <section class="feedback-form" id="forma">
    <div class="feedback-form__heading">
      <h2>Get In Touch</h2>
    </div>
    <Form
      ref="form"
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
      class="feedback-form__container"
    >
      <div class="form-row">
        <div class="form-col-50">
          <TextInput
            name="name1"
            type="text"
            label="First Name"
            placeholder="First Name"
            success-message="Nice to meet you!"
          />
        </div>
        <div class="form-col-50">
          <TextInput
            name="name2"
            type="text"
            label="Last Name"
            placeholder="Last Name"
            success-message="Nice to meet you!"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-col-50">
          <TextInput
            name="email"
            type="email"
            label="Email"
            placeholder="Your email"
            success-message="Got it!"
          />
        </div>

        <div class="form-col-50">
          <TextInput
            name="phone"
            type="tel"
            label="Phone"
            placeholder="Your phone number"
            success-message="Got it!"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-col-100">
          <TextInput
            name="message"
            type="textarea"
            label="Message"
            placeholder="Your comment"
            success-message="Thank you!"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-col-100">
          <button class="btn w-100 black submit-btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </Form>
  </section>
</template>
  
<script setup>
import { Form, useField, ErrorMessage } from "vee-validate";
// const props = defineProps(["mode", "title"]);
const emits = defineEmits(['requestSent']); 

const requestSent = (message) => {
  emits('requestSent', message);
}

const file = useField("file");
const filename = ref(undefined);
const date = ref();
const time = ref();

const schema = {
  name1(value) {
    if (value?.length >= 2) return true;
    return "First name needs to be at least 2 characters.";
  },
  name2(value) {
    if (value?.length >= 2) return true;
    return "Last Name needs to be at least 2 characters.";
  },
  phone(value) {
    if (value?.length > 6 && /[0-9-]+/.test(value)) return true;
    return "Phone number needs to be at least 6 digits.";
  },
  email(value) {
    if (value) {
      if (
        value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
        return true;
      return "The email field must be a valid email.";
    }
  },
};

async function onSubmit(values, { resetForm }) {
  // await storeReservaton.postData(values)
  console.log('values ', values)
  const { data, status } = await useFetch(`/api/requests`, {
        method: 'POST',
        body: values
  });
  console.log('data ', data.value)
  console.log('status ', status.value)

  if (data.value.success) {
    requestSent(data.value.message)
  }
  resetForm();
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}

const selectTime = (event) => {
  time = event;
};
</script>
  
  
<style lang="scss">
@import "assets/scss/base.scss";

.feedback-form {

  @include for-phone-only {
    width: 100%;
    max-width: 100%;
    padding: 5rem 1rem;
  }

  @include for-tablet-portrait-up {
    width: 100%;
    max-width: 900px;
    padding: 10rem 1rem;
  }


  &__heading {
    letter-spacing: 1px;
    font-weight: 400;
    line-height: 1.45;
    text-align: center;
    margin: 0px 0 5rem;

    @include for-phone-only {
      font-size: 1.15rem;
    }

    @include for-tablet-portrait-up {
      font-size: 1.25rem;
    }

    @include for-desktop-up {
      font-size: 1.75rem;
    }
  }

  &__container {
    display: flex;
    flex-direction: row;
    padding: 0 0px;

    @include for-phone-only {
      flex-direction: column;
      padding-bottom: 2rem;
    }

    @include for-tablet-portrait-up {
      flex-direction: column;
    }

    // @include for-700-height-only {
    //   flex-direction: row;
    // }

    .form-row {
      display: flex;
      @include for-phone-only {
        flex-direction: column;
      }

      @include for-tablet-portrait-up {
        flex-direction: row;
      }
    }

    .form-col-50 {
      margin-bottom: 1rem;
      @include for-phone-only {
        padding: 0 1rem;
        flex-basis: 100%;
      }

      @include for-tablet-portrait-up {
        padding: 0 1rem;
        flex-basis: 50%;
      }
    }

    .form-col-100 {
      margin-bottom: 1rem;
      @include for-phone-only {
        padding: 0 1rem;
        flex-basis: 100%;
      }

      @include for-tablet-portrait-up {
        padding: 0 1rem;
        flex-basis: 100%;
      }
    }

    .form-full {
      padding: 0 1rem;
      flex-basis: 100%;
    }

    .errors {
      position: relative;
    }

    .errors ul,
    .errors {
      list-style: none;
      margin: 0;
      padding: 0;
      color: #ffffff;
      font-size: 14px;
      line-height: 20px;
    }

    .field.has-error label,
    .field.has-error a {
      color: #dc3545 !important;
    }

    .field.has-error input {
      border: 1px solid #dc3545 !important;
      background: rgba(246, 102, 102, 0.25);
    }

    .field .error {
      display: none;
      color: #dc3545 !important;
    }

    /////@extend

    ::placeholder {
      color: rgba(255, 255, 255, 0.75);
      font-size: 1rem;

      @include for-phone-only {
        font-size: 1rem;
      }

      @include for-tablet-portrait-up {
        font-size: 1rem;
      }
    }
  }

  &__footer {
    justify-content: flex-end !important;
    margin-top: 0.25rem;
  }

  .alright {
    @include for-phone-only {
      font-size: 0.65rem;
      line-height: 1.15;
      margin-top: 0.75rem;
    }

    @include for-tablet-portrait-up {
      font-size: 0.65rem;
      line-height: 1.25;
      margin-top: 1rem;
    }

    @include for-700-height-only {
      margin-top: 0.25rem;
    }
  }

  .field.has-error .error {
    display: block;
  }
}

form {
  width: 100%;
  margin: 0px auto;
  padding-bottom: 60px;
}

.submit-btn {
  display: block;
  width: 100%;

  @include for-700-height-only {
    padding: 1rem 0.75rem;
  }

  &:hover {
    background-color: $mainColorHover;
    border: 1px solid $mainColorHover;
    color: #fff;
  }

  &:disabled {
    opacity: 0.75;

    &:hover {
      background-color: $mainColor;
      color: #fff;
      cursor: default;
    }
  }
  &.invalid {
    animation: shake 0.5s;
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  //transform: scale(1.1);
}

////

.v-input__details {
  display: none !important;
}

input.dp__input {
  padding: 15px 10px 15px 40px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: $font-sans;
}
.dp__input_icon {
  width: 1.25rem;
  height: 1.25rem;
}

.v-number-input__control .v-btn.v-btn--density-default,
.v-number-input__control .v-btn {
  height: 100% !important;
}

////

input.dp__input,
.v-field,
input,
textarea {
  border-radius: 0px !important;
}

.has-error {
  .dp__input {
    background-color: $colorErrorBg !important;
  }
}
</style>
  