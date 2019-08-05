<template>
  <main class="searchBox">
    <form class="selectGroup">
      <formSelect label="Location" placeholder="Location" :options="locationOptions"></formSelect>
      <div class="input">
        <label for class="select__label">Search</label>
        <formInput placeholder="Name or surname" class="inputSyles" :styles="inputStyles"></formInput>
      </div>
      <formSelect label="Category" placeholder="Category" :options="categoryOptions"></formSelect>
      <formSelect label="Service" placeholder="Service" :options="serviceOptions"></formSelect>
      <appBtn :styles="btnStyles" title="search"></appBtn>
    </form>
    <section class="results">
      <div class="sortBox">
        <div class="sortBox__showLink">
          <span>SHOW MAP</span>
        </div>
        <sortBox></sortBox>
      </div>
      <div class="searchResults">
        <userItem></userItem>
      </div>
    </section>
  </main>
</template>

<script>
import formSelect from "../components/formSelect.vue";
import formInput from "../components/formInput.vue";
import appBtn from "../components/appBtn.vue";
import sortBox from "../components/sortBox.vue";
import userItem from "../components/userItem.vue";

export default {
  data() {
    return {
      locationOptions: ["Canada", "United States"],
      categoryOptions: ["All", "Front-end", "Back-end"],
      serviceOptions: ["servise1", "servise2"],
      inputStyles: { paddingLeft: "4px" },
      btnStyles: { marginTop: "32px" }
    };
  },
  components: {
    formSelect,
    formInput,
    appBtn,
    sortBox,
    userItem
  }
};
</script>

<style>
.results {
  flex-grow: 1;
  padding-left: 40px;
}
.sortBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
}
.sortBox__showLink {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #01134e;
  cursor: pointer;
}
.searchBox {
  display: flex;
  background-color: #fff;
  margin-left: 142px;
  margin-top: 57px;
  padding: 41px 60px 46px 44px;
}
.searchResults {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 454px;
  overflow-y: scroll;
  align-items: flex-start;
}
.selectGroup {
  flex-basis: 300px;
  border-right: 1px solid #e7eaf5;
  flex-shrink: 0;
}
div.input {
  max-width: 250px;
  margin-bottom: 20px;
}
</style>
