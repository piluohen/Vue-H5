<template>
    <div class="header" v-show="headerShow">
        <div class="header-logo">
            <img class="logo" src="../assets/img/logo.png">
            <span class="logo-txt">你关心的，都在这里</span>
        </div>
        <div class="header-nav">
            <ul>
                <li>
                    <router-link to="/">推荐</router-link>
                </li>
                <li>
                    <router-link to="hot">最热资讯</router-link>
                </li>
                <li>
                    <router-link to="global">全球商讯</router-link>
                </li>
                <li>
                    <router-link to="sole">独家</router-link>
                </li>
            </ul>
        </div>
        <div class="zx-nav" v-show="navShow">
            <ul class="clear">
                <li v-for="item in hotKeyWord1" @click="selectHot(item.id)"><a>{{item.industryName}}</a></li>
                <li class="zx-nav-li">
                    <div @click="showMore()" class="zx-nav-img">
                        <img :class="{'ro':isShow}" src="../assets/img/zx-arrow.png">
                    </div>
                    <div class="zx-nav-more" v-show="isShow">
                        <div v-for="item in hotKeyWord2" @click="selectHot(item.id)"><a>{{item.industryName}}</a></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            isShow: false,
        }
    },
    computed: {
        ...mapState({
            navShow: state => state.nav.navShow,
            headerShow: state => state.nav.headerShow,
            hotKeyWord: state => state.nav.hotKeyWord,
            newsListId: state => state.nav.newsListId
        }),
        hotKeyWord1() {
            if(this.hotKeyWord != null){
                return this.hotKeyWord.slice(0,6)
            }
        },
        hotKeyWord2() {
            if(this.hotKeyWord != null){
                return this.hotKeyWord.slice(6)
            }
        }
    },
    methods: {
        showMore() {
            this.isShow = !this.isShow
        },
        selectHot(id){
            let params = {
              cateId: this.newsListId,
              industryId: id
            }
            this.$router.push({path:'/hot',query: params})
            this.$store.dispatch('getArticleList', params)
        }
    },
    created(){
        this.$store.dispatch('getHotArticleKeys')
    }
}
</script>

<style scoped>
.header{
    position:fixed;
    top:0;
    width:100%;
    z-index:100;
}
.header-logo{
    background:#ffffff;
    width:100%;
    height:3.6rem;
    line-height:3.6rem;
    padding-left:1rem;
}
.header-logo .logo{
    width:9rem;
    margin-right:1rem;
    vertical-align: middle;
}
.header-logo .logo-txt{
    color: #5e5e5e;
    font-size:1.3rem;
    vertical-align: middle;
}
.header-nav{
    background:#0089cf;
    width:100%;
    height:3.2rem;
    line-height:3.2rem;
    color: #ffffff;
    font-size:1.5rem;
}
.header-nav ul{
    display:flex;
}
.header-nav ul li{
    float:left;
    flex:1;
    text-align: center;
}
.header-nav ul li a{
    color:#ffffff;
    vertical-align: middle;
}
.zx-nav{
    background:#eeeeee;
    width:100%;
    height:3rem;
    line-height:3rem;
    font-size: 1.1rem;
}
.zx-nav ul li{
    float:left;
    width:14.4%;
    text-align:center;
    overflow: hidden;
    height: 3rem;
}
.zx-nav ul li a{
    color: #434343;
    vertical-align: middle;
}
.zx-nav ul .zx-nav-li{
    width: 13.6%;
    overflow: auto;
    height: auto;
    float: right;
}
.zx-nav ul .zx-nav-li .zx-nav-img{
    width: 100%;
    height:3rem;
}
.zx-nav ul li img{
    width:1.5rem;
    transform:rotate(180deg);
    -ms-transform:rotate(180deg); 	/* IE 9 */
    -moz-transform:rotate(180deg); 	/* Firefox */
    -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
    -o-transform:rotate(180deg); 
}
.zx-nav ul li img.ro{
    transform:rotate(0deg);
    -ms-transform:rotate(0deg); 	/* IE 9 */
    -moz-transform:rotate(0deg); 	/* Firefox */
    -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
    -o-transform:rotate(0deg);
}
.zx-nav-more{
    background:#eeeeee;
    border:1px #dddddd solid;
}
.zx-nav-more div{
    height: 2.6rem;
    line-height: 2.6rem;
    overflow: hidden;
    border-bottom:1px #dddddd solid;
}
.zx-nav-more div:last-child{
    border-bottom:none;
}
.zx-nav-more-none{
    display:none;
}
</style>