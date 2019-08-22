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
import api from '../shared/services/api'
export default {
  data() {
    return {
      price: true,
      rating: false
    };
  },
  methods: {
    switchButtons: async function(type){
      if(type === 'price'){
        this.price = true,
        this.rating = false
      }else{
        this.price = false,
        this.rating = true
      }
      const query = this.$store.state.query
      const users = await api.post('/api/accounts/users', {...query, sort: type});
      console.log(users)
    }
  }
};
</script>

<style lang='scss'>
@import '../styles/sort-box.scss'

</style>
