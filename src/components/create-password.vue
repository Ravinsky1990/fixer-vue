<template>
  <form action="#" class="signInForm">
    <h1 class="signInForm__title signInForm__title__dark">Complete your account</h1>
    <input type="password"
      name="password"
      ref="password"
      v-validate="'required|min:3'"
      v-model='password.value'
      placeholder="Create password"
      class="formInput">
    <div class="errorMsg">{{errors.first('password')}}</div>
    <div class="progressBar">
      <div><span v-if='passwordBar_1'></span></div>
      <div><span v-if='passwordBar_2'></span></div>
      <div><span v-if='passwordBar_3'></span></div>
    </div>
    <input type="password"
      v-validate="'required|confirmed:password'"
      data-vv-as="password"
      name="password_confirmation"
      placeholder="Confirm password"
      class="formInput formInput__compliteAccaunt">
    <div class="errorMsg">{{errors.first('password_confirmation')}}</div>
    <div class="termsOfService" @click='checkService'>
      <div class="termsOfService__checkBox">
        <img src='../assets/termsCheck.svg' alt="check" v-if='service'>
      </div>
      <div>
        <span class="termsOfService__title">I agree to the myFixer.com</span>
        <a href="#" class="termsOfService__policy">Terms of Service</a>
      </div>
    </div>
    <div class="termsOfService" @click='checkPolicy'>
      <div class="termsOfService__checkBox">
        <img src="../assets/termsCheck.svg" alt="check" v-if='policy'>
      </div>
      <div>
        <span class="termsOfService__title">I agree to the myFixer.com</span>
        <a href="#" class="termsOfService__policy">Privacy Policy</a>
      </div>
    </div>
    <div class="errorMsg">{{customErrorMsg}}</div>
    <div class="signInForm__btnWrap">
      <button type='button' class="formBtn" @click='submit'>Get started</button>
    </div>
  </form>
</template>

<script>
import api from '../shared/services/api';

export default {
  data() {
    return {
      password: {
        value: '',
      },
      service: false,
      policy: false,
      customErrorMsg: null,
    };
  },
  methods: {
    checkService() {
      this.service = !this.service;
    },
    checkPolicy() {
      this.policy = !this.policy;
    },
    submit() {
      if (this.errors.items.length == 0 & this.service & this.policy) {
        const payload = {
          ...this.$store.state.signUpObj,
          password: this.password.value,
        };
        this.customErrorMsg = null;

        // send req
        api.post('/api/accounts/sigh-up', payload)
          .then((res) => {
            this.$store.commit('clearSignUpFormInfo');
            this.$router.push('/auth/sigh-in');
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      } else {
        this.customErrorMsg = 'You did not fill out the form!';
      }
    },
  },
  computed: {
    passwordBar_1() {
      return this.password.value.length >= 1;
    },
    passwordBar_2() {
      return this.password.value.length >= 2;
    },
    passwordBar_3() {
      return this.password.value.length >= 3;
    },
  },
};
</script>

<style lanf='scss'>

@import '../styles/create-password.scss';
.progressBar span{
  display: block;
  background: #FF6359;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

</style>
