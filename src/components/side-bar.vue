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

<style scoped>
.logo {
  display: flex;
  justify-content: center;
}
.sidebar {
  position: fixed;
  width: 80px;
  height: 100vh;
  padding-top: 18px;
  background-color: #01134e;
}
.sidebar__navigation {
  margin-top: 86px;
}
.sidebar__link {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: relative;
}
.sidebar__vertical-marker {
  width: 4px;
  height: 48px;
  background-color: #0ad69c;
  position: absolute;
  left: 0;
  top: -78%;
  visibility: hidden;
}
.sidebar__num-marker_active {
  visibility: visible;
}
.sidebar__vertical-marker_active {
  visibility: visible;
}
</style>
