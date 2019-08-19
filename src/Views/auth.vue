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
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    topLineLink() {
      if (this.$route.path === '/auth/sigh-up') {
        return {
          title: 'Already have an account?',
          link: '/auth/sigh-in',
          val: 'Log in',
        };
      }
      if (this.$route.path === '/auth/create-password') {
        return {
          title: 'Do not have an account?',
          link: '/auth/sigh-up',
          val: 'Sigh up',
        };
      }
      if (this.$route.path === '/auth/sigh-in') {
        return {
          title: 'Do not have an account?',
          link: '/auth/sigh-up',
          val: 'Sigh up',
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
// .sigh-up-transition-enter{
//   opacity: 0;
// }

</style>
