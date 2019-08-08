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

<style>
.sortBox__checkBoxWrapper {
  display: flex;
  justify-content: space-between;
}
.sortBox__byPrice,
.sortBox__byRaiting {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.sortBox__byPrice {
  margin-right: 21px;
}
.sortBox__checked {
  width: 18px;
  height: 18px;
  border: 1px solid #f0f1f3;
  box-shadow: 0 1px 7px rgba(204, 202, 212, 0.58);
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.sortBox__greenMarker {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.sortBox__value {
  font-weight: 300;
  font-size: 14px;
  line-height: 28px;
  color: #000;
  font-family: "Roboto", sans-serif;
}
</style>
