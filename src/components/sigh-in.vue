<template>
  <form action="#" class="signInForm">
    <component v-bind:is='preloaderSwitcher'></component>
    <h1 class="signInForm__title">Sign in</h1>
    <input type="text"
      placeholder="Email"
      name="email"
      class="formInput"
      v-model='email'
      v-validate="'required|email'"
      >
    <div class="errorMsg">{{errors.first('email')}}</div>
    <input type="password"
      placeholder="Password"
      class="formInput"
      name='password'
      v-model='password'
      v-validate="'required|min:3'"
      >
    <div class="errorMsg">{{errors.first('password')}}</div>
    <div class="signInForm__forotPass">
      <a href="#">Forgot password?</a>
    </div>
    <div class="errorMsg">{{deniedMsg}}</div>
    <div class="signInForm__btnWrap">
      <button @click='submit' class="formBtn" type='button'>Sign in</button>
    </div>
  </form>
</template>

<script>
import preloader from '../components/preloader';
import api from '../shared/services/api'
export default {
  components: {
    preloader
  },
  data(){
    return {
      email: '',
      password: '',
      preloaderSwitcher: null,
      isValid: false,
      deniedMsg: null,
    }
  },
  methods: {
    submit(){
      for (const field in this.fields) {
        if (this.fields[field].valid) {
          this.isValid = this.fields[field].valid;
        } else {
          this.isValid = false;
          break;
        }
      };

      if(this.isValid){
        this.preloaderSwitcher = 'preloader';
        api.post('/api/accounts/sigh-in', {email: this.email, password: this.password})
        .then((res)=>{
          this.preloaderSwitcher = null;
          this.deniedMsg = null;
          //set token
          this.$router.push('/dashboard/search');
        })
        .catch((err)=>{
          this.preloaderSwitcher = null;
          this.deniedMsg = err.response.data.error;
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .signInForm__forotPass{
    text-align: right;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  .signInForm__forotPass a{
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #222428;
    text-decoration: none;
  }
</style>