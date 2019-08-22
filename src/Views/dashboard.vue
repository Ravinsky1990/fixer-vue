<template>
  <div>
    <sideBar></sideBar>
    <topLine></topLine>
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from '../components/side-bar.vue';
import topLine from '../components/top-line.vue';

export default {
  components: {
    sideBar,
    topLine,
  },
};
</script>


<style scoped>

</style>
