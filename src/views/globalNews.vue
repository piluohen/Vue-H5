<template>
  <div class="home">
    <top-swiper></top-swiper>
    <news-list></news-list>
  </div>
</template>

<script>
import topSwiper from 'components/topSwiper'
import newsList from 'components/newsList'

export default {
  name: 'home',
  
  components: {
      topSwiper,
      newsList
  },
  created(){
      this.$store.dispatch('setNavShow', { navShow: false })
      this.$store.dispatch('setHFShow', { headerShow: true , footerShow: true})
      this.$store.dispatch('getNewsListId', { newsListId: 3})
      this.$store.dispatch('setHotShow', { hotShow: true})
      this.$store.dispatch('getIndustryId', { industryId: null})
  }
}
</script>

<style>
   
</style>