_<template>
  <main class="searchBox">
    <form class="selectGroup">
      <formSelect label="Location" placeholder="Location" :options="locationOptions"></formSelect>
      <div class="input">
        <label for class="select__label">Search</label>
        <input type="text"
          placeholder="Name or Surname"
          class="formInput formInput_noMargin"
          @input="setSearchQuery('keyword', $event)"
          @keyup.enter="submit"
          >
      </div>
      <formSelect
        selectLabel="name"
        label="Category"
        placeholder="Category"
        :options="categoriesForSelect">
      </formSelect>
      <formSelect label="Service" placeholder="Service" :options="serviceOptions"></formSelect>
      <div class="signInForm__btnWrap formBtn_search">
        <button @click='submit' class="formBtn formBtn_fullWidth" type='button'>Search</button>
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
        <!-- <div v-if='users.length == 0' class="noResults">No results</div> -->
        <userItem
        v-for='user in users'
        v-bind:user = 'user'
        v-bind:key="user._id"
        ></userItem>
      </div>
    </section>
  </main>
</template>

<script>
import formSelect from './form-select.vue';
import sortBox from './sort-box.vue';
import userItem from './user-item.vue';
import Api from '../shared/services/api'

export default {
  data() {
    return {
      locationOptions: ['Canada', 'United States'],
      serviceOptions: ['servise1', 'servise2'],
      categoriesForSelect: [],
    };
  },
  methods: {
    setSearchQuery(type, ev) {
      this.$store.commit('setQuery', { type, value: ev.target.value });
    },
    submit(){
      this.$store.dispatch('fetchUsers');
    },
    setSelect(){
      console.log("hi")
    }
  },
  computed: {
    users() {
      return [...this.$store.state.users];
    },
  },
  components: {
    formSelect,
    sortBox,
    userItem,
  },
  mounted: async function() {
    const categories = await Api.get('/api/accounts/categories');
    this.categoriesForSelect = categories.data.categories
    this.$store.dispatch('fetchUsers');
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
.noResults{
  padding-top: 30px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #01134e;
  width: 100%;
}
</style>
