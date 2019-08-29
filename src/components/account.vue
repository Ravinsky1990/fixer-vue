<template>
    <main class="info">
    <div class="tabs">
      <div @click='tabsSwitcher("personal")' :class="classes.personal">PERSONAL INFORMATION</div>
      <div @click='tabsSwitcher("account")' :class="classes.account">ACCOUNT INFORMATION</div>
    </div>
    <div class="personalInformation">
      <component v-bind:is='preloaderSwitcher'></component>
      <div class="profileFoto" v-if='infoFields.profileFoto'>
        <img src="../assets/faruh.png" alt="profile Foto" class="profileFoto__img">
        <a href="#" class="profileFoto__changeLink">
          <img src="../assets/changeAvatar.svg" alt="pen">
          <span>Change photo</span>
        </a>
        <div class="confirm">
          <button class='formBtn'>Apply</button>
        </div>
      </div>
      <div class="content_1">
        <div class="userName" v-if='infoFields.userName'>
          <label>User name</label>
          <input type="text" :placeholder="currentUser.userName" class="formInput formInput_personalInfo">
        </div>
        <div class="firstName" v-if='infoFields.firstName'>
          <label>First name</label>
          <input type="text" :placeholder="currentUser.firstName" class="formInput formInput_personalInfo">
        </div>
        <div class="gender" v-if='infoFields.gender'>
          <label for="">Gender</label>
          <vSelect :options="['Male', 'Female']" placeholder='Gender'></vSelect>
        </div>
        <div class="country" v-if='infoFields.country'>
          <label for="">Country</label>
          <input type="text" class="formInput formInput_personalInfo">
        </div>
      </div>
      <div class="content_2">
        <div class="Email" v-if='infoFields.email'>
          <label>Email</label>
          <input type="text" :placeholder="currentUser.email" class="formInput formInput_personalInfo">
        </div>
        <div class="lastName" v-if='infoFields.lastName'>
          <label>Last name</label>
          <input type="text" :placeholder="currentUser.lastName" class="formInput formInput_personalInfo">
        </div>
        <div class="mobileFone" v-if='infoFields.phone'>
          <label>Phone</label>
          <input type="text" placeholder="Phone" class="formInput formInput_personalInfo">
        </div>
        <div class="category" v-if='infoFields.category'>
          <label>Category</label>
          <vSelect placeholder='Category'
            :options='categories'
            label="name"
          ></vSelect>
        </div>
      </div>
    </div>
    </main>
</template>

<script>
import preloader from './preloader';
import Api from '../shared/services/api';
import vSelect from 'vue-select';
export default {
  data(){
    return{
      currentUser: {},
      categories: [],
      preloaderSwitcher: 'preloader',
      dataForUpdate:{},
      infoFields: {
        firstName: true,
        lastName: true,
        gender: true,
        phone: true,
        country: true,
        email: false,
        userName: false,
        profileFoto: true,
        category: true,
      },
      classes: {
        personal:{
          tabs__personal: true,
          tabsBorderBlue: true,
          tabsGrey: false
        },
        account:{
          tabs__personal: true,
          tabsBorderBlue: false,
          tabsGrey: true
        }
      }
    }
  },
  methods: {
    tabsSwitcher(tab){
      if(tab === 'personal'){
        this.classes.personal = {
          tabs__personal: true,
          tabsBorderBlue: true,
          tabsGrey: false,
        };
        this.classes.account = {
          tabs__personal: true,
          tabsBorderBlue: false,
          tabsGrey: true,
        };
        this.infoFields = {
          firstName: true,
          lastName: true,
          gender: true,
          phone: true,
          country: true,
          email: false,
          userName: false,
          profileFoto: true,
          category: true,
        }
      }else{
        this.classes.personal = {
          tabs__personal: true,
          tabsBorderBlue: false,
          tabsGrey: true
        };
        this.classes.account = {
          tabs__personal: true,
          tabsBorderBlue: true,
          tabsGrey: false,
        };
        this.infoFields = {
          firstName: false,
          lastName: false,
          gender: false,
          phone: false,
          country: false,
          email: true,
          userName: true,
          profileFoto: false,
          category: false,
        }
      }
    }
  },
  components: {
    vSelect,
    preloader,
  },
  mounted: async function(){
    const res = await Api.get('/api/accounts/user');
    const categories = await Api.get('/api/accounts/categories')
    this.currentUser = res.data.user;
    this.categories = categories.data.categories;
    this.preloaderSwitcher = 'null';
  }
}    
</script>

<style lang='scss'>
@import '../styles/account.scss';
.confirm{
  padding-top: 34px;
}
    
</style>>

