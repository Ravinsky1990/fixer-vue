<template>
  <form action="#" class="signInForm">
    <h1 class="signInForm__title">Sign up</h1>
    <div class="dubleInput">
      <input type="text" placeholder="First name" class="formInput formInput_small">
      <input type="text" placeholder="Last name" class="formInput formInput_small">
    </div>
    <input type="text" placeholder="Username" class="formInput">
    <input type="email" placeholder="Eimail" class="formInput">
    <div class="signInForm__btnWrap">
      <button type='button' class="formBtn">Get started</button>
    </div>
  </form>
</template>

<script>
export default{

};
</script>

<style>
.signInForm{
  max-width: 632px;
  margin: auto;
  border-radius: 10px;
  background-color: #fff;
  padding-left: 116px;
  padding-right: 116px;
  padding-top: 70px;
  padding-bottom: 80px;
  box-sizing: border-box;
}
.signInForm__title{
  font-family: "Exo 2", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.4px;
  color: #002396;
  margin-bottom: 44px;
}
.dubleInput {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.formInput {
  display: block;
  width: 100%;
  border: 2px solid #F2F2F2;
  padding-left: 14px;
  padding-top: 11px;
  padding-bottom: 11px;
  margin-top: 24px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #222428;
  outline: none;
  background: #FCFCFC;
  border-radius: 2px;
  box-sizing: border-box;
}
.formInput_small {
  flex-basis: 190px;
}
.formInput:focus {
  border-left: 2px solid #2A74DB;
  background-color: #fff;
}
.signInForm__btnWrap{
  margin-top: 41px;
  text-align: right;
}
.formBtn{
  width: 188px;
  height: 42px;
  border: none;
  outline: none;
  font-family: "Exo 2",sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background-color: #0AD69C;
  cursor: pointer;
  border-radius: 2px;
}
</style>
