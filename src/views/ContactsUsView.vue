<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <header-title title="Contact us" class="title-big" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">

            <form action="#" class="mt-5" @submit.prevent="handleSubmit">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    id="name-input"
                    v-model="v$.name.$model"
                  />
                  <span
                    v-for="error in v$.name.$errors"
                    :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
                <!-- <pre>
                  {{ v$.message1 }}
                </pre> -->
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    id="email-input"
                    v-model="v$.email.$model"
                  >
                  <span
                    v-for="error in v$.email.$errors"
                    :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0">
                    Phone
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone-input"
                    v-model="v$.phone.$model"
                  >
                  <span
                    v-for="error in v$.phone.$errors"
                    :key="error.$uid">
                    {{ error.$message }}
                  </span>
                </div>
              </div>

                <div class="form-group row textarea">
                  <div class="col col-12 d-flex justify-content-start">
                    <label for="pmessage" class="mb-3 mt-3 text-center">
                      Your message
                      <span style="color: red;">*</span>
                    </label>
                  </div>
                  <div class="col col-12">
                    <textarea class="form-control" name="message" id="message" rows="5"
                      placeholder="Leave your comments here"
                      v-model="v$.message1.$model">
                    </textarea>
                    <span
                      v-for="error in v$.message1.$errors"
                      :key="error.$uid">
                      {{ error.$message }}
                    </span>
                    <!-- <pre>
                      {{ v$.message1 }}
                    </pre> -->
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col col-12 col-sm-2">
                  <input
                    ref="inputCheckbox"
                    type="checkbox"
                    class="form-control my-form-control"
                    id="checkbox-input"
                    v-model="v$.offer.$model"
                  >
                </div>
                <div class="col col-12 col-sm-10 d-flex align-items-start">
                  <label for="checkbox-input" class="mb-0 my-checkbox-input">
                    Согласен с договором оферты
                  </label>
                </div>
              </div>
              <span class="my-error"
                    v-for="error in v$.offer.$errors"
                    :key="error.$uid">
                    {{ error.$message }}
                  </span>
                <div class="row">
                  <div class="col">
                    <button class="btn btn-outline-dark send-btn" type="submit">Send us</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import HeaderTitle from '@/components/HeaderTitle.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, helpers, sameAs } from '@vuelidate/validators'
import {minLength} from '../validators/minLength'
import { checked } from '@/validators/checked';

  export default {
    components: { NavBarComponent, HeaderTitle },
    setup () {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message1: '',
        offer: true
      }
    },
    validations () {
    return {
      name: { required },
      email: {  required, email },
      phone: { },
      message1: {
        required,
        maxLength: maxLength(10),
        minLength: helpers.withMessage('This value min 5', minLength)
      },
      offer: { checked: helpers.withMessage('The field must be checked', checked) }
    }
  },
    methods: {
      async handleSubmit () {
        const isFormCorrect = await this.v$.$validate()
        console.log('isFormCorrect: ', isFormCorrect);
        // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
        if (!isFormCorrect) return
        // actually submit form
    },
      handleSubmit1() {
        // console.log('Данные формы:', JSON.parse(JSON.stringify(this.form)));
      }
    }
  }
</script>

<style lang="scss" scoped>
  input~span, textarea~span, .my-error {
    color: tomato;
    line-height: 2;
  }

  .my-form-control {
    box-shadow: none;
  }

  .my-checkbox-input {
    font-family: 'Merienda';
    font-size: 20px;
  }
</style>