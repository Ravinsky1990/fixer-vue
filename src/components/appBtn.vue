<template>
  <div :style="btnStyles">
    <button :style="btnStyles" class="appBtn" type="button">{{title}}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    styles: Object
  },
  computed: {
    btnStyles() {
      return {
        ...this.styles
      };
    }
  }
};
</script>

<style>
.appBtn {
  width: 250px;
  height: 42px;
  border: none;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  background-color: #0ad69c;
  cursor: pointer;
  border-radius: 2px;
  text-transform: uppercase;
}
</style>
