<template>
  <form action="" @submit.prevent="onSubmit" ref="form">
    <div class="form__group field" v-for="(label, index) in labelName" :key="index">
      <input ref="inputElements" type="input" class="form__field" placeholder="Name" name="name" id="name" v-model="inputValue[index]" required />
      <label for="name" class="form__label">{{ label.placeholder }}</label>
    </div>

    <button class="submit__button">
      <span class="submit">Submit </span>
      <span class="loading"><i class="fas fa-sync fa-2x"></i></span>
      <span class="check"><i class="fas fa-check"></i></span>
    </button>
  </form>
</template>

<script>
import { createDevice } from "@/firebase.js";

export default {
  data() {
    return {
      labelName: [{ placeholder: "Device" }, { placeholder: "Buying Price" }, { placeholder: "Average Lifespan" }, { placeholder: "Years in Use" }],
      inputValue: [],
    };
  },

  methods: {
    onSubmit: function() {
      //object that maps input data to their respective fields
      const devices = {
        device: this.inputValue[0],
        buyingPrice: this.inputValue[1],
        averageLifespan: this.inputValue[2],
        yearsInUse: this.inputValue[3],
      };

      //firebase accepts data as objects
      createDevice(devices).then(() => {
        console.log("added to database!");
      });

      this.inputValue = [];
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

$base-duration: 500ms;
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
$color-2: #3498db;
$color-3: #2ecc71;
$font: "Lato", sans-serif;

form {
  width: 50%;
}

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin: 20px auto;
  width: 100%;
}

.form__field {
  font-family: $font;
  width: 75%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1rem;
  padding: 10px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}

/*button styling */

.submit__button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.625rem;
  width: 12.5rem;
  padding: 1.5rem 3.125rem;
  border: none;
  border-radius: 0.3125rem;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  background-color: #1e90ff;
  color: $white;
  font-weight: 600;
  font-size: medium;
  overflow: hidden;
  text-transform: uppercase;

  &:before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: lighten($color-3, 10%);
  }
}

span {
  position: absolute;
  line-height: 0;

  i {
    transform-origin: center center;
  }

  &:nth-of-type(1) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-of-type(2) {
    top: 100%;
    transform: translateY(0%);
    font-size: 24px;
  }

  &:nth-of-type(3) {
    display: none;
  }
}

.active {
  background-color: $color-3;

  &:before {
    width: 100%;
    transition: width 3s linear;
  }

  span {
    &:nth-of-type(1) {
      top: -100%;
      transform: translateY(-50%);
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);

      i {
        animation: loading $base-duration linear infinite;
      }
    }

    &:nth-of-type(3) {
      display: none;
    }
  }
}

.finished {
  background-color: lighten($color-3, 10%);

  .submit {
    display: none;
  }

  .loading {
    display: none;
  }

  .check {
    display: block !important;
    font-size: 24px;
    animation: scale 0.5s linear;

    i {
      transform-origin: center center;
    }
  }
}

@keyframes loading {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  0% {
    transform: scale(10);
  }
  50% {
    transform: scale(0.2);
  }
  70% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
