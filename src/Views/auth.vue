<template>
  <div>
    <header class="topLineForm">
      <div class="fixerLogo">
        <img src="../assets/logo-blue.svg" alt="logo" class="fixerLogo__arrow">
        <img src="../assets/fixer.png" alt="fixer" class="fixerLogo__fixer">
      </div>
      <div class="signUpLink">
        <span class="signUpLink__dontHave">{{topLineLink.title}}</span>
        <router-link :to="topLineLink.link" >{{topLineLink.val}}</router-link>
      </div>
    </header>
    <main>
      <transition name='authAnimation'>
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    topLineLink() {
      if (this.$route.path === '/auth/sign-up') {
        return {
          title: 'Already have an account?',
          link: '/auth/sign-in',
          val: 'Log in',
        };
      }
      if (this.$route.path === '/auth/create-password') {
        return {
          title: 'Do not have an account?',
          link: '/auth/sign-up',
          val: 'Sign up',
        };
      }
      if (this.$route.path === '/auth/sign-in') {
        return {
          title: 'Do not have an account?',
          link: '/auth/sign-up',
          val: 'Sign up',
        };
      }
    },
  },
};

</script>

<style lang='scss' scoped>
@import '../styles/auth.scss';
a{
  color: #2A74DB;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  margin-left: 6px;
}
.authAnimation-enter{
  opacity: 0;
}
.authAnimation-enter-active{
  transition: opacity .8s;
}

</style>
