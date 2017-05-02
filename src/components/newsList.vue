<template>
    <ul class="home-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li class="clear" v-for="item in homeList">
        <a @click="linkDetail(item.id)">
          <img class="fn-left home-list-img" v-lazyload="lazyLoadPic(item.indexImg)">
          <div class="fn-right home-list-right">
            <div class="home-title">
                <span class="hot-label" v-if="hotShow">HOT</span>
                <span class="home-title-h3">{{item.articleTitle}}</span>
            </div>
            <div class="clear home-user-box">
              <div class="home-user fn-left">
                <img v-lazyload="lazyLoadPic(item.headImg)">
                <span>{{item.nickName}}</span>
              </div>
              <div class="fn-right home-time">{{item.pushTime | getDate}}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
</template>
<script>
    import { mapState } from 'vuex'
    import Vue from 'vue'

    export default {
        name: 'newsList',
        data(){
            return {
                
            }
        },
        computed: {
            ...mapState({
                newsListId: state => state.nav.newsListId,
                hotShow: state => state.nav.hotShow,
                homeList: state => state.nav.homeList
            })
        },
        created(){
            this.getNewsList()
        },
        methods: {
          linkDetail(id){
            this.$router.push({path:'/detail',query: {articleId: id}})
          },
          loadMore(){

          },
          getNewsList(){
            let params = {
              cateId: this.newsListId,
              industryId: this.$route.query.industryId
            }
            this.$store.dispatch('getArticleList', params)
          },
          lazyLoadPic(url) {
            return Vue.filter('imgCdn')(url)
          }
        },
        watch: {
          "$route": "getNewsList"
        }
    }
</script>
<style>
    .home-list{
      margin: 0;
      padding: 0 1rem;
    }
    .home-list li{
      padding: 1.5rem 0;
      transform: translate3D(0,0,0);
    }
    .home-list li + li{
      border-top: 1px solid #eeeeee;
    }
    .home-list-img{
      width: 8.5rem;
      height: 6.5rem;
    }
    .home-list-right{
      width: calc(100% - 9.5rem);
      height: 6.5rem;
      position: relative;
    }
    .home-title{
      height: 4.5rem;
      overflow: hidden;
    }
    .home-title-h3{
      color: #2c2c2c;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
    .hot-label{
      display: inline-block;
      width: 3rem;
      height: 1.5rem;
      margin-right: 0.2rem;
      line-height: 1.6rem;
      border-radius: 0.2rem;
      background: #d21e1e;
      font-size: 0.8rem;
      color: #ffffff;
      text-align: center;
    }
    .home-user-box{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.6rem;
      color: #6a6a6a;
    }
    .home-user img{
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.2rem;
      border-radius: 50%;
      vertical-align: middle;
    }
    .home-user span{
      vertical-align: middle;
    }
</style>