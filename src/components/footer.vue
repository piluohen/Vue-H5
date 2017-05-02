<template>
    <div>
        <a v-show="footerShow" @click="showMode()" class="footer">关注更多大宗资讯</a>
        <div class="download-mode" v-if="modeShow">
            <div class="download-mode-body">
                <img src="../assets/img/long-arrow.png" alt="">
                <div class="download-mode-body-box">
                    <div class="item">
                        <span class="download-circle">1</span>
                        <span>点击右上角的</span>
                    </div>
                    <div class="item">
                        <span class="download-circle">2</span>
                        <span>选择在浏览器中打开</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

export default {
    data(){
        return {
            modeShow: false
        }
    },
    computed: {
        ...mapState({
            footerShow: state => state.nav.footerShow
        })
    },
    methods: {
        showMode(){
            if(isWeiXin()) {
                this.modeShow = true
            } else {
                this.$router.push({ path: 'download' })
            }
        }
        
    }
}
</script>

<style scoped>
    .footer{
        position:fixed;
        bottom:0;
        background-color: #00aeef;
        width:100%;
        height:4.3rem;
        line-height:4.3rem;
        font-size:1.5rem;
        color:#ffffff;
        text-align:center;
        z-index:100;
    }
    .download-mode{
        position: fixed;
        z-index: 123;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        color: #ffffff;
        font-size: 1.6rem;
    }
    .download-mode-body{
        text-align: right;
        padding: 1.2rem 1rem;
    }
    .download-mode-body img{
        width: 5.5rem;
        height: 7.2rem;
    }
    .download-mode-body-box .item{
        margin-bottom: 3.2rem;
        text-align: left;
        padding-left: 7.4rem;
    }
    .download-circle{
        display: inline-block;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        text-align: center;
        line-height: 2.4rem;
        font-size: 1.4rem;
        background: #e20e55;
        margin-right: 1.6rem;
    }
</style>