<template>
  <form action="#" class="signInForm signInForm_smallPadding">
    <h1 class="signInForm__title signInForm__title__dark">Complete your account</h1>
    <input type="password" placeholder="Create password" class="formInput">
    <div class="progressBar">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <input type="password" placeholder="Confirm password" class="formInput formInput__compliteAccaunt">
    <div class="termsOfService">
        <div class="termsOfService__checkBox">
          <img src='../assets/termsCheck.svg' alt="check">
        </div>
        <div>
          <span class="termsOfService__title">I agree to the myFixer.com</span>
          <a href="#" class="termsOfService__policy">Terms of Service</a>
        </div>
    </div>
    <div class="termsOfService">
          <div class="termsOfService__checkBox">
            <img src="../assets/termsCheck.svg" alt="check">
          </div>
          <div>
            <span class="termsOfService__title">I agree to the myFixer.com</span>
            <a href="#" class="termsOfService__policy">Prvacy Policy</a>
          </div>
    </div>
    <div class="signInForm__btnWrap">
      <button type='button' class="formBtn">Get started</button>
    </div>
  </form>
</template>

<script>
export default {
  
}
</script>

<style>
.signInForm__title__dark {
  color: #01134E;
}
.progressBar{
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
}
.progressBar span {
  flex-basis: 32%;
  height: 6px;
  background: #FF6359;
  border-radius: 10px;
}
.formInput__compliteAccaunt{
  margin-bottom: 33px;
  margin-top: 21px;
}
.termsOfService{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.termsOfService__checkBox {
  padding: 4px;
  background: rgba(245, 247, 250, 0.5);
  border: 2px solid #F2F2F2;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 12px;
}
.termsOfService__title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #222428;
  margin-right: 4px;
}
.termsOfService__policy {
  color: #2a2aa2;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.signInForm_smallPadding{
  padding-bottom: 56px;
}

</style>