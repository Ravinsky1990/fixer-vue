<template>
  <div class="sortBox__checkBoxWrapper">
    <div class="sortBox__byPrice">
      <span class="sortBox__checked">
        <span v-bind:style="{'background-color': priceColor}" class="sortBox__greenMarker"></span>
      </span>
      <span class="sortBox__value">by price</span>
    </div>
    <div class="sortBox__byRaiting">
      <span class="sortBox__checked">
        <span v-bind:style="{'background-color': ratingColor}" class="sortBox__greenMarker"></span>
      </span>
      <span class="sortBox__value">by rating</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceColor: '#0ad69c',
      ratingColor: 'white',
    };
  },
};
</script>

<style lang='scss'>
@import '../styles/sort-box.scss'

</style>
