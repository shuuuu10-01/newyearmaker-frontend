<template>
  <header>
    <div class="logo">
      <p @click="home">NewYearMaker</p>
    </div>
    <div class="u-icon">
      <div class="menu" v-if="getlogin">
        <img :src="geticon" @click="$router.push('/user')"/>
      </div>
      <login-button text="ログイン"/>
    </div>
  </header>
</template>

<script>
import LoginButton from './Button/LoginButton.vue'
export default {
  components: { LoginButton },
  data() {
    return {
      menu: false
    }
  },
  methods: {
    home(){
      this.$router.push('/')
    }
  },
  computed: {
    geticon() {
      return this.$store.getters.get_user_photoURL
    },
    getlogin() {
      return this.$store.getters.get_isLogin
    }
  }
}
</script>

<style scoped>
header {
  background-color: white;
  top: 0;
  height: 60px;
  width: 100%;
  border-bottom: 2px solid #abbdc4;
}
header .logo {
  float: left;
  height: 100%;
  margin-left: 15px;
}

header .logo  p{
  font-size: 18px;
  line-height: 60px;
  margin: 0;
  cursor: pointer;
  color: #5e5c5c;
}
header .u-icon{
  float: right;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
}
header .u-icon img {
  width: 50px;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 20px;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
header .u-icon .login-button i {
  color: #55acee;
}
header .u-icon span.login-button {
  line-height: 45px;
  width: 100px;
  margin: 5px;
  cursor: pointer;
	display: block;
	text-align: center;
	text-decoration: none;
	color:  #55acee;
	background:#FFF;
	border-radius: 4px;
  border: 2px solid #55acee;
	box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
}
header .u-icon span.login-button:active {
	border-bottom: 2px solid #55acee;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
</style>
