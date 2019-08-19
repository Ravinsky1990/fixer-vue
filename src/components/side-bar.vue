<template>
  <aside class="sidebar">
    <div class="logo">
      <a href="#">
        <img src="../assets/whiteLogo.svg" alt="logo">
      </a>
    </div>
    <nav class="sidebar__navigation">
      <a href="#" class="sidebar__link">
        <img src="../assets/search.svg" alt="search">
        <span class="sidebar__vertical-marker sidebar__vertical-marker_active"></span>
      </a>
      <a href="#" class="sidebar__link">
        <img src="../assets/my-profile.svg" alt="myprofile">
        <span class="sidebar__vertical-marker"></span>
      </a>
      <a href="#" class="sidebar__link">
        <img src="../assets/messages.svg" alt="message">
        <span class="sidebar__vertical-marker"></span>
      </a>
      <a href="#" class="sidebar__link">
        <img src="../assets/calendar.svg" alt="calrndar">
        <span class="sidebar__vertical-marker"></span>
      </a>
    </nav>
  </aside>
</template>

<script>
export default {};
</script>

<style lang='scss'>

@import '../styles/side-bar.scss';

</style>
