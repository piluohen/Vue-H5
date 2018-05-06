<template>
    <ul class="home-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li class="clear" v-for="item in homeList">
        <a @click="linkDetail(item.id)">
          <img class="fn-left home-list-img" v-lazyload="lazyLoadPic(item.indexImg,item.synId,1)">
          <div class="fn-right home-list-right">
            <div class="home-title">
                <!--<span class="hot-label" v-if="hotShow">HOT</span>-->
                <span class="home-title-h3">{{item.articleTitle}}</span>
            </div>
            <div class="clear home-user-box">
              <div class="home-user fn-left">
                <img v-lazyload="lazyLoadPic(item.headImg,null,2)">
                <span>{{item.nickName}}</span>
              </div>
              <div class="fn-right home-time">{{item.createTime | getDate}}</div>
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
                showFlag: false
            }
        },
        computed: {
            ...mapState({
                newsListId: state => state.nav.newsListId,
                hotShow: state => state.nav.hotShow,
                homeList: state => state.nav.homeList,
                loading: state => state.nav.loadFlag
            })
        },
        methods: {
          linkDetail(id){
            this.$router.push({path:'/detail',query: {articleId: id}})
          },
          loadMore(){
              this.$store.dispatch('setLoadFlag', {'loadFlag': true})
              let start = this.homeList.length || 0;
              this.getNewsList(start)
          },
          getNewsList(start){
            let params = {
              cateId: this.newsListId,
              industryId: this.$route.query.industryId,
              start: start,
              limit: 10,
            }
            
            this.$store.dispatch('getArticleList', params)
          },
          lazyLoadPic(url,type,status) {
            return Vue.filter('imgCdn')(url,type,status)
          },
          showData(){
            if(this.showFlag){

            }
          }
        },
        destroyed(){
          let params = {
            homeList: []
          }
          this.$store.dispatch('setLoadFlag', {'loadFlag': false})
          this.$store.dispatch('setHomeList', params)
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
      line-height: 1.6rem;
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
      vertical-align: top;
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
      margin-right: 0.5rem;
    }
</style>