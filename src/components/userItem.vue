<template>
  <figure class="resItem">
    <div class="resItem__avatar">
      <img src="../assets/user_1.png" alt="avatar">
    </div>
    <div class="resItem__content">
      <div class="resItem__name">
        <span>{{user.firstName}} {{user.lastName}}</span>
        <img src="../assets/golden-star.svg" alt="goldenstar">
      </div>
      <div class="resItem__location">
        <img src="../assets/map-marker.svg" alt="map">
        <span>{{user.city}}, {{user.country}}</span>
      </div>
      <div class="resItem__stackInfo">
        <span class="resItem__stack">Stack: </span>
        <span v-for='(category, index) in user.category'
         class="resItem__detail"
         v-bind:key='category.id'
         >{{index > 0 ? ', '+category.name : category.name}}</span>
        <a href="#">More</a>
      </div>
      <div class="resItem__rateInfo">
        <span class="resItem__rate">Base Daily Rate:</span>
        <span class="resItem__rateVal">$ {{user.price}} USD</span>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style lang='scss'>

@import '../styles/user-item.scss';

</style>
