<template>
  <div class="home page404">
    <p>404! 页面未找到!</p>
    <p>3秒后返回首页</p>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('setNavShow', { navShow: false })
    this.$store.dispatch('setHFShow', { headerShow: true , footerShow: true})
    setTimeout( ()=> this.$router.push('/'),3000)
  }
}
</script>

<style>
.page404{
  padding:2rem;
  text-align:center;
}
</style>