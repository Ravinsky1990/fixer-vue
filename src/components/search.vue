<template>
  <main class="searchBox">
    <form class="selectGroup">
      <formSelect label="Location" placeholder="Location" :options="locationOptions"></formSelect>
      <div class="input">
        <label for class="select__label">Search</label>
        <input type="text"
          placeholder="Name or Surname"
          class="formInput formInput_noMargin"
          @input="setSearchData('text', $event)"
          >
      </div>
      <formSelect label="Category" placeholder="Category" :options="g"></formSelect>
      <formSelect label="Service" placeholder="Service" :options="serviceOptions"></formSelect>
      <div class="signInForm__btnWrap formBtn_search">
        <button class="formBtn formBtn_fullWidth" type='button'>Search</button>
      </div>
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
import formSelect from './formSelect.vue';
import sortBox from './sortBox.vue';
import userItem from './userItem.vue';

export default {
  data() {
    return {
      locationOptions: ['Canada', 'United States'],
      serviceOptions: ['servise1', 'servise2'],
    };
  },
  methods: {
    setSearchData(type, ev) {
      this.$store.commit('setQuery', { type, value: ev.target.value });
    },
  },
  computed: {
    users() {
      return [...this.$store.state.users];
    },
    serchString() {

    },
  },
  components: {
    formSelect,
    sortBox,
    userItem,
  },
  mounted() {
    // this.$store.dispatch('fetchUsers');
  },
};
</script>

<style lang="scss">
@import '../styles/search.scss';
.formInput_noMargin{
  margin-top: 0px;
}
.formBtn_search{
  max-width: 250px;
}
.formBtn_fullWidth{
  width: 100%;
  display: inline-block;
}
</style>
