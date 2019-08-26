<template>
  <div class="sortBox__checkBoxWrapper">
    <div class="sortBox__byPrice" @click='switchButtons("price")'>
      <span class="sortBox__checked">
        <span v-show='price' class="sortBox__greenMarker"></span>
      </span>
      <span class="sortBox__value">by price</span>
    </div>
    <div class="sortBox__byRaiting" @click='switchButtons("rating")'>
      <span class="sortBox__checked">
        <span v-show='rating' class="sortBox__greenMarker"></span>
      </span>
      <span class="sortBox__value">by rating</span>
    </div>
  </div>
</template>

<script>
import api from '../shared/services/api';

export default {
  data() {
    return {
      price: true,
      rating: false,
    };
  },
  methods: {
    async switchButtons(value) {
      if (value === 'price') {
        this.price = true,
        this.rating = false;
      } else {
        this.price = false,
        this.rating = true;
      }
      this.$store.commit('setQuery', { type: 'sort', value });
      this.$store.dispatch('fetchUsers');
    },
  },
};
</script>

<style lang='scss'>
@import '../styles/sort-box.scss'

</style>
