<template>
  <main class="searchBox">
    <form class="selectGroup">
      <formSelect label="Location" placeholder="Location" :options="locationOptions"></formSelect>
      <div class="input">
        <label for class="select__label">Search</label>
        <!-- <formInput placeholder="Name or surname" class="inputSyles" :styles="inputStyles"></formInput> -->
      </div>
      <formSelect label="Category" placeholder="Category" :options="categoryOptions"></formSelect>
      <formSelect label="Service" placeholder="Service" :options="serviceOptions"></formSelect>
      <!-- <appBtn :styles="btnStyles" title="search"></appBtn> -->
    </form>
    <section class="results">
      <div class="sortBox">
        <div class="sortBox__showLink">
          <span>SHOW MAP</span>
        </div>
        <sortBox></sortBox>
      </div>
      <div class="searchResults">
        <userItem
        v-for='user in users'
        v-bind:user = 'user'
        v-bind:key="user.id"
        ></userItem>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import formSelect from './formSelect.vue';
// import formInput from './formInput.vue';
// import appBtn from './appBtn.vue';
import sortBox from './sortBox.vue';
import userItem from './userItem.vue';

export default {
  data() {
    return {
      locationOptions: ['Canada', 'United States'],
      categoryOptions: ['Front-end', 'Back-end'],
      serviceOptions: ['servise1', 'servise2'],
    };
  },
  computed: {
    users() {
      return [...this.$store.state.users];
    },
  },
  components: {
    formSelect,
    // formInput,
    // appBtn,
    sortBox,
    userItem,
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  },
};
</script>

<style lang="scss">
@import '../styles/search.scss';
</style>
