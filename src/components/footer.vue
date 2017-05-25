<template>
    <div class="footer" v-show="footerShow">
        <div class="footer-box clear">
            <div class="fn-left footer-left">
                <img class="footer-logo" src="../assets/img/footer-logo.png" alt="">
                <span class="footer-text">聚贸资讯APP客户端</span>
            </div>
            <a @click="showMode()" class="footer-btn fn-right">立即打开</a>
        </div>
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

<style>
    .footer{
        position:fixed;
        bottom:0;
        left: 0;
        background-color: #474747;
        width:100%;
        height: 3.9rem;
        line-height:3.9rem;
        font-size:1rem;
        color:#ffffff;
        text-align:center;
        z-index:100;
        color: #ffffff
    }
    .footer-box{
        padding: 0 1.3rem;
        height: 100%;
    }
    .footer-logo{
        width: 3.1rem;
        height: 3.1rem;
        margin-right: 0.6rem;
        vertical-align: middle;
    }
    .footer-text{
        vertical-align: middle;
    }
    .footer-btn{
        background-color: #2788e8;
        padding: 0.5rem;
        line-height: initial;
        vertical-align: middle;
        margin-top: 0.8rem;
        border-radius: 0.2rem;
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