<template>
  <header class="top-line">
    <ul class="top-line__rout">
      <li class="top-line__route-list-item">
        <a href="#" class="top-line__rout-link">Home</a>
        <img
          class="top-line__shevron top-line__shevron_visible"
          src="../assets/greenShevron.svg"
          alt="shevron"
        >
      </li>
      <li class="top-line__route-list-item">
        <a href="#" class="top-line__rout-link">Search</a>
        <img
          class="top-line__shevron top-line__shevron_visible"
          src="../assets/greenShevron.svg"
          alt="shevron"
        >
      </li>
      <li class="top-line__route-list-item">
        <a href="#" class="top-line__rout-link">Results</a>
        <img class="top-line__shevron" src="../assets/greenShevron.svg" alt="shevron">
      </li>
    </ul>
    <div class="current-user">
      <span class="current-user__name">Faruh Bernandez</span>
      <a href="#">
        <img src="../assets/black-down-Shevron.svg" alt="shevron">
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang='scss'>

@import '../styles/top-line.scss';

</style>
