<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
    <!--nav-bar :showNav="showNav"></nav-bar-->
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Public from 'service/public'
import footerBar from 'components/footer'
import headerBar from 'components/header'
//import getWxUserInfo from 'components/getWxUserInfo'

export default {
  name: 'app',
  data () {
    return {
        Public:Public
        ,showNav: true
        ,wxCode:''
    }
  },
  components:{
    footerBar,
    headerBar
  },
  watch: {
    // 如果路由有变化，会执行该方法
    '$route': function() {
        this.routeChange()
    }
  },
  methods: {
    routeChange () {
      let path = this.$route.path
      if (path === '/' || path === '/fs' || path === '/foshi' || path === '/me') {
        this.showNav = true
        this.pageBottom='50px'
      } else {
        this.showNav = false
        this.pageBottom='20px'
      }
    }
  }
//  ,beforeCreate () {
//    getWxUserInfo()
//  }
  ,created () {
    this.routeChange()
  }
}
</script>

<style>
html,body{
  height: 100%;
}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*margin-bottom:4.3rem;*/
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
  }
  .menu-bar{
    height:60px;
    line-height: 60px;
  }
  .menu-bar a{
    display: inline-block;
    width:80px;
    text-align: center;
  }
</style>

<!--<style lang="stylus" rel="stylesheet/stylus">-->
  <!--.clearfix-->
    <!--height:100px-->
    <!--width:100%-->
    <!--.uu-->
      <!--border:1px solid #ccc-->
<!--</style>-->

<!--<style lang="scss" rel="stylesheet/scss">-->
  <!--#main p {-->
    <!--color: #00ff00;-->
    <!--width: 97%;-->

    <!--.redbox {-->
      <!--background-color: #ff0000;-->
      <!--color: #000000;-->
    <!--}-->
  <!--}-->
<!--</style>-->