<template>
  <div class="home">
    <div class="detail">
      <div class="detail-title">{{articleDetail.articleTitle}}</div>
      <div class="detail-user-box clear">
        <div class="home-user fn-left">
          <img v-lazyload="lazyLoadPic(articleDetail.headImg,null,2)">
          <span>{{articleDetail.nickName}}</span>
          <span>{{articleDetail.createTime | getDate}}</span>
        </div>
        <!--<div class="detail-read fn-right">
          <img src="../assets/img/eye.png" alt="">
          <span>阅读</span>
          <span class="detail-readNum">{{articleDetail.readNum}}</span>
        </div>-->
      </div>
      <div class="detail-desc" v-html="articleDetail.articleContent"></div>
    </div>
  </div>
</template>

<script>
import topSwiper from 'components/topSwiper'
import { mapState } from 'vuex'
import Vue from 'vue'

export default {
  name: 'home',
  data() {
      return {
        
      }
  },
  components: {
      topSwiper
  },
  computed: {
      ...mapState({
          articleDetail: state => state.nav.articleDetail || {}
      })
  },
  created(){
      var params = {
        articleId: this.$route.query.articleId
      }
      this.$store.dispatch('setNavShow', { navShow: false })
      this.$store.dispatch('setHFShow', { headerShow: true , footerShow: true})
      this.$store.dispatch('getArticleDetail', params)
  },
  methods: {
    lazyLoadPic(url,type,status) {
        return Vue.filter('imgCdn')(url,type,status)
      }
  }
}
</script>

<style>
  .detail{
    padding: 0 1rem;
  }
  .detail-title{
    padding: 0.6rem 0;
    font-size: 1.8rem;
    color: #2c2c2c;
  }
  .detail-read img{
    width: 1.4rem;
    height: 1rem;
    vertical-align: text-top;
  }
  .detail-user-box{
    font-size: 1rem;
    color: #6a6a6a;
    padding: 0.3rem 0 0.6rem 0;
    border-bottom: 1px solid #eeeeee;
  }
  .detail-desc img{
    max-width: 100%;
  }
  .detail-readNum{
    margin-left: 0.5rem;
  }
</style>