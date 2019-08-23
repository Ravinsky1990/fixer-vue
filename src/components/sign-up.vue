<template>
  <form action="#" class="signInForm">
    <component v-bind:is='preloaderSwitcher'></component>
    <h1 class="signInForm__title">Sign up</h1>
    <div class="dubleInput">
      <input v-validate="'required|min:3'"
        v-model='form.firstName'
        name='firstName'
        type="text"
        placeholder="First name"
        class="formInput formInput_small">
      <input v-validate="'required|min:3'"
        type="text"
        v-model='form.lastName'
        name='lastName'
        placeholder="Last name"
        class="formInput formInput_small">
      <div class="errorMsg">{{errors.first('firstName')}}</div>
      <div class="errorMsg">{{errors.first('lastName')}}</div>
    </div>
    <input type="text"
      v-validate="'required|min:3'"
      v-model='form.userName'
      name='userName'
      placeholder="Username"
      class="formInput">
    <div class="errorMsg">{{errors.first('userName') || existUserName}}</div>
    <input type="email"
      v-validate="'required|email'"
      name='email'
      v-model='form.email'
      placeholder="Eimail"
      class="formInput">
    <div class="errorMsg">{{errors.first('email') || existEmail}}</div>
    <div class="signInForm__btnWrap">
      <button @click='submit' type="button" class="formBtn">Get started</button>
    </div>
  </form>
</template>

<script>
import api from '../shared/services/api.js';
import preloader from '../components/preloader';

export default{
  components: {
    preloader,
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
      },
      isValid: false,
      existEmail: null,
      existUserName: null,
      preloaderSwitcher: null,
    };
  },
  methods: {
    submit() {
      for (const field in this.fields) {
        if (this.fields[field].valid) {
          this.isValid = this.fields[field].valid;
        } else {
          this.isValid = false;
          break;
        }
      }
      if (this.isValid) {
        this.preloaderSwitcher = 'preloader';
        api.post('/api/accounts/user', { email: this.form.email, userName: this.form.userName })
          .then((res) => {
            if (res.data.result === 'ok') {
              this.$store.commit('submitSignUpForm', this.form);
              this.$router.push({ path: '/auth/create-password', query: { available: true } });
            } else if (res.data.result === 'This user-name exist!') {
              this.existUserName = res.data.result;
              this.preloaderSwitcher = null;
            } else if (res.data.result === 'This user-email exist!') {
              this.existEmail = res.data.result;
              this.preloaderSwitcher = null;
            } else if (res.data.result === 'This user-name and email already exist!') {
              this.existUserName = 'This user-name exist!';
              this.existEmail = 'This user-email exist!';
              this.preloaderSwitcher = null;
            } else {
            // this.existUserName = null;
            // this.existEmail = null
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss">
@import '../styles/sigh-up.scss';

</style>
