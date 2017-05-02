<template>
  <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList">
        <div>
          <img class="content" v-lazyload="lazyLoadPic(item.imgPath)">
        </div>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'

export default {
  name: 'topSwiper',
  data(){
    return {
      
    }
  },
  computed: {
      ...mapState({
          newsListId: state => state.nav.newsListId,
          bannerList: state => state.nav.bannerList
      })
  },
  created(){
    let params = {
      cateId: this.newsListId
    }
    this.$store.dispatch('getBannerList', params)
  },
  methods: {
    lazyLoadPic(url) {
          return Vue.filter('imgCdn')(url)
        }
  }
}
</script>

<style>
.mint-swipe {
    height: 12.8rem;
  }
  
  .mint-swipe-indicators {
    bottom: 1rem;
    left: 46%;
    transform: translateX(0);
  }
  
  .mint-swipe-indicator {
    width: 1rem;
    height: 1rem;
    margin: 0 .3rem;
    background: #ffffff;
    opacity: 1;
  }
  .mint-swipe-indicator.is-active{
    background: #2788e7;
  }
  .mint-swipe-item img {
    width: 100%;
  }
</style>
