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

<style>
.resItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 27px 33px 20px;
  box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.02);
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 20px;
}
.resItem__avatar {
  margin-right: 14px;
}
.resItem__avatar img {
  width: 74px;
}
.resItem__name {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.resItem__name span {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  margin-right: 6px;
}
.resItem__location {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}
.resItem__location img {
  margin-right: 4px;
}
.resItem__location span {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #000;
}
.resItem__stackInfo {
  margin-bottom: 4px;
}
.resItem__stack {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  color: #01134e;
}
.resItem__detail {
  font-weight: 300;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 12px;
}
.resItem__rate,
.resItem__stackInfo a {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
}
.resItem__stackInfo a {
  color: #2a74db;
  margin-left: 6px;
}
.resItem__rate {
  color: #01134e;
}
.resItem__rateVal {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #000;
}
</style>
