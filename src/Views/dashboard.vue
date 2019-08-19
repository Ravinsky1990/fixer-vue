<template>
  <div>
    <sideBar></sideBar>
    <topLine></topLine>
    <searchView></searchView>
  </div>
</template>

<script>
import sideBar from '../components/side-bar.vue';
import topLine from '../components/top-line.vue';
import searchView from '../components/search.vue';

export default {
  components: {
    sideBar,
    topLine,
    searchView,
  },
};
</script>


<style scoped>

</style>
