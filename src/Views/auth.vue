<template>
  <div>
    <header class="topLineForm">
      <div class="fixerLogo">
        <img src="../assets/logo-blue.svg" alt="logo" class="fixerLogo__arrow">
        <img src="../assets/fixer.png" alt="fixer" class="fixerLogo__fixer">
      </div>
      <div class="signUpLink">
        <span class="signUpLink__dontHave">Already have an account?</span>
        <a href="#" class="signUpLink__link">Log in</a>
      </div>
    </header>
    <main>
      <sighUp></sighUp>
    </main>
  </div>
</template>

<script>
import sighUp from '../components/sigh-up.vue';

export default {
  components: {
    sighUp,
  },
};

</script>

<style>
.topLineForm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 142px;
  padding-right: 142px;
  padding-top: 21px;
  margin-bottom: 160px;
}
.fixerLogo {
  display: flex;
  align-items: center;
}
.fixerLogo__arrow{
  margin-right: 13px;
}
.fixerLogo__fixer{
  width: 90px;
}
.signUpLink__dontHave{
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #222428;
}
.signUpLink__link{
  color: #2A74DB;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  margin-left: 6px;
}
</style>
