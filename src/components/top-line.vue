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
      <router-link to='/dashboard/account' tag='span'>{{fullName}}</router-link>
      <!-- <span class="current-user__name">{{fullName}}</span> -->
      <a href="#">
        <img src="../assets/black-down-Shevron.svg" alt="shevron">
      </a>
    </div>
  </header>
</template>

<script>
import Api from '../shared/services/api';

export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  mounted() {
    Api.setHeader();
    Api.get('/api/accounts/user')
      .then((res) => {
        this.user = res.data.user;
      });
  },
};
</script>

<style lang='scss'>

@import '../styles/top-line.scss';

.current-user span{
  margin-right: 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #252f48;
  cursor: pointer;
}

</style>
