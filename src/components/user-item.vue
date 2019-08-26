<template>
  <figure class="resItem">
    <div class="resItem__avatar">
      <img :src="user.photo" alt="avatar">
    </div>
    <div class="resItem__content">
      <div class="resItem__name">
        <span>{{user.firstName}} {{user.lastName}}</span>
        <img v-bind:src='ratingStar' alt="star">
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
import golden from '../assets/golden-star.svg';
import silver from '../assets/silver.svg';
export default {
  props: {
    user: Object,
  },
  computed: {
    ratingStar(){
      if(this.user.rating){
        return this.user.rating > 15 ? golden : silver
      }else{
        return golden
      }
    }
  }
};
</script>

<style lang='scss'>

@import '../styles/user-item.scss';

</style>
